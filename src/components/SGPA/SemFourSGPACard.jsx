import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const SemFourSGPACard = () => {
	const { register, handleSubmit } = useForm();
	const [SGPAResult, setSGPAResult] = useState(0.0);
	const semFourMarks = JSON.parse(localStorage.getItem("semFourMarks", ""));

	useEffect(() => {
		window.scroll(0, 0);
	}, []);

	const onSubmit = (data) => {
		console.log(data);
		// make the project work phase 2 to half because max mark is 200, but calculateGP only support 100
		// data["projectWorkPhase2"] = parseFloat(data["projectWorkPhase2"]) / 2;
		// calculate  grade-point * course-credit
		const pe5 = calculateGP(parseFloat(data.pe5)) * parseFloat(3);
		const pe6 = calculateGP(parseFloat(data.pe6)) * parseFloat(3);
		const technicalSeminar =
			calculateGP(parseFloat(data.technicalSeminar)) * parseFloat(2);
		const projectWorkPhase2 =
			calculateGP200(parseFloat(data.projectWorkPhase2)) * parseFloat(16);

		//find sum
		const sum = pe5 + pe6 + technicalSeminar + projectWorkPhase2;
		const result = sum / parseFloat(24);
		console.log(result);
		setSGPAResult(result);

		// store this value to local storage, this will be used for calculate cgpa in cgpa form
		localStorage.setItem("sem4", result.toFixed(4));
		localStorage.setItem("semFourMarks", JSON.stringify(data));

		setTimeout(() => {
			document.getElementById("sgpa").focus();
		}, 100);
	};

	// function to calculate grade point
	const calculateGP = (mark) => {
		if (mark >= 90 && mark <= 100) {
			return 10;
		} else if (mark >= 80 && mark <= 89) {
			return 9;
		} else if (mark >= 70 && mark <= 79) {
			return 8;
		} else if (mark >= 60 && mark <= 69) {
			return 7;
		} else if (mark >= 55 && mark <= 59) {
			return 6;
		} else if (mark >= 50 && mark <= 54) {
			return 5;
		} else {
			return 0;
		}
	};
	
	// function to calculate grade point for marks out of 200
	const calculateGP200 = (mark) => {
		if (mark >= 180 && mark <= 200) {
			return 10;
		} else if (mark >= 160 && mark <= 179) {
			return 9;
		} else if (mark >= 140 && mark <= 159) {
			return 8;
		} else if (mark >= 120 && mark <= 139) {
			return 7;
		} else if (mark >= 110 && mark <= 119) {
			return 6;
		} else if (mark >= 100 && mark <= 109) {
			return 5;
		} else {
			return 0;
		}
	};

	return (
		<>
			<div className="flex justify-center items-center mt-10">
				<div className="card w-auto bg-base-100 shadow-xl p-1 mt-2">
					<div className="card-body">
						<h2 className="card-title">Enter your marks</h2>
						<p className="text-start text-primary font-semibold">
							4<sup>th</sup> SGPA calculator
						</p>

						<div className="card-body text-start w-96">
							<form onSubmit={handleSubmit(onSubmit)}>
								<div className="form-control">
									<label className="label">
										<span className="label-text font-semibold text-justify">
											PE5 22MCA41<span className="text-primary">X</span> (Deep
											Learning / Big Data Analytics / Wireless Ad Hoc Networks /{" "}
											<span className="text-primary">
												Software Project Management
											</span>{" "}
											/ Software Defined Networks)
										</span>
									</label>
									<input
										type="number"
										min={0}
										max={100}
										className="input input-bordered"
										name="pe5"
										id="pe5"
										required
										defaultValue={semFourMarks?.pe5}
										{...register("pe5")}
									/>
								</div>
								<div className="form-control">
									<label className="label">
										<span className="label-text font-semibold">
											<span className="label-text font-semibold text-justify">
												PE6 22MCA42<span className="text-primary">X</span> (IT
												Project Management / Semantic Web and Social Networks /
												Game Designing / Agile Technology/{" "}
												<span className="text-primary">
													Software Metrics & Quality Assurance
												</span>
												)
											</span>
										</span>
									</label>
									<input
										type="number"
										min={0}
										max={100}
										className="input input-bordered"
										name="pe6"
										id="pe6"
										required
										defaultValue={semFourMarks?.pe6}
										{...register("pe6")}
									/>
								</div>
								<div className="form-control">
									<label className="label">
										<span className="label-text font-semibold">
											Technical Seminar (22MCA43)
										</span>
									</label>
									<input
										type="number"
										min={0}
										max={100}
										className="input input-bordered"
										name="technicalSeminar"
										id="technicalSeminar"
										required
										defaultValue={semFourMarks?.technicalSeminar}
										{...register("technicalSeminar")}
									/>
								</div>
								<div className="form-control">
									<label className="label">
										<span className="label-text font-semibold">
											Project Work Phase-2 (22MCA44)
										</span>
									</label>
									<input
										type="number"
										min={0}
										max={200}
										className="input input-bordered"
										name="projectWorkPhase2"
										id="projectWorkPhase2"
										required
										// placeholder="Please Enter. Sorry, I forgot"
										defaultValue={semFourMarks?.projectWorkPhase2}
										{...register("projectWorkPhase2")}
									/>
								</div>

								<div className="form-control  mt-2 p-3">
									<input
										className="btn btn-neutral btn-active "
										type="submit"
										value="submit"
									/>
								</div>
								{/* result */}
								{SGPAResult > 0 && (
									<div className="form-control">
										<label className="label">
											<span className="label-text font-semibold">SGPA</span>
										</label>
										<input
											type="number"
											value={SGPAResult}
											className="input input-bordered border-primary font-semibold"
											readOnly
											id="sgpa"
											name="sgpa"
										/>
										<Link
											className="btn btn-neutral btn-sm mt-2"
											to={"/cgpa"}
										>
											Calculate CGPA
										</Link>
									</div>
								)}
							</form>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default SemFourSGPACard;
