import { NavLink } from 'react-router-dom';
import './Navbar.css';
const Navbar = () => {
  return (
    <nav className='NavBar'>
      <ul>
        <li>
          <NavLink to='/'>Home</NavLink>
        </li>
        <li>
          <NavLink to='/especialistas'>Especialistas</NavLink>
        </li>
        <li>
          <NavLink to='/signup'>Registrarse</NavLink>
        </li>
        <li>
          <NavLink to='/signin'>Acceder</NavLink>
        </li>
        <li>
          <NavLink to='/admin'>Admin</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
