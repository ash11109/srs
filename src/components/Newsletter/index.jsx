import React from 'react'

const Newsletter = () => {
    return (
        <div>
            <div className="w-full h-96 flex flex-col gap-3 justify-center items-center p-5 my-1 bg-gradient-to-t from-[#162b58] to-[#3F65B7]">
                <div className="w-full mb-6 xl:mb-0 sm:text-center mb-3">

                    <div className=" text-gray-200 text-3xl font-extrabold">How can we Help You ?</div>

                    <div className="text-lg text-gray-400 hidden md:block">Get in touch.</div>

                </div>
                <div className="flex flex-col justify-center sm:flex-row gap-3 w-full">
                    <input
                        type="text"
                        placeholder="Enter your email"
                        className="sm:w-2/4 h-12 p-3 text-gray-300 border border-solid border-gray-700 rounded-lg shadow-xl bg-transparent"
                    />
                    <button
                        type="submit"
                        className="sm:w-1/4 h-12 text-white bg-[#3F65B7] rounded-lg shadow transition-all duration-300 ease-in-out hover:bg-blue-900"
                    >
                        Subscribe
                    </button>
                </div>
                <div className="mt-3 text-sm sm:text-center text-gray-300">
                    We care about your data in our{" "}
                    <u className="cursor-pointer transition-all duration-300 ease-in-out  hover:text-gray-700">
                        privacy policy
                    </u>.
                </div>
            </div>
        </div>
    )
}

export default Newsletter