import Hero from "@/components/Hero";
import InfoCard from "@/components/InfoCard";
import { Swiper, SwiperSlide } from "swiper/react";
import Journey from "@/components/sections/Journey";
import Vision from "@/components/sections/Vision";
import Button from "@/components/Button";

import "swiper/css";
import "swiper/swiper-bundle.css";
import PortfolioCard from "@/components/PortfolioCard";
import { PortfolioArray } from "./portfolio";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import Mastery from "@/components/sections/Mastery";
import Metadata from "@/components/Metadata";
import { useWidthChange } from "@/hooks/useWidthChange";

export default function Home() {
	const screenWidth = useWidthChange();

	return (
		<>
			<Metadata title="PeakStudio - Home" description="Home Page" />
			<div className="wrapper">
				<Hero />
				<div className="bg-white w-full section-wrapper">
					<div className="container mx-auto py-20 section-p">
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
								image="icons/category.png"
								description="Your aspirations fuel our creativity. We begin by listeting intently, understanding your goals, and envisioning."
							/>
							<InfoCard
								title="Collaborative Creation"
								image="icons/pie-chart.png"
								description="Together, we shape ideas into reality. Through iterative design sessions, we fuse innovation with practicality."
							/>
							<InfoCard
								title="Expert Execution"
								image="icons/teamwork.png"
								description="From blueprint to built reality, we oversee every detail. Our meticulous planning and skilled craftsmanship bring."
							/>
						</div>
					</div>
				</div>

				<div className="flex flex-col gap-16 md:gap-32 md:pt-36 md:pb-24">
					<Journey />

					<Mastery />

					<div className="section-p">
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
								<button className="text-white bg-orange-500 px-8 py-4 text-lg tracking-wide font-medium hover:bg-orange-400 transition">
									View More
								</button>
							</div>
						</div>
						<div className="container mx-auto mt-16">
							<div className="flex ml-auto gap-1 items-center w-fit text-sm font-base mr-2 mb-2">
								<BsArrowLeft className="text-neutral-500" />
								<BsArrowRight className="text-neutral-500" />
							</div>
							<Swiper
								slidesPerView={
									screenWidth > 769 ? 3 : screenWidth < 640 ? 1.2 : 2
								}
								spaceBetween={30}
								className="">
								{PortfolioArray.map((item) => (
									<SwiperSlide key={item.title} className="mr-0">
										<PortfolioCard title={item.title} body={item.body} />
									</SwiperSlide>
								))}
							</Swiper>
						</div>
					</div>

					<div
						className="w-full md:p-32 bg-cover bg-center bg-opacity-20"
						style={{ backgroundImage: "url('/images/long.jpg')" }}>
						<div className="container mx-auto">
							<div className="w-[100%] lg:w-[55%] bg rounded-none md:rounded-[2rem] px-8 md:px-16 py-10 md:py-20 flex flex-col justify-center gap-4 md:gap-8 md:border-2 md:border-white relative">
								<div className="absolute backdrop-blur-md w-full h-full top-0 left-0 md:rounded-[2rem]"></div>
								<p className="text-2xl md:text-5xl font-medium leading-tight tracking-tighter text-white relative">
									Start Your Architectural with PeakStudio
								</p>
								<Button
									primary
									className="px-8 py-4 md:text-lg tracking-widew-full md:w-fit relative">
									Get Started
								</Button>
							</div>
						</div>
					</div>

					<Vision />
				</div>
			</div>
		</>
	);
}
