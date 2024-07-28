import Link from "next/link";
import { BsArrowRightShort } from "react-icons/bs";

const Navbar = () => {
	return (
		<div className="container m-auto flex items-center justify-between w-full py-6 flex-wrap">
			<div className="logo text-orange-600 text-xl font-bold tracking-tighter">
				PeakStudio
			</div>
			<nav className="flex gap-6 font-medium tracking-tight">
				<Link href={"/"}>Home</Link>
				<Link href={"/"}>About Us</Link>
				<Link href={"/"}>Services</Link>
				<Link href={"/"}>Portfolio</Link>
				<Link href={"/"}>Testimonals</Link>
			</nav>
			<button className="text-white bg-orange-600 px-6 py-3 rounded-sm flex items-center">
				Explore Projects
				<BsArrowRightShort size={25} className="mt-px" />
			</button>

			<div className="bg-gray-300 w-full h-px my-6" />
		</div>
	);
};

export default Navbar;
