import Link from "next/link";
import { BsArrowRightShort } from "react-icons/bs";

const Navbar = () => {
	return (
		<div className="container m-auto flex items-center justify-between w-full py-6 flex-wrap">
			<div className="logo text-orange-600 text-xl font-bold tracking-tighter basis-1/3">
				PeakStudio
			</div>
			<nav className="flex justify-center gap-6 font-medium tracking-tight basis-1/3">
				<Link href={"/"}>Home</Link>
				<Link href={"/"}>About Us</Link>
				<Link href={"/"}>Services</Link>
				<Link href={"/"}>Portfolio</Link>
				<Link href={"/"}>Testimonals</Link>
			</nav>
			<div className="basis-1/3">
				<button className="text-white bg-orange-500 px-6 py-3 rounded-sm flex items-center hover:bg-orange-400 transition group ml-auto">
					Explore Projects
					<BsArrowRightShort
						size={25}
						className="mt-px ml-2 group-hover:translate-x-2 transition duration-300"
					/>
				</button>
			</div>

			<div className="bg-gray-300 w-full h-px my-6" />
		</div>
	);
};

export default Navbar;
