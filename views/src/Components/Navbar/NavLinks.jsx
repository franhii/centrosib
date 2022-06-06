import { Route, Routes } from "react-router-dom"
import { Especialistas } from '../../Pages'
import { Nosotros } from "../../Pages"
const PagesRoutes = () => {
	return (
		<div>
			<Routes>
				<Route path="/especialistas"
					element={<Especialistas />}
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
