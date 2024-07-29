import { FC } from "react";

interface InfoCardProps {
	image?: string;
	title: string;
	description: string;
}

const InfoCard: FC<InfoCardProps> = ({ description, image, title }) => {
	return (
		<div className="w-full md:w-1/3 flex md:flex-row gap-2 flex-wrap items-center md:items-start">
			<div className="size-16 md:size-20 rounded-lg bg-orange-100"></div>
			<p className="text-lg md:text-2xl font-semibold lg:mt-6 tracking-tight basis-3/4 md:basis-full">
				{title}
			</p>
			<p className="text-neutral-500 font-medium tracking-tight basis-full text-sm md:text-base md:basis-full">
				{description}
			</p>
		</div>
	);
};

export default InfoCard;
