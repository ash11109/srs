import React from 'react'

const WhyChooseUs = () => {
    return (
        <section className="light py-14 md:py-24 bg-blue-50 flex content-center items-center min-h-screen">
            <div className="container px-4 mx-auto">
                <div className="grid grid-cols-12 gap-6 items-center justify-between mb-10 md:mb-16 border-l-blue-950">
                    <div className="col-span-12 md:col-span-6 lg:col-span-4">
                        <h2 className="text-[32px] font-bold leading-normal text-[#162b58]">
                            Why <span className="text-[#3F65B7]">Choose</span> Us ? <br /> Let's check the reason . . .
                        </h2>
                    </div>
                    <div className="col-span-12 md:col-span-6 lg:col-span-5 lg:col-start-8">
                        <p className="text-lg leading-[1.7] opacity-60">

                            <section >
                                <div className="max-w-4xl mx-auto text-center">
                                    <h2 className="text-3xl font-bold text-gray-900 mb-4">
                                        About Sysroot Solution Pvt Ltd
                                    </h2>
                                    <p className="text-gray-700 text-lg leading-relaxed">
                                        Sysroot Solution Pvt Ltd is a leading software and app development company committed to delivering cutting-edge digital solutions.
                                        We specialize in <strong>custom software development, web applications, mobile apps, and enterprise solutions</strong> tailored to your business needs.
                                        With a focus on innovation, scalability, and security, we empower businesses with next-gen technology.
                                    </p>
                                </div>

                                <div className="max-w-4xl mx-auto mt-8">
                                    <h3 className="text-2xl font-semibold text-gray-900 text-center mb-4">
                                        Why Choose Us?
                                    </h3>
                                    <ul className="space-y-4">
                                        {[
                                            ["Expert Development Team", "Our skilled professionals ensure high-quality, future-ready solutions."],
                                            ["Custom & Scalable Solutions", "We develop software that grows with your business."],
                                            ["Latest Technologies", "We leverage modern tech stacks for efficiency and performance."],
                                            ["Timely Delivery", "We prioritize deadlines without compromising quality."],
                                            ["Cost-Effective Services", "Get premium solutions at competitive prices."],
                                            ["Dedicated Support", "Our customer support ensures smooth post-deployment assistance."]
                                        ].map(([title, desc], index) => (
                                            <li key={index} className="flex items-start space-x-3">
                                                <span className="text-green-500 text-xl">✅</span>
                                                <div>
                                                    <h4 className="text-lg font-medium text-gray-900">{title}</h4>
                                                    <p className="text-gray-700">{desc}</p>
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="text-center mt-8">
                                    <p className="text-lg font-semibold text-gray-900">
                                        Partner with Sysroot Solution Pvt Ltd and transform your ideas into reality!
                                    </p>
                                </div>
                            </section>

                        </p>
                    </div>
                </div>
                <div className="grid grid-cols-1 gap-9 md:grid-cols-2 lg:grid-cols-3 justify-items-center items-center">

                </div>
            </div>
        </section>
    )
}

export default WhyChooseUs