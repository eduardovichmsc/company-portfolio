import { FC } from "react";

interface InfoCardProps {
	image?: string;
	title: string;
	description: string;
}

const InfoCard: FC<InfoCardProps> = ({ description, image, title }) => {
	return (
		<div className="w-1/3 flex flex-col gap-2">
			<div className="size-16 rounded-lg bg-orange-100"></div>
			<p className="text-2xl font-semibold mt-6 tracking-tight">{title}</p>
			<p className="text-neutral-500 font-medium tracking-tight">
				{description}
			</p>
		</div>
	);
};

export default InfoCard;
