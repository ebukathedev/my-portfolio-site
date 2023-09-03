/* eslint-disable react/prop-types */
const IconLink = ({ href, title, className, children }) => {
	return (
		<a
			href={href}
			target="_blank"
			rel="noreferrer"
			title={title}
			className={`transition-normal hover:text-green focus:text-green ${className}`}
		>
			{children}
		</a>
	);
};

export default IconLink;
