/* eslint-disable @next/next/no-page-custom-font */
import type { Metadata } from "next";
import "./globals.css";
import { Poppins } from "next/font/google";
import "animate.css/animate.css";
import "animate.css";
import { title, description, keywords, creator, viewport } from "./lib/constants";
import Footer from "./components/ui/layout/footer";
import Navbar from "./components/ui/layout/navbar";

const poppins = Poppins({
	subsets: ["latin"],
	weight: "100" || "200" || "300" || "400" || "500" || "600" || "700" || "800" || "900",
	preload: true,
});

export const metadata: Metadata = {
	title,
	description,
	keywords,
	creator,
	viewport,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body className={poppins.className}>
				<Navbar />
				<>{children}</>
				<Footer />
			</body>
		</html>
	);
}
