const Journey = () => {
	return (
		<div className="container m-auto w-full flex section">
			<div className="size-[45%] aspect-square bg-orange-500 rounded-2xl relative hidden lg:block">
				<div className="size-[40%] bg-white rounded-xl absolute bottom-10 right-10">
					<div className="absolute w-[100%] bottom-0 right-0 lg:p-5 xl:p-8">
						<p className="lg:text-5xl xl:text-7xl text-orange-600 font-medium tracking-tighter">
							99%
						</p>
						<p className="lg:text-base xl:text-xl font-medium mt-1 xl:mt-4 tracking-tight">
							Productivity increase on average
						</p>
					</div>
				</div>
			</div>
			<div className="size-1/2 lg:ml-20 xl:ml-40 py-16 flex flex-col">
				<p className="section-title">The Journey to Architectural Excellence</p>
				<div className="flex flex-col gap-0 xl:gap-4 mt-6">
					<p className="text-medium md:font-semibold text-xl md:text-2xl tracking-tight">
						Vision to Reality
					</p>
					<p className="section-body w-[80%] font-extralight tracking-tighter">
						PeakStudio's Journey of Architectural Innovation Architectural
						Ingenuity Unveiled PeakStudio's Path to Excellence.
					</p>
				</div>

				<div className="flex flex-col gap-0 xl:gap-4 mt-6">
					<p className="text-medium md:font-semibold text-xl md:text-2xl tracking-tight">
						Building Dreams
					</p>
					<p className="section-body w-[80%] font-extralight tracking-tighter">
						Pioneering Innovation, Collaborative Excellence, and Unwavering
						Commitment to Transforming Visions into Timeless Realities
					</p>
				</div>
			</div>
		</div>
	);
};
export default Journey;
