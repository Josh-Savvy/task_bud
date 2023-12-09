import Link from "next/link";
// import { useRouter } from "next/router";
import React, { HTMLAttributes } from "react";

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
	buttonTitle: string;
	className?: string;
	link?: string;
}
const PrimaryButton = ({
	buttonTitle,
	className,
	link,
	...rest
}: ButtonProps) => {
	// const router = useRouter();
	const isBrowser = typeof window === "undefined";
	return !link ? (
		<button
			{...rest}
			className={
				"duration-300 bg-[#033] text-white py-4 px-10 rounded-full shadow-lg hover:bg-green-800 font-semibold lg:text-[16px] text-[14px] " +
				className
			}>
			{buttonTitle}
		</button>
	) : (
		isBrowser && link && (
			<Link href={link}>
				<button
					{...rest}
					className={
						"duration-300 bg-[#033] text-white py-4 px-10 rounded-full shadow-lg hover:bg-green-800 font-semibold lg:text-[16px] text-[14px] " +
						className
					}>
					{buttonTitle}
				</button>
			</Link>
		)
	);
};

export default PrimaryButton;
