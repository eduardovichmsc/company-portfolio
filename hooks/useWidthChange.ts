import { useEffect, useState } from "react";

export const useWidthChange = () => {
	const [width, setWidth] = useState(0);
	useEffect(() => {
		const handleWidth = () => {
			setWidth(window.innerWidth);
		};
		window.addEventListener("resize", handleWidth);

		return () => window.removeEventListener("resize", handleWidth);
	}, []);

	return width;
};
