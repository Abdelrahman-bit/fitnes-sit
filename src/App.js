import React from "react";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import { Navbar } from "./components/Navbar";
import { ExerciceDetails } from "./pages/ExerciceDetails";
import { Home } from "./pages/Home";

// styles
import "./App.css";

function App() {
	return (
		<>
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/exercise/:id" element={<ExerciceDetails />} />
			</Routes>
			<Footer />
		</>
	);
}

export default App;
