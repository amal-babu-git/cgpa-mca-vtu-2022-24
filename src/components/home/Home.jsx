import { Link, useNavigate } from "react-router-dom";
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
			<div className="flex justify-center items-center mt-20 mb-2  h-auto text-center">
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
						<span className="link-primary underline">
							<Link to={"https://cgpa-sgpa--beta-6o1e7nhr.web.app/"}>
								4<sup>th</sup>SEM SGPA & CGPA Live ON BETA
							</Link>
						</span>
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
									to={"https://cgpa-sgpa--beta-ryq2nh04.web.app/"}
								>
									🎉 Welcome to the Beta!
								</Link>
							</span>
						</div>
					</div>
					{/* alert 2 */}
					<div
						role="alert"
						className="alert mt-2"
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
							<Link
								to={
									"https://medium.com/@onlineamalbabu/sgpa-and-cgpa-calculation-for-mca-course-at-vtu-7bf3f8400631"
								}
								target="_blank"
								className="link-primary"
							>
								How to calculate CGPA manually{" "}
								<span className="underline">click</span>
							</Link>
						</span>
					</div>
					{/* alert 3 */}
					<div className="collapse bg-base-200 mt-2 w-96">
						<input type="checkbox" />

						<div className="collapse-title text-base font-medium">
							Important Notification for Junior MCA Students
						</div>
						<div className="collapse-content text-start p-1 font-sans ">
							<p className="font-semibold p-1">
								Are you interested in maintaining and improving {" "}
								<Link
									to={"/"}
									className="link-primary"
								>
									this
								</Link>{" "}
								MCA CGPA Calculator?
							</p>
							<p className="p-1">
								Our batch (2022-24) has successfully used this web app
								throughout our MCA program, and we want to ensure its continued
								availability for future students. We&apos;re looking for
								motivated individuals from the junior batch to take over the
								project and extend its services. If you&apos;re passionate about
								web development and want to contribute to a useful tool for your
								peers, this is a great opportunity to:
							</p>
							<ul className="list-disc p-4 font-semibold">
								<li>
									Gain practical experience in maintaining a live web
									application
								</li>
								<li>Add a valuable project to your portfolio</li>
								<li>Provide a helpful service to your fellow students</li>
							</ul>
							<p className="text-center">
								Interested? Please contact me at{" "}
								<Link to="mailto:amalbabu1200@gmail.com">
									amalbabu1200@gmail.com
								</Link>
							</p>
							<p className="mt-1">
								Let&apos;as keep this valuable resource alive for future MCA
								students at VTU!
							</p>
							<p className="italic underline">
								Note: This calculator was initially developed for the 2022-24
								batch. Updates may be required to ensure compatibility with
								future curriculum changes.
							</p>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Home;
