import { Link } from "react-router-dom";

const About = () => {
	return (
		<>
			<div className="mt-20 font-mono text-justify bg-base-200 mb-10 me-2 ms-2">
				<div className="container mx-auto p-4">
					{/* About */}
					<h1 className="text-2xl font-medium">About</h1>
					<p className="mt-2 text-gray-800">
						The SGPA & CGPA Calculator is an experimental web application
						developed to calculate semester and cumulative grade point averages
						for MCA students of VTU belonging to the 2022-2024 batch. This
						application allows students to input their marks for each subject
						and calculate their SGPAs for semesters 1 and 2, as well as their
						overall CGPA for the first year. It acts as an online calculator for
						this specific purpose. As this is an early experimental version,
						there may be bugs and inaccuracies in the calculations. We welcome
						user feedback to help improve the tool.
					</p>
				</div>
				<div className="container mx-auto p-4">
					{/* About */}
					<h1 className="text-2xl font-medium">License</h1>
					<p className="mt-2 text-gray-800">
						GNU AFFERO GENERAL PUBLIC LICENSE License Version 3, 19 November
						2007 <br />
						Copyright (C) 2024 Amal Babu <br />
						For more details,{" "}
						<Link
							className="link"
							to="https://www.gnu.org/licenses/agpl-3.0.txt"
						>
							visit GNU AGPL-3.0 License
						</Link>
					</p>
				</div>
			</div>
		</>
	);
};

export default About;
