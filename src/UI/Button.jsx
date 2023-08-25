/* eslint-disable react/prop-types */
const buttonStyles =
	"relative block transition-all duration-300 ease-in-out delay-100 border rounded-md border-green hover:-translate-x-1 hover:-translate-y-1 text-green font-mono";

const Button = ({ children, href, className, bgColor }) => {
	return (
		<a
			className="relative focus:outline-none"
			href={href}
			target="_blank"
			rel="noreferrer"
		>
			<span
				className={`${buttonStyles} ${className || "px-4 py-2"} ${
					bgColor || "bg-navy-green"
				}  `}
			>
				{children}
			</span>
			<span className="absolute -z-10 inset-0 rounded-md bg-green"></span>
		</a>
	);
};

export default Button;
