import Link from "next/link";
import { FC } from "react";
import { LinksArray } from "./Navbar";
import { useRouter } from "next/router";

interface SidebarProps {
	showMobile: boolean;
	setShow: () => void;
}

const Sidebar: FC<SidebarProps> = ({ showMobile, setShow }) => {
	const router = useRouter();

	const handleLinkClick = (href: string) => {
		if (router.pathname === href && showMobile) {
			setShow();
		}
	};

	return (
		<div className="block xl:hidden">
			<div className="space-y-2 relative z-50" onClick={setShow}>
				<span
					className={`block w-8 h-0.5 bg-gray-600 transition-transform duration-300 ease-in-out transform ${
						showMobile ? "rotate-45 translate-y-2" : ""
					}`}></span>
				<span
					className={`block w-8 h-0.5 duration-300 transition transform ${
						showMobile ? "bg-transparent" : "bg-gray-600"
					}`}></span>
				<span
					className={`block w-8 h-0.5 bg-gray-600 transition-transform duration-300 ease-in-out transform ${
						showMobile ? "-rotate-45 -translate-y-3" : ""
					}`}></span>
			</div>
			<div
				className={`border-l border-neutral-300 flex flex-col gap-10 w-[90vw] md:w-[70vw] h-screen bg-gray-50 fixed top-0 -right-6 pt-24 text-4xl items-end transition duration-300 ${
					showMobile ? "-translate-x-6" : "translate-x-[100vw]"
				}`}>
				{LinksArray.map((link, index) => (
					<Link
						key={index}
						href={link.href}
						onClick={() => handleLinkClick(link.href)}
						className="w-full text-end mr-6 md:mr-[6.4rem]">
						{link.label}
					</Link>
				))}
			</div>
		</div>
	);
};

export default Sidebar;
