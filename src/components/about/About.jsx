import { Link } from "react-router-dom";

const About = () => {
	return (
		<>
			<div className="mt-20 font-mono text-justify bg-base-200 mb-10 me-2 ms-2">
				<div className="container mx-auto p-4">
					{/* About */}
					<h1 className="text-2xl font-medium">About</h1>
					<p className="mt-2 text-gray-800">
						The SGPA & CGPA Calculator is a web application designed to
						calculate semester and cumulative grade point averages for MCA
						students of VTU (2022-2024 batch). This tool enables students to
						input their marks for each subject and calculate their SGPAs for all
						semesters, along with the overall CGPA. It provides an accurate and
						reliable way to track academic performance throughout the course.
						User feedback is always welcome to further enhance the tool’s
						functionality.
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
