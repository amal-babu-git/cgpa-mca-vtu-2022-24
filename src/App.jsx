import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/header/Navbar";
import Home from "./components/home/home";
import SemOneSGPACard from "./components/SGPA/SemOneSGPACard";
import SemTwoSGPACard from "./components/SGPA/SemTwoSGPACard";
import FirstYearCGPA from "./components/CGPA/FirstYearCGPA";
import Footer from "./components/footer/Footer";
import PrivacyP from "./components/privacy/PrivacyP";

function App() {
	
	

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
					<Route
						path="privacy-policy"
						element={<PrivacyP />}
					/>
					
				</Routes>
				<Footer/>
			</BrowserRouter>
		</>
	);
}

export default App;
