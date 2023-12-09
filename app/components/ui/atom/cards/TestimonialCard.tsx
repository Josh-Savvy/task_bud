import Image from "next/image";
import React, { FC } from "react";

export type Testimonial = {
	name: string;
	jobTitle: string;
	avatar: string;
	comment: string;
};

const TestimonialCard: FC<Testimonial & { className?: string }> = ({
	avatar,
	comment,
	jobTitle,
	name,
	className,
}) => {
	return (
		<div className={"snap-center w-full h-full px-5 " + className}>
			<div className="p-10 bg-white relative w-full sm:h-[300px] rounded-2xl tracking-tight duration-300 group hover:shadow-lg overflow-hidden cursor-default">
				<div className="sm:flex-row flex-col flex w-full gap-4 items-start">
					<div className="flex items-center gap-4 w-full h-full">
						<Image
							alt={name}
							src={avatar}
							height={100}
							width={100}
							className="rounded-full bg-zinc-300"
							loading="eager"
						/>
						<div className="sm:hidden">
							<p className="text-[18px] font-semibold tracking-tight leading-none break-words">
								{name}
							</p>
							<p className="text-[16px] tracking-tight leading-[1.2]">
								{jobTitle}
							</p>
						</div>
					</div>
					<div className="text-left grid gap-3 px-3 md:px-auto md:pr-8">
						<p className="text-[16px] tracking-tight leading-[1.2]">
							{comment}
						</p>
						<p className="hidden sm:block text-[18px] font-semibold tracking-tight leading-none">
							{name}
						</p>
						<p className="hidden sm:block text-[16px] tracking-tight leading-[1.2]">
							{jobTitle}
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default TestimonialCard;
