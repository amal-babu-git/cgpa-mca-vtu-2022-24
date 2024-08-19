import { Link, useNavigate } from "react-router-dom";

const Home = () => {
	const navigate = useNavigate();

	// on click to calculate SGPA sem 1
	const onClickSemOne = () => {
		navigate("/sgpa-sem-one");
	};
	// on click to calculate SGPA sem 2
	const onClickSemTwo = () => {
		navigate("/sgpa-sem-two");
	};
	// on click to calculate SGPA sem 3
	const onClickSemThree = () => {
		navigate("/sgpa-sem-three");
	};
	const onClickSemFour = () => {
		navigate("/sgpa-sem-four");
	};
	// on click to calculate first year CGPA
	const onClickFirstYearCGPA = () => {
		navigate("/cgpa");
	};
	return (
		<>
			<div className="flex justify-center items-center h-screen text-center">
				<div className="">
					<div className="mb-2 p-1">
						<button
							className="btn btn-lg  rounded-full   btn-active btn-neutral"
							onClick={onClickSemOne}
						>
							SEM I SGPA
						</button>
					</div>
					<div className="mb-2 p-1">
						<button
							className="btn btn-lg  rounded-full  btn-active btn-neutral"
							onClick={onClickSemTwo}
						>
							SEM II SGPA
						</button>
					</div>
					<div className="mb-2 p-1">
						<button
							className="btn btn-lg  rounded-full  btn-active btn-neutral"
							onClick={onClickSemThree}
						>
							SEM III SGPA
						</button>
					</div>
					<div className="mb-2 p-1">
						<button
							className="btn btn-lg  rounded-full  btn-active btn-neutral"
							onClick={onClickSemFour}
						>
							SEM IV SGPA
						</button>
					</div>
					<div className="mb-2 p-1">
						<button
							className="btn btn-lg  rounded-full  btn-active btn-neutral"
							onClick={onClickFirstYearCGPA}
						>
							Calculate CGPA
						</button>
					</div>

					{/* home page alert  */}
					<div className="mt-3">
						<div
							role="alert"
							className="alert"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								className="stroke-info h-6 w-6 shrink-0"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
								></path>
							</svg>
							<span>
								<Link className="link-primary underline" to={"https://cgpa-sgpa--beta-4vi7tum2.web.app/"}>
									4<sup>th</sup>sem SGPA and overall CGPA updated in beta
									channel
								</Link>
							</span>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Home;
