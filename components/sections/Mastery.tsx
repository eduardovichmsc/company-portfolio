const Mastery = () => {
	return (
		<div className="container m-auto flex flex-col-reverse gap-10 lg:flex-row justify-between section">
			<div className="size-full lg:size-[45%] flex flex-col gap-4">
				<p className="section-title">
					Discovering Architectural Mastery Evolution
				</p>
				<p className="section-body w-[80%] tracking-tighter">
					Exploring the Intersection of Vision, Innovation, Craftsmanship
					provisions and performing accounting duties.
				</p>

				<div className="flex mt-6 gap-10 md:gap-20">
					<div className="flex flex-col">
						<p className="text-4xl md:text-5xl text-orange-600 font-medium tracking-tighter">
							205M+
						</p>
						<p className="text-base md:text-lg font-medium mt-0 md:mt-4 tracking-tight">
							Monthly active users
						</p>
					</div>

					<div className="flex flex-col">
						<p className="text-4xl md:text-5xl text-orange-600 font-medium tracking-tighter">
							99%
						</p>
						<p className="text-base md:text-lg font-medium mt-0 md:mt-4 tracking-tight">
							Customer satisfaction
						</p>
					</div>
				</div>

				<div className="flex gap-4 md:gap-8 mt-10 md:flex-row flex-col">
					<button className="text-white bg-orange-500 px-8 py-4 text-lg tracking-wide font-medium hover:bg-orange-400 transition">
						Contact Us
					</button>
					<button className="border-2 border-neutral-300 px-8 py-4 text-lg tracking-wide font-medium text-neutral-600 hover:text-neutral-800 hover:bg-neutral-200 hover:border-transparent transition">
						Book A Call
					</button>
				</div>
			</div>
			<div className="size-[70%] lg:size-[45%] aspect-square bg-orange-500 rounded-2xl relative hidden md:block"></div>
		</div>
	);
};

export default Mastery;
