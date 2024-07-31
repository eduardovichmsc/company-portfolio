import { FC } from "react";

interface ButtonPropsBase {
	className?: string | string[];
	onClick?: () => any;
	disabled?: boolean;
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
	onClick,
	children,
	primary,
	secondary,
	disabled,
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
				className={`text-white bg-orange-500 px-8 py-4 text-lg tracking-wide font-medium hover:bg-orange-400 transition disabled:bg-orange-300 ${newClasses}`}
				onClick={onClick}
				disabled={disabled}>
				{children}
			</button>
		);
	}

	return (
		<button
			className={`border-2 border-neutral-300 px-8 py-4 text-lg tracking-wide font-medium text-neutral-600 hover:text-neutral-800 hover:bg-neutral-200 hover:border-transparent transition ${newClasses}`}
			onClick={onClick}
			disabled={disabled}>
			{children}
		</button>
	);
};

export default Button;
