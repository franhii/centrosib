import { Route, Routes } from "react-router-dom";
import { Especialistas, Home, Nosotros } from "../../Pages";
const PagesRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/especialistas" element={<Especialistas />} />
        <Route path="/nosotros" element={<Nosotros />} />

      </Routes>
    </div>
  );
};
export default PagesRoutes;
