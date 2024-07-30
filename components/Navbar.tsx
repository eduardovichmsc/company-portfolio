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
		if (showMobile) {
			setShowMobile(false);
		}
	}, [router.pathname]);

	return (
		<div className="flex justify-center w-full bg-neutral-50">
			<div className="bg-inherit w-full pt-6 px-6 md:px-0 fixed z-50">
				<div className="container mx-auto flex flex-wrap items-center justify-between">
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
		</div>
	);
};

export default Navbar;
