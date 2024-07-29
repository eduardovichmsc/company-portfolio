import { Inter, Poppins } from "next/font/google";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import InfoCard from "@/components/InfoCard";
import { SwiperSlide, Swiper } from "swiper/react";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({
	subsets: ["latin"],
	weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function Home() {
	return (
		<main className={`min-h-screen ${poppins.className}`}>
			<Navbar />
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
					<div className="flex gap-[5%] my-16">
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

			<div className="flex flex-col gap-32 pt-36 pb-24">
				<div className="container m-auto w-full flex">
					<div className="size-[45%] aspect-square bg-orange-500 rounded-2xl relative">
						<div className="size-[40%] bg-white rounded-xl absolute bottom-10 right-10">
							<div className="absolute bottom-0 p-8 w-[90%]">
								<p className="text-7xl text-orange-600 font-medium tracking-tighter">
									99%
								</p>
								<p className="text-xl font-medium mt-4 tracking-tight">
									Productivity increase on average
								</p>
							</div>
						</div>
					</div>
					<div className="size-1/2 ml-40 py-16 flex flex-col gap-2">
						<p className="section-title">
							The PeakStudio Journey to Architectural Excellence
						</p>
						<div className="flex flex-col gap-4 mt-6">
							<p className="font-semibold text-2xl tracking-tight">
								Vision to Reality
							</p>
							<p className="section-body text-xl w-[80%] tracking-tighter">
								PeakStudio's Journey of Architectural Innovation Architectural
								Ingenuity Unveiled PeakStudio's Path to Excellence.
							</p>
						</div>

						<div className="flex flex-col gap-4 mt-6">
							<p className="font-semibold text-2xl tracking-tight">
								Building Dreams
							</p>
							<p className="section-body text-xl w-[80%] tracking-tighter">
								Pioneering Innovation, Collaborative Excellence, and Unwavering
								Commitment to Transforming Visions into Timeless Realities
							</p>
						</div>
					</div>
				</div>

				<div className="container m-auto flex justify-between">
					<div className="size-[45%] flex flex-col gap-4">
						<p className="section-title">
							Discovering Architectural Mastery Evolution
						</p>
						<p className="section-body text-xl w-[80%] tracking-tighter">
							Exploring the Intersection of Vision, Innovation, Craftsmanship
							provisions and performing accounting duties.
						</p>

						<div className="flex mt-6 gap-20">
							<div className="flex flex-col">
								<p className="text-5xl text-orange-600 font-medium tracking-tighter">
									205M+
								</p>
								<p className="text-lg font-medium mt-4 tracking-tight leading-3">
									Monthly active users
								</p>
							</div>

							<div className="flex flex-col">
								<p className="text-5xl text-orange-600 font-medium tracking-tighter">
									99%
								</p>
								<p className="text-lg font-medium mt-4 tracking-tight leading-3">
									Customer satisfaction
								</p>
							</div>
						</div>

						<div className="flex gap-8 mt-10">
							<button className="text-white bg-orange-500 px-8 py-4 text-lg tracking-wide font-medium hover:bg-orange-400 transition">
								Contact Us
							</button>
							<button className="border-2 border-neutral-300 px-8 py-4 text-lg tracking-wide font-medium text-neutral-600 hover:text-neutral-800 hover:bg-neutral-200 hover:border-transparent transition">
								Book A Call
							</button>
						</div>
					</div>
					<div className="size-[45%] aspect-square bg-orange-500 rounded-2xl relative"></div>
				</div>

				<div className="">
					<div className="container mx-auto flex justify-between items-center">
						<div className="">
							<p className="section-title">Our Latest Architectural Marvel</p>
							<p className="section-body text-xl w-[80%] tracking-tighter mt-4">
								Introducing Our Latest Architectural Marvel - Pushing Boundaries
								and Redefining Architectural Excellence
							</p>
						</div>
						<div className="">
							<button className="text-white bg-orange-500 px-8 py-4 text-lg tracking-wide font-medium hover:bg-orange-400 transition">
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
					className="w-full p-32 bg-cover bg-center bg-opacity-20"
					style={{ backgroundImage: "url('/images/building-day.jpg')" }}>
					<div className="container mx-auto">
						<div className="w-[55%] bg rounded-[2rem] px-16 py-20 flex flex-col justify-center gap-8 border-2 border-white relative">
							<div className="absolute backdrop-blur-md w-full h-full top-0 left-0 rounded-[2rem]"></div>
							<p className="text-5xl font-medium leading-tight tracking-tighter  text-white relative">
								Start Your Architectural with PeakStudio
							</p>
							<button className="text-white bg-orange-500 px-8 py-4 text-lg tracking-wide font-medium hover:bg-orange-400 transition w-fit relative">
								Get Started
							</button>
						</div>
					</div>
				</div>

				<div className="container mx-auto">
					<p className="text-5xl font-semibold leading-tight tracking-tighter text-center">
						Let's Start Building Your Vision
					</p>
					<p className="section-body text-xl w-[60%] tracking-tighter mt-4 mx-auto text-center">
						Reach Out to Us for Expert Guidance, Collaborative Design, and
						Tailored Solutions to Shape Your Vision into Reality
					</p>
					<div className="flex gap-8 mt-10 mx-auto w-fit">
						<button className="text-white bg-orange-500 px-8 py-4 text-lg tracking-wide font-medium hover:bg-orange-400 transition">
							Contact Us
						</button>
						<button className="border-2 border-neutral-300 px-8 py-4 text-lg tracking-wide font-medium text-neutral-600 hover:text-neutral-800 hover:bg-neutral-200 hover:border-transparent transition">
							Book A Call
						</button>
					</div>
				</div>
			</div>

			<Footer />
		</main>
	);
}
