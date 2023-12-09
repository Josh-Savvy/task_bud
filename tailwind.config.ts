import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			fontSize: {
				xxs: ".625rem", // for 10px, as 10/16 = 0.625
				xsm: ".75rem", // for 12px, as 12/16 = 0.75
			},
		},
	},
	plugins: [],
};
export default config;
