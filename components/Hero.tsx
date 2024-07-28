const Hero = () => {
	return (
		<div className="container m-auto hero flex-col justify-center items-center">
			<p className="w-fit m-auto font-bold text-orange-500 tracking-tight border-orange-500 border-2 border-opacity-50 px-3 py-1 my-4 rounded-full">
				Beyond Walls, We Build Dreams 🚀
			</p>
			<p className="text-8xl font-semibold tracking-tighter w-[50%] text-center leading-tight m-auto">
				<span>Architecture 🏛 </span>
				<span>Designed for Life.</span>
			</p>
			<p className="text-lg font-medium tracking-tight max-w-[52%] mx-auto my-6 text-center leading-relaxed text-neutral-500">
				Where Creativity, Sustainability, and Innovation Merge to Shape
				Tomorrow's World through Timeless Design Excellence and Inspired Space
				Crafted for Today and Beyond
			</p>
			<div className="aspect-video w-[100%] bg-orange-200 rounded-xl my-14"></div>
		</div>
	);
};

export default Hero;
