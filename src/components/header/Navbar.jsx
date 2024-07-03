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
	// on click to calculate first year CGPA
	const onClickCGPA = () => {
		navigate("/cgpa");
	};
	// const onClickPrivacyPolicy = () => {
	// 	navigate("/privacy-policy");
	// };

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
								<a onClick={onClickCGPA}>CGPA</a>
							</li>
							{/* <li>
								<a onClick={onClickPrivacyPolicy}>
									Terms and Conditions & Privacy Policy
								</a>
							</li> */}
						</ul>
					</div>
				</div>
				<div className="navbar-center">
					<Link
						to={"/"}
						className="btn btn-ghost normal-case text-xl"
					>
						<h1>CGPA Calculator MCA 2022-24</h1>
						{/* <h1 className="font-bold text-transparent bg-clip-text bg-gradient-to-r  from-red-600 via-orange-600 via-yellow-600 via-green-800 via-blue-800 via-indigo-800 to-violet-800">
							CGPA Calculator MCA 2022-24
						</h1> */}
					</Link>
				</div>
				<div className="navbar-end">
					{/* <button className="btn btn-ghost btn-circle">
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
								d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
							/>
						</svg>
					</button>
					<button className="btn btn-ghost btn-circle">
						<div className="indicator">
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
									d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
								/>
							</svg>
							<span className="badge badge-xs badge-primary indicator-item"></span>
						</div>
					</button> */}
				</div>
			</div>
		</>
	);
};

export default Navbar;
