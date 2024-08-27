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
							className="alert bg-secondary-content"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-6 w-6 shrink-0 stroke-current"
								fill="none"
								viewBox="0 0 24 24"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
								/>
							</svg>
							<span>
								<Link
									className="link-primary"
									to={"https://cgpa-sgpa--beta-4vi7tum2.web.app/"}
								>
									🎉 Welcome to the Beta!
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
