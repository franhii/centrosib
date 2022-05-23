import React from "react";
import ReactDOM from "react-dom/client";

import Navbar from "./components/Navbar.jsx";
import PostDoctor from "./components/PostDoctor.jsx"

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<div>
		<PostDoctor />
		<Navbar />
	</div>
);
