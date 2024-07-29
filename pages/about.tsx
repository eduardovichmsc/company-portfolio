import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Journey from "@/components/sections/Journey";
import Mastery from "@/components/sections/Mastery";
import Vision from "@/components/sections/Vision";
import { Poppins } from "next/font/google";

const poppins = Poppins({
	subsets: ["latin"],
	weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const About = () => {
	return (
		<main className={`${poppins.className}`}>
			<Navbar />

			<div className="container mx-auto section-wrapper">
				<div className="flex flex-row items-center">
					<div className="basis-3/5 pr-40 flex flex-col gap-6 mb-32">
						<p className="section-title">About Us</p>
						<p className="section-body tracking-tight">
							Crafting Timeless Spaces with Innovative Designs. Meticulous
							Attention to Detail, and a Passion for Sustainable Living to
							Inspire, Enrich, and Transform the Way We Experience Our Build
							Environment.
						</p>
					</div>
					<div className="basis-2/5 aspect-4/3 rounded-2xl bg-orange-500"></div>
				</div>
			</div>
			<div className="bg-white section-wrapper">
				<Journey />
				<Mastery />
				<Vision />
			</div>
			<Footer />
		</main>
	);
};
export default About;
