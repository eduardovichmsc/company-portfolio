import Button from "../Button";

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
				<Button primary className="">
					Contact Us
				</Button>
				<Button secondary className="">
					Book A Call
				</Button>
			</div>
		</div>
	);
};

export default Vision;
