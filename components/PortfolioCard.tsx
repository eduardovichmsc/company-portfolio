import { FC } from "react";

export interface PortfolioCardProps {
	title: string;
	body: string;
	image?: string;
}

const PortfolioCard: FC<PortfolioCardProps> = ({ image, title, body }) => {
	return (
		<div className="space-y-4 group/item section sm:px-0">
			<div className="w-full aspect-[5/6] bg-slate-300 rounded-md group-hover/item:scale-[1.01] transition"></div>
			<div className="space-y-0 *:tracking-tight">
				<p className="font-semibold text-lg">{title}</p>
				<p className="font-medium text-sm text-neutral-500">{body}</p>
			</div>
		</div>
	);
};

export default PortfolioCard;
