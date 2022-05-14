import React from "react";
import ReactDOM from "react-dom/client";

import Navbar from "./components/Navbar.jsx";
import Header from "./components/Header.jsx";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Navbar />, <Header />);
