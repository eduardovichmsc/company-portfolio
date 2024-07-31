import { FC } from "react";

interface MetadaProps {
	title?: string;
	description?: string;
	keywords?: string[];
}

const Metadata: FC<MetadaProps> = ({ title, description, keywords }) => {
	return (
		<>
			<title>{}</title>

			<meta charSet="UTF-8" />
			<meta name="viewport" content="width=device-width, initial-scale=1.0" />
			<meta name="description" content={description} />
			<meta name="keywords" content={keywords?.join(", ")} />
			<meta name="robots" content="index, follow" />

			{/* Open Graph Tags */}
			<meta property="og:title" content={title} />
			<meta property="og:description" content={description} />
			<meta name="keywords" content={keywords?.join(", ")} />
		</>
	);
};
export default Metadata;
