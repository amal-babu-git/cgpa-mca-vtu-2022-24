import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const SemThreeSGPACard = () => {
	const { register, handleSubmit } = useForm();
	const [SGPAResult, setSGPAResult] = useState(0.0);
	const semThreeMarks = JSON.parse(localStorage.getItem("semThreeMarks", ""));

	useEffect(() => {
		window.scroll(0, 0);
	}, []);

	const onSubmit = (data) => {
		console.log(data);

		// calculate  grade-point * course-credit
		const dap = calculateGP(parseFloat(data.dap)) * parseFloat(3);
		const iot = calculateGP(parseFloat(data.iot)) * parseFloat(3);
		const pe3 = calculateGP(parseFloat(data.pe3)) * parseFloat(3);
		const pe4 = calculateGP(parseFloat(data.pe4)) * parseFloat(3);
		const pp1 = calculateGP(parseFloat(data.pp1)) * parseFloat(2);
		const dapLab = calculateGP(parseFloat(data.dapLab)) * parseFloat(2);
		const iotLab = calculateGP(parseFloat(data.iotLab)) * parseFloat(2);
		const sp = calculateGP(parseFloat(data.sp)) * parseFloat(2);
		const internship = calculateGP(parseFloat(data.internship)) * parseFloat(6);

		//find sum
		const sum = dap + iot + pe3 + pe4 + pp1 + dapLab + iotLab + sp + internship;
		const result = sum / parseFloat(26);
		console.log(result);
		setSGPAResult(result);

		// store this value to local storage, this will be used for calculate cgpa in cgpa form
		localStorage.setItem("sem3", result.toFixed(4));
		localStorage.setItem("semThreeMarks", JSON.stringify(data));

		setTimeout(() => {
			document.getElementById("sgpa").focus();
		}, 100);
	};

	//#Calculate Grade point
	// function to calculate grade point
	function calculateGP(mark) {
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
	}

	return (
		<>
			<div className="flex justify-center items-center mt-10 ">
				<div className="card w-auto bg-base-100 shadow-xl p-1 mt-2">
					<div className="card-body">
						<h2 className="card-title">Enter your marks</h2>
						<p className="text-start text-primary font-semibold">
							3<sup>rd</sup> SGPA calculator
						</p>

						<div className="card-body text-start w-96">
							<form onSubmit={handleSubmit(onSubmit)}>
								<div className="form-control">
									<label className="label">
										<span className="label-text font-semibold">
											Data Analytics Using Python (22MCA31)
										</span>
									</label>
									<input
										type="number"
										min={0}
										max={100}
										className="input input-bordered"
										name="dap"
										id="dap"
										required
										defaultValue={semThreeMarks?.dap}
										{...register("dap")}
									/>
								</div>
								<div className="form-control">
									<label className="label">
										<span className="label-text font-semibold">
											Internet of Things (22MCA32)
										</span>
									</label>
									<input
										type="number"
										min={0}
										max={100}
										className="input input-bordered"
										name="iot"
										id="iot"
										required
										defaultValue={semThreeMarks?.iot}
										{...register("iot")}
									/>
								</div>
								<div className="form-control">
									<label className="label">
										<span className="label-text font-semibold">
											PE3 22MCA33<span className="text-blue-600">X</span> (Block
											chain Technology,{" "}
											<span className="text-blue-700">Cloud Computing</span>,
											Digital Marketing, OOMD, NoSQL)
										</span>
									</label>
									<input
										type="number"
										min={0}
										max={100}
										className="input input-bordered"
										name="pe3"
										id="pe3"
										required
										defaultValue={semThreeMarks?.pe3}
										{...register("pe3")}
									/>
								</div>
								<div className="form-control">
									<label className="label">
										<span className="label-text font-semibold">
											PE4 22MCA34<span className="text-blue-600">X</span> (
											<span className="text-blue-700">
												Advanced Java and J2EE
											</span>
											, Dot Net, Knowledge Engineering, Software Testing, VR)
										</span>
									</label>
									<input
										type="number"
										min={0}
										max={100}
										className="input input-bordered"
										name="pe4"
										id="pe4"
										required
										defaultValue={semThreeMarks?.pe4}
										{...register("pe4")}
									/>
								</div>
								<div className="form-control">
									<label className="label">
										<span className="label-text font-semibold">
											Project Work Phase 1 (22MCAL35 )
										</span>
									</label>
									<input
										type="number"
										min={0}
										max={100}
										className="input input-bordered"
										name="pp1"
										id="pp1"
										required
										defaultValue={semThreeMarks?.pp1}
										{...register("pp1")}
									/>
								</div>

								<div className="form-control">
									<label className="label">
										<span className="label-text font-semibold">
											Data Analytics Lab with Mini-project (22MCAL36)
										</span>
									</label>
									<input
										type="number"
										min={0}
										max={100}
										className="input input-bordered"
										name="dapLab"
										id="dapLab"
										required
										defaultValue={semThreeMarks?.dapLab}
										{...register("dapLab")}
									/>
								</div>
								<div className="form-control">
									<label className="label">
										<span className="label-text font-semibold">
											IoT Laboratory with Mini Project (22MCAL37)
										</span>
									</label>
									<input
										type="number"
										min={0}
										max={100}
										className="input input-bordered"
										name="iotLab"
										id="iotLab"
										required
										defaultValue={semThreeMarks?.iotLab}
										{...register("iotLab")}
									/>
								</div>
								<div className="form-control">
									<label className="label">
										<span className="label-text font-semibold">
											Societal Project (22MCAL38)
										</span>
									</label>
									<input
										type="number"
										min={0}
										max={100}
										className="input input-bordered"
										name="sp"
										id="sp"
										required
										defaultValue={semThreeMarks?.sp}
										{...register("sp")}
									/>
								</div>
								<div className="form-control">
									<label className="label">
										<span className="label-text font-semibold">
											Internship (22MCA39)
										</span>
									</label>
									<input
										type="number"
										min={0}
										max={100}
										className="input input-bordered"
										name="internship"
										id="internship"
										required
										defaultValue={semThreeMarks?.internship}
										{...register("internship")}
									/>
								</div>

								<div className="form-control  mt-2 p-3">
									<input
										className="btn btn-neutral btn-active "
										type="submit"
										value="submit"
									/>
								</div>

								{/* <div className="form-control  mt-2 p-3">
									<button
										className="btn"
										onClick={() => toPDF()}
									>
										Download PDF
									</button>
								</div> */}
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

export default SemThreeSGPACard;
