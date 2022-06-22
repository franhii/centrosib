import { Link } from 'react-router-dom';
import Users from '../../Components/Users';

const Admin = () => {
  return (
    <div>
      <h1>Admin</h1>
      <br />
      <Users />
      <br />
      <div className=''>
        <Link to='/'>Home </Link>
      </div>
    </div>
  );
};

export default Admin;
