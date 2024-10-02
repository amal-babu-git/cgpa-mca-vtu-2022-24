import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
	const navigate = useNavigate();

	// on click to calculate SGPA sem 1
	const onClickSemOne = () => {
		navigate("/sgpa-sem-one");
	};
	// on click to calculate SGPA sem 2
	const onClickSemTwo = () => {
		navigate("/sgpa-sem-two");
	};
	const onClickSemThree = () => {
		navigate("/sgpa-sem-three");
	};
	const onClickSemFour = () => {
		navigate("/sgpa-sem-four");
	};
	// on click to calculate first year CGPA
	const onClickCGPA = () => {
		navigate("/cgpa");
	};
	const onClickAbout = () => {
		navigate("/about");
	};
	const onClickPrivacyPolicy = () => {
		navigate("/privacy-policy");
	};

	return (
		<>
			<div className="navbar bg-base-100 fixed top-0 z-20 shadow-sm">
				<div className="navbar-start">
					<div className="dropdown">
						<label
							tabIndex={0}
							className="btn btn-ghost btn-circle"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-5 w-5"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M4 6h16M4 12h16M4 18h7"
								/>
							</svg>
						</label>
						<ul
							tabIndex={0}
							className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
						>
							<li>
								<a onClick={onClickSemOne}>SEM I SGPA</a>
							</li>
							<li>
								<a onClick={onClickSemTwo}>SEM II SGPA</a>
							</li>
							<li>
								<a onClick={onClickSemThree}>SEM III SGPA</a>
							</li>
							<li>
								<a onClick={onClickSemFour}>SEM IV SGPA</a>
							</li>
							<li>
								<a onClick={onClickCGPA}>CGPA</a>
							</li>
							<li>
								<a onClick={onClickAbout}>About</a>
							</li>
							<li>
								<a onClick={onClickPrivacyPolicy}>
									Terms and Conditions & Privacy Policy
								</a>
							</li>
							<li>
								<Link
									to="https://github.com/amal-babu-git/cgpa-mca-vtu-2022-24/blob/production/LICENSE.md"
									target="_blank"
								>
									License
								</Link>
							</li>
						</ul>
					</div>
				</div>
				<h1 className="hidden">CGPA Calculator MCA (VTU)</h1>
				<div className="navbar-center bg-primary-content rounded-xl pe-2">
					<Link
						to={"/"}
						className="btn btn-ghost normal-case text-xl "
					>
						<h1>MCA CGPA Calculator</h1>
						<h2 className="hidden">CGPA CALCULATOR FOR MCA VTU SYLLABUS</h2>
					</Link>
					<Link
						className="hidden text-primary font-semibold md:inline-flex"
						to={"https://github.com/amal-babu-git"}
						target="_blank"
					>
						<span className=" badge badge-primary badge-outline ">@amal-babu-git</span>
					</Link>
				</div>

				<div className="navbar-end">
					{/* Additional buttons can be added here */}
				</div>
			</div>
		</>
	);
};

export default Navbar;
