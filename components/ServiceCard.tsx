import { FC } from "react";

export interface ServiceCardProps {
	label: string;
	body: string;
	image?: string;
}

const ServiceCard: FC<ServiceCardProps> = ({ label, body, image }) => {
	return (
		<div className="border-[3px] border-neutral-100 rounded-2xl p-10 space-y-6">
			<div className="w-full aspect-square bg-orange-300 bg-opacity-20 rounded-xl mx-auto"></div>
			<div className="space-y-2">
				<p className="text-2xl font-semibold tracking-tight text-center">
					{label}
				</p>
				<p className="text-base font-medium tracking-tight leading-snug text-center text-neutral-600">
					{body}
				</p>
			</div>
		</div>
	);
};
export default ServiceCard;
