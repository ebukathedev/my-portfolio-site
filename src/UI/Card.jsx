/* eslint-disable react/prop-types */
const Card = ({ className, children }) => {
	return (
		<div
			className={`rounded-md bg-light-navy-green shadow-normal ${className}`}
		>
			{children}
		</div>
	);
};

export default Card;
