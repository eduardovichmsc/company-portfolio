import { Inter, Poppins } from "next/font/google";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import InfoCard from "@/components/InfoCard";
import { SwiperSlide, Swiper } from "swiper/react";
import Footer from "@/components/Footer";
import Journey from "@/components/sections/Journey";
import Vision from "@/components/sections/Vision";

const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({
	subsets: ["latin"],
	weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function Home() {
	return (
		<main className={`min-h-screen ${poppins.className} overflow-x-hidden`}>
			<Navbar />
			<div className="mt-20 md:mt-32">
				<Hero />
				<div className="bg-white w-full">
					<div className="container mx-auto py-20">
						<p className="section-title text-center">
							Our Collaborative Approach
						</p>
						<p className="section-body text-center">
							Unveilling the Essence of Design through Collaborative Innovation
							and Expert Craftsmanship
						</p>
						<div className="flex gap-5 md:gap-[5%] my-6 md:my-16 flex-wrap md:flex-nowrap">
							<InfoCard
								title="Visionary Consultation"
								description="Your aspirations fuel our creativity. We begin by listeting intently, understanding your goals, and envisioning."
							/>
							<InfoCard
								title="Collaborative Creation"
								description="Together, we shape ideas into reality. Through iterative design sessions, we fuse innovation with practicality."
							/>
							<InfoCard
								title="Expert Execution"
								description="From blueprint to built reality, we oversee every detail. Our meticulous planning and skilled craftsmanship bring."
							/>
						</div>
					</div>
				</div>

				<div className="flex flex-col gap-16 md:gap-32 md:pt-36 md:pb-24">
					<Journey />

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

					<div className="section">
						<div className="container mx-auto flex justify-between items-center">
							<div className="">
								<p className="section-title w-fit">
									Our Latest Architectural Marvel
								</p>
								<p className="section-body w-[80%] tracking-tighter mt-4">
									Introducing Our Latest Architectural Marvel - Pushing
									Boundaries and Redefining Architectural Excellence
								</p>
							</div>
							<div className="hidden lg:block">
								<button className="text-white bg-orange-500 break- px-8 py-4 text-lg tracking-wide font-medium hover:bg-orange-400 transition">
									View More
								</button>
							</div>
						</div>
						<div className="container mx-auto mt-16">
							{/* <div className="bg-black aspect-3/4 w-1/4 rounded-lg"></div> */}
							<Swiper
								spaceBetween={50}
								slidesPerView={3}
								onSlideChange={() => console.log("slide change")}
								onSwiper={(swiper) => console.log(swiper)}>
								<div className="bg-black aspect-3/4 w-1/4 rounded-lg"></div>
							</Swiper>
						</div>
					</div>

					<div
						className="w-full md:p-32 bg-cover bg-center bg-opacity-20"
						style={{ backgroundImage: "url('/images/building-day.jpg')" }}>
						<div className="container mx-auto">
							<div className="w-[100%] lg:w-[55%] bg rounded-none md:rounded-[2rem] px-8 md:px-16 py-10 md:py-20 flex flex-col justify-center gap-4 md:gap-8 md:border-2 md:border-white relative">
								<div className="absolute backdrop-blur-md w-full h-full top-0 left-0 md:rounded-[2rem]"></div>
								<p className="text-2xl md:text-5xl font-medium leading-tight tracking-tighter text-white relative">
									Start Your Architectural with PeakStudio
								</p>
								<button className="text-white bg-orange-500 px-8 py-4 text-base md:text-lg tracking-wide font-medium hover:bg-orange-400 transition w-full md:w-fit relative">
									Get Started
								</button>
							</div>
						</div>
					</div>

					<Vision />
				</div>
			</div>

			<Footer />
		</main>
	);
}
