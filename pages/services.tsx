import Banner from "@/components/Banner";
import Footer from "@/components/Footer";
import Metadata from "@/components/Metadata";
import Navbar from "@/components/Navbar";
import Vision from "@/components/sections/Vision";
import ServiceCard, { ServiceCardProps } from "@/components/ServiceCard";

const ServicesArray: ServiceCardProps[] = [
	{
		label: "Architectural Design",
		body: "Tailored architectural designs for residental, commercial, and institutional projects.",
	},
	{
		label: "Interior Design",
		body: "Crafting interior spaces that harmonize with the architectural vision",
	},
	{
		label: "Sustainable Design",
		body: "Specialized expertise in sustainable design practices",
	},
	{
		label: "Urban Planning",
		body: "Collaborative urban planning services aimed at creating vibrant, livable communities",
	},
	{
		label: "Project Management",
		body: "Comprehensive project management services overseeing every aspect",
	},
	{
		label: "Feasibility Studies",
		body: "Conducting through feasibility studies to assess the viability",
	},
	{
		label: "3D Visualization",
		body: "Utilizing advanced 3D visualization techniques to bring architectural designs",
	},
	{
		label: "Historic Preservation",
		body: "Expertise in historic preservation and adaptive reuse, breathing",
	},
];

const Services = () => {
	return (
		<>
			<Metadata title="PeakStudio - Services" description="Home Page" />
			<main>
				<Navbar />
				<Banner
					title="Services"
					image="images/services.jpg"
					body="Explore Our Expertise: Elevating Spaces, Enriching Lives, and Bringing Your Vision to Life with Our Comprehensive Range of Architectural Design and Consultation Services."
				/>

				<div className="bg-white section-wrapper space-y-10">
					<div className="container mx-auto mt-16 md:mt-0">
						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-4 lg:gap-8 xl:gap-16">
							{ServicesArray.map(({ label, body }) => (
								<ServiceCard label={label} body={body} key={label} />
							))}
						</div>
					</div>

					<Vision />
				</div>

				<Footer />
			</main>
		</>
	);
};

export default Services;
