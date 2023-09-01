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
				"dark-navy-green": "#032016",
				"navy-green": "#0a2f22",
				"light-navy-green": "#134433",
				"lightest-navy-green": "#245644",
				green: "#b1ff64",
				"green-slate": "#8bb3a5",
				"dark-green-slate": "#4c7365",
				"light-green-slate": "#acd5c6",
				"lightest-green-slate": "#ccf6cc",
				"green-navy-shadow": "rgba(2, 27, 11, 0.7)",
				white: "#e7fef6",
			},
			fontFamily: {
				raleway: ["Raleway", "sans-serif"],
			},
		},
	},
	plugins: [],
};
