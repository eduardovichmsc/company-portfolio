import Link from "next/link";
import { useEffect, useState } from "react";
import { BsArrowRightShort } from "react-icons/bs";
import { useRouter } from "next/router";
import Sidebar from "./Sidebar";

interface LinkProps {
	label: string;
	href: string;
}

export const LinksArray: LinkProps[] = [
	{
		label: "Home",
		href: "/",
	},
	{
		label: "About Us",
		href: "/about",
	},
	{
		label: "Services",
		href: "/services",
	},
	{
		label: "Portfolio",
		href: "/portfolio",
	},
	{
		label: "Testimonals",
		href: "/testimonals",
	},
];

const Navbar = () => {
	const router = useRouter();
	const [showMobile, setShowMobile] = useState(false);

	const handleToggleMobile = () => {
		setShowMobile((current) => !current);
	};

	useEffect(() => {
		if (showMobile) {
			document.body.classList.add("overflow-hidden");
		} else {
			document.body.classList.remove("overflow-hidden");
		}
	}, [showMobile]);

	useEffect(() => {
		setShowMobile((current) => !current);
	}, [router.pathname]);

	return (
		<div className="flex justify-center">
			<div className="md:container  m-auto flex items-center justify-between w-full pt-6 flex-wrap px-6 bg-neutral-50 md:px-0 fixed z-50">
				<Link
					href={"/"}
					className="logo text-orange-600 text-xl font-bold tracking-tighter basis-1/3">
					PeakStudio
				</Link>
				<nav className="justify-center gap-4 2xl:gap-6 font-medium tracking-tight basis-1/3 hidden xl:flex">
					{LinksArray.map((link, index) => (
						<Link key={index} href={link.href}>
							{link.label}
						</Link>
					))}
				</nav>
				<div className=" md:basis-2/4 xl:basis-1/3 hidden md:block">
					<Link
						href={router.pathname === "/" ? "/portfolio" : "/contacts"}
						className="w-fit text-white bg-orange-500 px-6 py-3 rounded-sm flex items-center hover:bg-orange-400 transition group ml-auto">
						{router.pathname === "/" ? "Explore Projects" : "Contact Us"}
						{router.pathname === "/" && (
							<BsArrowRightShort
								size={25}
								className="mt-px ml-2 group-hover:translate-x-2 transition duration-300"
							/>
						)}
					</Link>
				</div>
				<Sidebar setShow={handleToggleMobile} showMobile={showMobile} />
				<div className="bg-gray-300 w-full h-px mt-6" />
			</div>
		</div>
	);
};

export default Navbar;
