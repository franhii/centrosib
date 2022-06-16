import { Route, Routes } from "react-router-dom";
import { Especialistas, Home, Nosotros, Login} from "../../Pages";
const PagesRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/especialistas" element={<Especialistas />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/login" element={<Login />} />

      </Routes>
    </div>
  );
};
export default PagesRoutes;
