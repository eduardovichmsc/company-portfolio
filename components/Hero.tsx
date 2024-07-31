//Hero.tsx
import Image from "next/image";

const Hero = () => {
	return (
		<div className="container m-auto hero flex-col justify-center items-center p-6 md:p-0">
			<p className="w-fit m-auto font-bold text-orange-500 tracking-tight border-orange-500 border-2 border-opacity-50 px-3 py-1 my-4 rounded-full flex gap-2 text-sm md:text-base">
				Beyond Walls, We Build Dreams
				<Image
					src="/icons/rocket.png"
					alt="rocket"
					width={120}
					height={120}
					className="w-[1.25rem] object-contain"
				/>
			</p>
			<p className="text-4xl sm:text-6xl lg:text-6xl xl:text-8xl font-semibold tracking-tighter w-[80%] md:w-[70%] lg:w-[80%] text-center leading-tight m-auto">
				<span className="flex gap-2 md:gap-6 items-center justify-center">
					Architecture
					<Image
						src="/icons/classical-building.png"
						alt="classical building"
						width={120}
						height={120}
						className="object-contain w-[3rem] md:w-[5rem] lg:w-[6rem] xl:w-[9rem]"
					/>
				</span>
				<span className="">Designed for Life.</span>
			</p>
			<p className="text-base md:text-lg xl:text-xl font-medium tracking-tight max-w-[100%] md:max-w-[85%] xl:max-w-[70%] mx-auto my-6 text-center leading-relaxed text-neutral-500">
				Where Creativity, Sustainability, and Innovation Merge to Shape
				Tomorrow&apos;s World through Timeless Design Excellence and Inspired
				Space Crafted for Today and Beyond
			</p>
			<div
				className="aspect-[3/4] md:aspect-video w-[100%] bg-orange-200 rounded-xl my-10 sm:my-14 bg-cover bg-center bg-no-repeat"
				style={{ backgroundImage: "url(/images/hero.jpg)" }}></div>
		</div>
	);
};

export default Hero;
