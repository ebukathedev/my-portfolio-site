/* eslint-disable react/prop-types */
const NavLink = ({ name, ...props }) => {
	return (
		<a
			href={`#${name}`}
			className="capitalize duration-200 ease-in-out hover:text-green flex flex-col md:space-x-1 md:space-y-0 space-y-1 md:flex-row text-center text-lightest-green-slate md:items-center font-medium md:p-[10px]"
			{...props}
		>
			<span className="md:text-sm">{name}</span>
		</a>
	);
};

export default NavLink;
