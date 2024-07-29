import { FC } from "react";

interface ButtonPropsBase {
	className?: string | string[];
	children: React.ReactNode | string;
}

interface PrimaryButtonProps extends ButtonPropsBase {
	primary: true;
	secondary?: never;
}

interface SecondaryButtonProps extends ButtonPropsBase {
	secondary: true;
	primary?: never;
}

type ButtonProps = PrimaryButtonProps | SecondaryButtonProps;

const Button: FC<ButtonProps> = ({
	className = [],
	children,
	primary,
	secondary,
}) => {
	let newClasses;
	if (typeof className === "string") {
		newClasses = [className];
	} else {
		newClasses = className.join(" ");
	}

	if (primary) {
		return (
			<button
				className={`text-white bg-orange-500 px-8 py-4 text-lg tracking-wide font-medium hover:bg-orange-400 transition ${newClasses}`}>
				{children}
			</button>
		);
	}

	return (
		<button
			className={`border-2 border-neutral-300 px-8 py-4 text-lg tracking-wide font-medium text-neutral-600 hover:text-neutral-800 hover:bg-neutral-200 hover:border-transparent transition ${newClasses}`}>
			{children}
		</button>
	);
};

export default Button;
