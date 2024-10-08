import { useNavigate } from "react-router-dom";
import HomePageNotifications from "../notifications/HomePageNotifications";

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
			<div className="flex justify-center items-center mt-10 mb-2  h-screen text-center">
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
					<HomePageNotifications />
					{/* alert 3
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
					</div> */}
				</div>
			</div>
		</>
	);
};

export default Home;
