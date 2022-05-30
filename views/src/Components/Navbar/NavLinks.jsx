import { Route, Routes } from "react-router-dom"
import { Especialistas } from '../../Pages'
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
			</Routes>
		</div>
	)
}
export default PagesRoutes
