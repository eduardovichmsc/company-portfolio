import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Poppins } from "next/font/google";
import { ReactNode } from "react";

const poppins = Poppins({
	subsets: ["latin"],
	weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

interface LayoutProps {
	children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
	return (
		<main className={`min-h-screen overflow-x-hidden ${poppins.className}`}>
			<Navbar />
			{children}
			<Footer />
		</main>
	);
}
