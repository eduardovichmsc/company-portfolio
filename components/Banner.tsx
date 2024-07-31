import { FC } from "react";

interface BannerProps {
	title: string;
	body: string;
	image?: string;
}

const Banner: FC<BannerProps> = ({ title, body, image }) => {
	return (
		<div className="container mx-auto wrapper">
			<div className="flex flex-col-reverse lg:flex-row items-center section sm:p-0 sm:pt-8 md:pb-0 lg:pb-10">
				<div className="basis-full lg:basis-3/5 mt-6 lg:mt-0 lg:pr-40 flex flex-col lg:gap-6 space-y-4 lg:space-y-0 md:mb-10 lg:mb-32">
					<p className="section-title">{title}</p>
					<p className="section-body tracking-tight mt-0">{body}</p>
				</div>
				<div
					className="basis-full size-full lg:size-auto lg:basis-2/5 aspect-4/3 rounded-2xl bg-slate-300 bg-cover bg-center bg-no-repeat"
					style={{ backgroundImage: `url(${image})` }}></div>
			</div>
		</div>
	);
};

export default Banner;
