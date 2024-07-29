const Vision = () => {
	return (
		<div className="container mx-auto section">
			<p className="section-title font-semibold leading-tight tracking-tighter text-center">
				Let's Start Building Your Vision
			</p>
			<p className="section-body text-xl w-[100%] md:w-[60%] tracking-tighter mt-4 mx-auto text-center">
				Reach Out to Us for Expert Guidance, Collaborative Design, and Tailored
				Solutions to Shape Your Vision into Reality
			</p>
			<div className="flex gap-4 md:gap-8 mt-10 md:flex-row flex-col justify-center">
				<button className="text-white bg-orange-500 px-8 py-4 text-lg tracking-wide font-medium hover:bg-orange-400 transition">
					Contact Us
				</button>
				<button className="border-2 border-neutral-300 px-8 py-4 text-lg tracking-wide font-medium text-neutral-600 hover:text-neutral-800 hover:bg-neutral-200 hover:border-transparent transition">
					Book A Call
				</button>
			</div>
		</div>
	);
};

export default Vision;
