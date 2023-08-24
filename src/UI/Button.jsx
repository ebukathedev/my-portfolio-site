/* eslint-disable react/prop-types */
const buttonStyles =
	"relative inline-block transition-all duration-300 ease-in-out delay-100 border rounded-md border-green hover:-translate-x-1 hover:-translate-y-1 text-green font-mono";

const Button = ({ children, href, className, bgColor }) => {
	return (
		<div className="relative inline-flex -z-10">
			<span className="absolute inset-0 rounded-md bg-green"></span>
			<a
				className={`${buttonStyles} ${className || "px-4 py-2"} ${
					bgColor || "bg-navy-green"
				}`}
				href={href}
				target="_blank"
				rel="noreferrer"
			>
				{children}
			</a>
		</div>
	);
};

export default Button;
