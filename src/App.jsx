import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/header/Navbar";
import Home from "./components/home/home";
import SemOneSGPACard from "./components/SGPA/SemOneSGPACard";
import SemTwoSGPACard from "./components/SGPA/SemTwoSGPACard";
import FirstYearCGPA from "./components/CGPA/FirstYearCGPA";

function App() {
	const ShowMyProfile = () => {
		return (
			<>
				<div className="text-end">
					<a
						className="btn btn-link"
						href="http://www.github.com/amal-babu-git"
						// target="_blank"
					>
						Dev By: AMAL BABU
					</a>
				</div>
			</>
		);
	};

	return (
		<>
			<BrowserRouter>
				<Navbar />
				<Routes>
					<Route
						path="/"
						element={<Home />}
					/>
					<Route
						path="sgpa-sem-one"
						element={<SemOneSGPACard />}
					/>
					<Route
						path="sgpa-sem-two"
						element={<SemTwoSGPACard />}
					/>
					<Route
						path="cgpa-year-one"
						element={<FirstYearCGPA />}
					/>
				</Routes>
				<ShowMyProfile/>
			</BrowserRouter>
		</>
	);
}

export default App;
