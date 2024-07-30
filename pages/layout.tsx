import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Poppins } from "next/font/google";

const poppins = Poppins({
	subsets: ["latin"],
	weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function Layout({ children }) {
	return (
		<main className={`min-h-screen overflow-x-hidden ${poppins.className}`}>
			<Navbar />
			{children}
			<Footer />
		</main>
	);
}
