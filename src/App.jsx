import "./App.css";
import SGPACard from "./components/SGPA/SGPACard";

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
						AMAL BABU
					</a>
				</div>
			</>
		);
	};

	return (
		<>
			<SGPACard />
			<ShowMyProfile />
		</>
	);
}

export default App;
