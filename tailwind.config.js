/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		screens: {
			sm: "481px",
			md: "769px",
			lg: "1081px",
			mlg: "1201px",
			xl: "1441px",
		},
		extend: {
			colors: {
				"navy-green": "#0a2f22",
				"light-navy-green": "#134433",
				green: "#b1ff64",
				"green-slate": "#8bb3a5",
				"lightest-green-slate": "#ccf6cc",
				"green-navy-shadow": "rgb(2 27 11 / 70%)",
			},
			fontFamily: {
				raleway: ["Raleway", "sans-serif"],
			},
		},
	},
	plugins: [],
};
