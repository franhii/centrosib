<<<<<<< HEAD
import { Route, Routes } from "react-router-dom"
import { Especialistas, Contacto, Nosotros } from '../../Pages'
const PagesRoutes = () => {
	return (
		<div>
			<Routes>
				<Route path="/especialistas"
					element={<Especialistas />}
				/>
				<Route path="/contacto"
					element={<Contacto />}
				/>
				<Route path="/"
					element={""}
				/>
				<Route path="/nosotros" element={<Nosotros />} />
			</Routes>
		</div>
	)
}
export default PagesRoutes
=======
import { Route, Routes } from "react-router-dom";
import { Especialistas } from "../../Pages";
import { Nosotros } from "../../Pages";
const PagesRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={""} />
        <Route path="/especialistas" element={<Especialistas />} />
        <Route path="/nosotros" element={<Nosotros />} />
      </Routes>
    </div>
  );
};
export default PagesRoutes;
>>>>>>> ea677ea4595e036c998212b968211efac9d3567e
