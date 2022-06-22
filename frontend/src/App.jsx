import Navbar from './Components/Navbar/Navbar';
import Layout from './Components/Layout.jsx';
import RequireAuth from './Components/RequireAuth.jsx';
import { Routes, Route } from 'react-router-dom';
import {
  Home,
  Acceder,
  Registro,
  Especialistas,
  Admin,
  Unauthorized,
} from './Pages/';
import './App.css';
const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Layout />}>
          {/* Public Routes */}
          <Route path='/' element={<Home />} />
          <Route path='unauthorized' element={<Unauthorized />} />
          <Route path='especialistas' element={<Especialistas />} />
          <Route path='signin' element={<Acceder />} />
          <Route path='signup' element={<Registro />} />
          {/* Protected Routes */}
          <Route element={<RequireAuth allowedRoles={['admin']} />}>
            <Route path='admin' element={<Admin />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
};

export default App;
