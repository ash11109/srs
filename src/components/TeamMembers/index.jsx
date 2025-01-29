import React from 'react'

const TeamMembers = () => {
    return (
        <section className="light py-14 md:py-24 bg-blue-50 flex content-center items-center min-h-screen">
            <div className="container px-4 mx-auto">
                <div className="grid grid-cols-12 gap-6 items-center justify-between mb-10 md:mb-16 border-l-blue-950">
                    <div className="col-span-12 md:col-span-6 lg:col-span-4">
                        <h2 className="text-[32px] font-bold leading-normal text-[#162b58]">
                            Meet Our <span className="text-[#3F65B7]">Team</span> <br />Heart of the Organization . . .
                        </h2>
                    </div>
                    <div className="col-span-12 md:col-span-6 lg:col-span-5 lg:col-start-8">
                        <p className="text-lg leading-[1.7] opacity-60">
                            "Meet Our Team – the heart of Sysroot Solution Pvt Ltd! Our passionate experts drive innovation, turning challenges into cutting-edge solutions."
                        </p>
                    </div>
                </div>
                <div className="grid grid-cols-1 gap-9 md:grid-cols-2 lg:grid-cols-3 justify-items-center items-center">

                </div>
            </div>
        </section>
    )
}

export default TeamMembers