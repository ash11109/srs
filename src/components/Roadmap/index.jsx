import React from 'react';
import './index.css';

const Roadmap = () => {
    return (
        <section className="light py-20 md:py-24 bg-white relative z-[1] flex content-center items-center min-h-screen shadow-sm">
            <div className="px-4 mx-auto">
                <div className="container grid grid-cols-12 gap-6 items-center justify-between mb-6 md:mb-12">
                    <div className="col-span-12 md:col-span-6 lg:col-span-4">
                        <h2 className="text-[32px] font-bold leading-normal text-[#162b58]">
                            Your Vision, <br />Our <span className="text-[#3F65B7]">Roadmap</span> . . .
                        </h2>
                    </div>
                    <div className="col-span-12 md:col-span-6 lg:col-span-5 lg:col-start-8">
                        <p className="text-lg leading-[1.7] opacity-60">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                            Ipsum corporis fugit minima voluptate, obcaecati omnis dignissimos mollitia similique debitis veniam ducimus,
                            tempore perferendis voluptatibus provident ipsa expedita quia labore quod.
                        </p>
                    </div>
                </div>

                <div className='container py-4'>
                    <div className="roadmap">

                        <div className="timeline-block timeline-block-right">
                            <div className="marker"></div>
                            <div className="timeline-content">
                                <h3>First Year</h3>
                                <span>Some work experience</span>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate.</p>
                            </div>
                        </div>

                        <div className="timeline-block timeline-block-left">
                            <div className="marker"></div>
                            <div className="timeline-content">
                                <h3>Seconed Year</h3>
                                <span>Some work experience</span>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate.</p>
                            </div>
                        </div>

                        <div className="timeline-block timeline-block-right">
                            <div className="marker"></div>
                            <div className="timeline-content">
                                <h3>Third Year</h3>
                                <span>Some work experience</span>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate.</p>
                            </div>
                        </div>

                        <div className="timeline-block timeline-block-left">
                            <div className="marker"></div>
                            <div className="timeline-content">
                                <h3>Fourth Year</h3>
                                <span>Some work experience</span>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate.</p>
                            </div>
                        </div>

                        <div className="timeline-block timeline-block-right">
                            <div className="marker"></div>
                            <div className="timeline-content">
                                <h3>Fifth Year</h3>
                                <span>Some work experience</span>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Roadmap;
