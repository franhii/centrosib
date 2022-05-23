import { Route, Routes } from "react-router-dom"
import Especialistas from './Especialistas.jsx'
const PagesRoutes = () => {
	return (
		<div>
			<Routes>
				<Route path="/especialistas"
					element={<Especialistas />}
				/>
				<Route path="/"
					element={<h1>Home</h1>}
				/>
			</Routes>
		</div>
	)
}
export default PagesRoutes
