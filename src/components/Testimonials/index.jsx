import React, { useState, useEffect } from "react";
import chamkta_Hindustan from '../../assets/images/clients/chamkta_hindustan.jpeg';
import jspc_reg from '../../assets/images/clients/jspc_.jpg';
import './index.css';

const testimonialList = [
	[
		{
			img: chamkta_Hindustan,
			name: "Santosh Prasad",
			position: "CEO at Chamakta Hindustan",
			content:
				"Team sysroot has developed the website and app for our new portal. We are really satisfied with their services.",
		},
		{
			img: jspc_reg,
			name: "Kaushalendra Kumar",
			position: "Ex Registrar at JSPC",
			content:
				"The online registration and renewal software developed by them is working smoothly with no interruption.",
		},
		{
			img: chamkta_Hindustan,
			name: "Santosh Prasad",
			position: "CEO at Chamakta Hindustan",
			content:
				"Team sysroot has developed the website and app for our new portal. We are really satisfied with their services.",
		},
	],
	[
		{
			img: jspc_reg,
			name: "Kaushalendra Kumar",
			position: "Ex Registrar at JSPC",
			content:
				"The online registration and renewal software developed by them is working smoothly with no interruption.",
		},
		{
			img: chamkta_Hindustan,
			name: "Santosh Prasad",
			position: "CEO at Chamakta Hindustan",
			content:
				"Team sysroot has developed the website and app for our new portal. We are really satisfied with their services.",
		},
		{
			img: jspc_reg,
			name: "Kaushalendra Kumar",
			position: "Ex Registrar at JSPC",
			content:
				"The online registration and renewal software developed by them is working smoothly with no interruption.",
		},
	],
];

function ShapeOne() {
	return (
		<svg
			className="absolute bottom-0 left-0 -z-[1]"
			width="340"
			height="572"
			viewBox="0 0 404 572"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<circle
				cx="118"
				cy="286"
				r="265.5"
				stroke="#4175DF"
				strokeOpacity="0.1"
				strokeWidth="41"
			/>
		</svg>
	);
}

function ShapeTwo() {
	return (
		<svg
			className="absolute top-0 right-0 -z-[1]"
			width="269"
			height="479"
			viewBox="0 0 269 479"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<circle
				cx="239.5"
				cy="239.5"
				r="239.5"
				fill="#3F65B7"
				fillOpacity="0.35"
			/>
		</svg>
	);
}

const Testimonials = () => {
	const [index, setIndex] = useState(0);
	const [fading, setFading] = useState(false);

	useEffect(() => {
		const interval = setInterval(() => {
			triggerFade((index + 1) % testimonialList.length);
		}, 5000);

		return () => clearInterval(interval);
	}, [index]);

	const triggerFade = (newIndex) => {
		setFading(true);
		setTimeout(() => {
			setFading(false);
			setIndex(newIndex);
		}, 500);
	};

	const handleSelect = (selectedIndex) => {
		triggerFade(selectedIndex);
	};

	return (
		<section className="light py-5 md:py-24 bg-blue-50 relative z-[1] flex content-center items-center min-h-screen shadow-sm">
			<ShapeOne />
			<ShapeTwo />
			<div className="container px-4 mx-auto">
				<div className="grid grid-cols-12 gap-6 items-center justify-between mb-6 md:mb-12">
					<div className="col-span-12 md:col-span-6 lg:col-span-4">
						<h2 className="text-[32px] font-bold leading-normal text-[#162b58]">
							Everyone should believe in What Our <span className="text-[#3F65B7]">Clients</span> Say . . .
						</h2>
					</div>
					<div className="col-span-12 md:col-span-6 lg:col-span-5 lg:col-start-8">
						<p className="text-lg leading-[1.7] opacity-60 text-gray-700">
							"Everyone should believe in what our clients say – their success stories reflect our commitment to excellence. See how we turn ideas into impactful solutions!" 
						</p>
					</div>
				</div>

				<div className="mt-16">
					<div
						className={`grid grid-cols-3 gap-6 transition-opacity duration-500 ${
							fading ? "opacity-0" : "opacity-100"
						}`}
					>
						{testimonialList[index].map((testimonial, i) => (
							<div className="col-span-3 lg:col-span-1" key={i}>
								<div className="bg-white shadow-xl shadow-[#3f65b725] h-full p-6 xl:p-10 rounded-lg">
									<div className="flex items-center mb-6">
										<div className="mr-3">
											<img
												src={testimonial.img}
												alt={testimonial.name}
												className="max-w-full h-auto rounded-full border object-cover"
												width="65"
											/>
										</div>
										<div>
											<h4 className="text-xl font-medium text-[#3F65B7]">
												{testimonial.name}
											</h4>
											<p className="text-sm mb-2 text-gray-400">{testimonial.position}</p>
										</div>
									</div>
									<p className="opacity-75 mb-2 text-gray-600">{testimonial.content}</p>
								</div>
							</div>
						))}
					</div>

					<div className="flex justify-center gap-2 mt-12">
						{testimonialList.map((_, i) => (
							<button
								className={`w-2 h-2 rounded-full ${
									index === i
										? "scale-125 bg-[#3F65B7]"
										: "bg-gray-200"
								}`}
								key={i}
								onClick={() => handleSelect(i)}
							/>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

export default Testimonials;
