import Banner from "@/components/Banner";
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
		<main className="min-h-screen">
			<Navbar />
			<Banner
				title="About Us"
				body="Crafting Timeless Spaces with Innovative Designs. Meticulous Attention to Detail, and a Passion for Sustainable Living to Inspire, Enrich, and Transform the Way We Experience Our Build Environment."
			/>
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
