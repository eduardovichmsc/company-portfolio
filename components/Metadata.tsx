import { useRouter } from "next/router";
import { FC, useEffect, useState } from "react";

interface MetadaProps {
	title?: string;
	description?: string;
	keywords?: string[];
}

const Metadata: FC<MetadaProps> = ({ title, description, keywords }) => {
	const router = useRouter();

	return (
		<>
			<title>{title}</title>

			<meta charSet="UTF-8" />
			<meta name="viewport" content="width=device-width, initial-scale=1.0" />
			<meta name="description" content={description} />
			<meta name="keywords" content={keywords?.join(", ")} />
			<meta name="robots" content="index, follow" />
		</>
	);
};
export default Metadata;
