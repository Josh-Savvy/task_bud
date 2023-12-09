import React from "react";
import PrimaryButton from "../atom/buttons";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
	return (
		<nav className="lg:py-8 lg:px-16 p-5 text-white flex justify-between items-center absolute w-screen z-50">
			<Link href="/">
				<Image
					src="/logo.png"
					alt="Student 1"
					className=""
					width={120}
					height={35}
					unoptimized
				/>
			</Link>
			<PrimaryButton buttonTitle="Enroll Now" link="/enroll" />
		</nav>
	);
};

export default Navbar;
