import { BrowserRouter, Route, Routes } from "react-router-dom";
// import "./App.css";
import Navbar from "./components/header/Navbar";
import Home from "./components/home/Home"
import SemOneSGPACard from "./components/SGPA/SemOneSGPACard";
import SemTwoSGPACard from "./components/SGPA/SemTwoSGPACard";
import CGPA from "./components/CGPA/CGPA";
import Footer from "./components/footer/Footer";
import PrivacyP from "./components/privacy/PrivacyP";
import SemThreeSGPACard from "./components/SGPA/semThreeSGPACard";
import ReportPDF from "./components/CGPA/ReportPDF";
import SemFourSGPACard from "./components/SGPA/SemFourSGPACard";
import About from "./components/about/About";

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
						path="sgpa-sem-three"
						element={<SemThreeSGPACard />}
					/>
					<Route
						path="sgpa-sem-four"
						element={<SemFourSGPACard />}
					/>

					<Route
						path="cgpa"
						element={<CGPA />}
					/>
					<Route
						path="about"
						element={<About />}
					/>
					<Route
						path="privacy-policy"
						element={<PrivacyP />}
					/>
					<Route
						path="pp"
						element={<PrivacyP />}
					/>
					<Route
						path="report"
						element={<ReportPDF />}
					/>
				</Routes>
				<Footer />
			</BrowserRouter>
		</>
	);
}

export default App;
