import { useNavigate } from "react-router-dom";

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
							onClick={onClickFirstYearCGPA}
						>
							Calculate CGPA
						</button>
					</div>
				</div>
			</div>
		</>
	);
};

export default Home;
