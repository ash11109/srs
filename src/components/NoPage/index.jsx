import { NavLink } from 'react-router-dom';
import './index.css';
import { FaInfoCircle } from 'react-icons/fa';

const NoPage = () => {
    return (
        <section className="bg-white">
            <div className="container flex items-center min-h-[55vh] px-6 py-12 mx-auto">
                <div className="flex flex-col items-center max-w-sm mx-auto text-center">
                    <p className="p-3 text-sm font-medium text-blue-400 rounded-full bg-blue-50">
                        <FaInfoCircle size={24}/>
                    </p>
                    <h1 className="mt-3 text-2xl font-semibold text-gray-800 dark:text-white md:text-3xl">Page not found</h1>
                    <p className="mt-4 text-gray-500 dark:text-gray-400">The page you are looking for doesn't exist.</p>
                    <NavLink to="/" className="mt-5 w-1/2 px-5 py-2 text-sm tracking-wide text-white transition-colors duration-200 bg-srs-primary rounded-lg shrink-0 sm:w-auto hover:bg-srs-primary-hover">
                        Go Home
                    </NavLink>
                </div>
            </div>
        </section>
    )
}

export default NoPage