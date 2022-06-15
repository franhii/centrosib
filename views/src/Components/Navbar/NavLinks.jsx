import { Route, Routes } from "react-router-dom"
import { Especialistas, Contacto, Nosotros, Home } from '../../Pages'
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
					element={<Home />}
				/>
				<Route path="/nosotros" element={<Nosotros />} />
			</Routes>
		</div>
	)
}
export default PagesRoutes
