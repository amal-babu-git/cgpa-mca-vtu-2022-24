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
	// on click to calculate first year CGPA
	const onClickFirstYearCGPA = () => {
		navigate("/cgpa-year-one");
	};
	return (
		<>
			<div className="flex justify-center items-center h-screen">
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
							onClick={onClickFirstYearCGPA}
						>
							I<sup>st</sup> Year CGPA
						</button>
					</div>
				</div>
			</div>
		</>
	);
};

export default Home;
