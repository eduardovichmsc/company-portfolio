import Banner from "@/components/Banner";
import PortfolioCard, { PortfolioCardProps } from "@/components/PortfolioCard";
import Vision from "@/components/sections/Vision";

export const PortfolioArray: PortfolioCardProps[] = [
	{ title: "Cultural Mosaic Center", body: "8080 Railroad St." },
	{ title: "Heart Haven", body: "3605 Parker Rd." },
	{ title: "Cozy Corner Estates", body: "775 Rolling Green Rd." },
	{ title: "Hearthstone Heights", body: "104 Oldbies St." },
	{ title: "Nestled Nook Residence", body: "3890 Poplar Dr." },
	{ title: "Homestead Haven", body: "775 Rolling Green Rd." },
	{ title: "Serene Heart Estates", body: "7529 E. Pecan St." },
	{ title: "Hearthside Meadows", body: "775 Rolling Green Rd." },
	{ title: "Harmony House Estates", body: "775 Rolling Green Rd." },
	{ title: "Tranquil Trails Residences", body: "8558 Green Rd." },
];

const Portfolio = () => {
	return (
		<>
			<title>PeakStudio - Portfolio</title>
			<div className="space-y-14 lg:space-y-0">
				<Banner
					title="Portfolio"
					image="images/portfolio.png"
					body="Discover Our Creations: A Showcase of Inspiring Projects Reflecting Our Dedication to Innovation, Quality Craftsmanship, and Timeless Design in Architecture."
				/>

				<div className="bg-white">
					<div className="container mx-auto section-wrapper xl:space-y-10 md:pt-14">
						<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 gap-y-0 md:gap-y-8 lg:gap-y-14 sm:py-10 md:py-0">
							{PortfolioArray.map(({ title, body }) => (
								<PortfolioCard key={title} title={title} body={body} />
							))}
						</div>

						<Vision />
					</div>
				</div>
			</div>
		</>
	);
};
export default Portfolio;
