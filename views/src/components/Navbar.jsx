import { NavLink } from 'react-router-dom'
import "./Navbar.css";

const Navbar = () => {
	return (
		<div>
			<ul>
				<li>
					<NavLink to='/especialistas'>Especialistas</NavLink>
				</li>
				<li>
					<NavLink to='/'>Home</NavLink>
				</li>
			</ul>
		</div>
	)
};

export default Navbar;
