import React from 'react'

const PageHeading = (props) => {
    return (
        <div className='bg-srs-primary'>
            <div className="container flex flex-col items-center px-4 py-16 mx-auto text-center">
                <h2 className="max-w-2xl mx-auto text-2xl font-bold tracking-wider text-gray-50 xl:text-4xl">
                    {props.pageTitle}
                </h2>
                <p className="max-w-4xl mt-3 text-2xl text-center font-semibold text-blue-100 tracking-widest">
                    {props.pageSubTitle}
                </p>
            </div>
        </div>
    )
}

export default PageHeading