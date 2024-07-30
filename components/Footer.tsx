import Link from "next/link";
import { Input } from "@nextui-org/input";
import { FC, useState } from "react";

interface FooterCardProps {
	title: string;
	links?: Record<string, any>[];
}

const FooterCard: FC<FooterCardProps> = ({ title, links }) => {
	return (
		<div className="basis-full md:basis-1/4 text-white text-xl sm:text-lg flex flex-col gap-4">
			<p className="uppercase font-light tracking-wider">{title}</p>
			<div className="flex flex-col text-neutral-400 gap-1">
				{links?.map((link, index) => (
					<Link
						key={index}
						href={link.href}
						className="hover:text-neutral-300 focus:text-neutral-300 transition">
						{link.label}
					</Link>
				))}
			</div>
		</div>
	);
};

const Footer = () => {
	const [email, setEmail] = useState("");

	return (
		<footer className="bg-zinc-950">
			<div className="container mx-auto p-6 py-14 sm:p-0 sm:py-24">
				<div className="flex flex-wrap justify-between gap-10 sm:gap-0">
					<div className="flex flex-col gap-2 sm:gap-6 basis-full lg:basis-1/2">
						<div className="logo text-orange-600 text-3xl font-bold tracking-tighter basis-1/2">
							PeakStudio
						</div>
						<div className="text-base sm:text-xl font-light text-white basis-1/2">
							Hire the Product Designer within 12 hours
						</div>
					</div>
					<div className="flex flex-col gap-2 sm:gap-4 basis-full lg:basis-1/2">
						<div className="text-base sm:text-xl uppercase font-light tracking text-white">
							Sign Up To Stay Update
						</div>
						<div className="relative">
							<form action="">
								<input
									type="email"
									className={`bg-transparent border-b outline-none py-6 pb-2 placeholder:text-neutral-400 w-full pr-32 peer text-white focus:ring-0 appearance-none transition ${
										email.length > 0 ? "border-white" : "border-neutral-400"
									}`}
									placeholder=" "
									value={email}
									onChange={(e) => setEmail(e.target.value)}
									id="email"
								/>
								<label
									htmlFor="email"
									className={`text-neutral-600 absolute bottom-[25%] left-0 transition peer-placeholder-shown:scale-100
										peer-focus:text-neutral-300
										peer-placeholder-shown:translate-y-0
										peer-focus:scale-75
										peer-focus:-translate-x-1.5
										peer-focus:-translate-y-5 ${
											email.length > 0 && "-translate-y-5 scale-75 opacity-0"
										}`}>
									Email
								</label>
								<button
									className="bg-transparent border-2 text-white px-3.5 py-1.5 rounded-3xl absolute right-0 bottom-[25%] text-sm hover:text-black hover:bg-white transition focus:bg-white focus:text-black"
									type="submit">
									Subscribe
								</button>
							</form>
						</div>
					</div>
					<div className="w-full h-px bg-neutral-600 mb-10 sm:my-10"></div>
				</div>

				<div className="flex gap-y-10 flex-wrap">
					<FooterCard
						title="Company"
						links={[
							{ label: "Our Team", href: "/" },
							{ label: "Company Vision", href: "/" },
							{ label: "Our History", href: "/" },
							{ label: "Investorys", href: "/" },
						]}
					/>
					<FooterCard
						title="About us"
						links={[
							{ label: "The Blog", href: "/" },
							{ label: "Downloads", href: "/" },
							{ label: "Change Log", href: "/" },
							{ label: "Slack Channel", href: "/" },
						]}
					/>
					<FooterCard
						title="Resources"
						links={[
							{ label: "New Features", href: "/" },
							{ label: "Roadmap", href: "/" },
							{ label: "Product Demo", href: "/" },
							{ label: "Pricing", href: "/" },
						]}
					/>
					<FooterCard
						title="Supports"
						links={[
							{ label: "Sosmed", href: "/" },
							{ label: "YouTube", href: "/" },
							{ label: "Instagram", href: "/" },
						]}
					/>
				</div>
			</div>
			<div className="w-full h-px bg-neutral-600 my-10"></div>
			<div className="container mx-auto flex text-white pb-10 px-6">
				<p className="text-inherit basis-5/6">
					Designed by
					<a
						href="https://www.behance.net/gallery/200386565/Architecture-Company-Portfolio-Website-Ui-Design?tracking_source=search_projects|company+website&l=0"
						className="text-blue-400">
						{" "}
						wolfpixel
					</a>
				</p>
			</div>
		</footer>
	);
};

export default Footer;
