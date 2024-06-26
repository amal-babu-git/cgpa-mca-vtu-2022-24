import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const SemOneSGPACard = () => {
	const { register, handleSubmit } = useForm();
	const [SGPAResult, setSGPAResult] = useState(0.0);
	const [semOneMarks, setSemOneMarks] = useState(
		JSON.parse(localStorage.getItem("semOneMarks", ""))
	);

	useEffect(() => {
		window.scroll(0, 0);
	}, []);

	const onSubmit = (data) => {
		console.log(data);

		// calculate  grade-point * course-credit
		const math = calculateGP(parseFloat(data.math)) * parseFloat(3);
		const os = calculateGP(parseFloat(data.os)) * parseFloat(4);
		const ds = calculateGP(parseFloat(data.ds)) * parseFloat(4);
		const cn = calculateGP(parseFloat(data.cn)) * parseFloat(3);
		const da = calculateGP(parseFloat(data.da)) * parseFloat(4);
		const dsLab = calculateGP(parseFloat(data.dslab)) * parseFloat(2);
		const cnLab = calculateGP(parseFloat(data.cnlab)) * parseFloat(2);
		const ipr = calculateGP(parseFloat(data.ipr)) * parseFloat(2);

		//find sum
		const sum = math + os + ds + cn + da + dsLab + cnLab + ipr;
		const result = sum / parseFloat(24);
		console.log(result);
		setSGPAResult(result);

		// store this value to local storage, this will be used for calculate cgpa in cgpa form
		localStorage.setItem("sem1", result.toFixed(4));
		setSemOneMarks(data);
		localStorage.setItem("semOneMarks", JSON.stringify(data));
		document.getElementById("sgpa").focus();
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

	return (
		<>
			<div className="flex justify-center items-center mt-10">
				<div className="card w-auto bg-base-100 shadow-xl p-1 mt-2">
					<div className="card-body">
						<h2 className="card-title">Enter your marks</h2>
						<p className="text-start text-primary font-semibold">
							1<sup>st</sup> SGPA calculator
						</p>

						<div className="card-body text-start w-96">
							<form onSubmit={handleSubmit(onSubmit)}>
								<div className="form-control">
									<label className="label">
										<span className="label-text font-semibold">
											Mathematical foundation for computer applications
										</span>
									</label>
									<input
										type="number"
										placeholder="maths mark"
										className="input input-bordered"
										name="math"
										id="math"
										required
										defaultValue={semOneMarks?.math}
										{...register("math")}
									/>
								</div>
								<div className="form-control">
									<label className="label">
										<span className="label-text font-semibold">
											Operating System Concepts
										</span>
									</label>
									<input
										type="number"
										placeholder="os mark"
										className="input input-bordered"
										name="os"
										id="os"
										required
										defaultValue={semOneMarks?.os}
										{...register("os")}
									/>
								</div>
								<div className="form-control">
									<label className="label">
										<span className="label-text font-semibold">
											Data Structures with Algorithms
										</span>
									</label>
									<input
										type="number"
										placeholder="ds mark"
										className="input input-bordered"
										name="ds"
										id="ds"
										required
										defaultValue={semOneMarks?.ds}
										{...register("ds")}
									/>
								</div>
								<div className="form-control">
									<label className="label">
										<span className="label-text font-semibold">
											Computer Networks
										</span>
									</label>
									<input
										type="number"
										placeholder="cn mark"
										className="input input-bordered"
										name="cn"
										id="cn"
										required
										defaultValue={semOneMarks?.cn}
										{...register("cn")}
									/>
								</div>
								<div className="form-control">
									<label className="label">
										<span className="label-text font-semibold">
											Design and Analysis of Algorithms
										</span>
									</label>
									<input
										type="number"
										placeholder="DAA mark"
										className="input input-bordered"
										name="da"
										id="da"
										required
										defaultValue={semOneMarks?.da}
										{...register("da")}
									/>
								</div>
								<div className="form-control">
									<label className="label">
										<span className="label-text font-semibold">
											Data Structures with Algorithms Laboratory
										</span>
									</label>
									<input
										type="number"
										placeholder="DS Lab mark"
										className="input input-bordered"
										name="ds-lab"
										id="ds-lab"
										required
										defaultValue={semOneMarks?.dslab}
										{...register("dslab")}
									/>
								</div>
								<div className="form-control">
									<label className="label">
										<span className="label-text font-semibold">
											Computer Networks Laboratory
										</span>
									</label>
									<input
										type="number"
										placeholder="CN Lab mark"
										className="input input-bordered"
										name="cn-lab"
										id="cn-lab"
										required
										defaultValue={semOneMarks?.cnlab}
										{...register("cnlab")}
									/>
								</div>
								<div className="form-control">
									<label className="label">
										<span className="label-text font-semibold">
											Research Methodology and IPR
										</span>
									</label>
									<input
										type="number"
										placeholder="IPR mark"
										className="input input-bordered"
										name="ipr-lab"
										id="ipr-lab"
										required
										defaultValue={semOneMarks?.ipr}
										{...register("ipr")}
									/>
								</div>

								<div className="form-control  mt-2 p-3">
									<input
										className="btn btn-neutral "
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
											to={"/sgpa-sem-two"}
										>
											Calculate II<sup>nd</sup> Sem SGPA
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

export default SemOneSGPACard;
