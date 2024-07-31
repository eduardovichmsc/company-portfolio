import Button from "../Button";

const Mastery = () => {
	return (
		<div className="container m-auto flex flex-col-reverse gap-10 lg:flex-row items-center justify-between section">
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

				<div className="gap-4 md:gap-8 mt-10 md:flex-row flex-col hidden md:flex">
					<Button primary className="">
						Contact Us
					</Button>
					<Button secondary className="">
						Book A Call
					</Button>
				</div>
			</div>
			<div
				className="size-[70%] lg:size-[45%] aspect-square bg-orange-500 rounded-2xl relative hidden md:block bg-cover bg-center bg-no-repeat"
				style={{ backgroundImage: "url(images/mastery.jpg)" }}></div>
		</div>
	);
};

export default Mastery;
