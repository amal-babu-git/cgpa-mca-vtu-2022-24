import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const SemTwoSGPACard = () => {
	const { register, handleSubmit } = useForm();
	const [SGPAResult, setSGPAResult] = useState(0.0);

	useEffect(() => {
		window.scroll(0, 0);
	}, []);

	const onSubmit = (data) => {
		console.log(data);

		// calculate  grade-point * course-credit
		const dbms = calculateGP(parseFloat(data.dbms)) * parseFloat(3);
		const java = calculateGP(parseFloat(data.java)) * parseFloat(3);
		const se = calculateGP(parseFloat(data.se)) * parseFloat(4);
		const web = calculateGP(parseFloat(data.web)) * parseFloat(4);
		const pe1 = calculateGP(parseFloat(data.pe1)) * parseFloat(3);
		const pe2 = calculateGP(parseFloat(data.pe2)) * parseFloat(3);
		const dbmsLab = calculateGP(parseFloat(data.dbmsLab)) * parseFloat(2);
		const javaLab = calculateGP(parseFloat(data.javaLab)) * parseFloat(2);
		const seminar = calculateGP(parseFloat(data.seminar)) * parseFloat(2);

		//find sum
		const sum =
			dbms + java + se + web + pe1 + pe2 + dbmsLab + javaLab + seminar;
		const result = sum / parseFloat(26);
		console.log(result);
		setSGPAResult(result);

		setTimeout(() => {
			document.getElementById("sgpa").focus();
		}, 100);

		// store this value to local storage, this will be used for calculate cgpa in cgpa form
		localStorage.setItem("sem2", result.toFixed(4));
		localStorage.setItem("semTwoMarks", JSON.stringify(data));
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
			<div className="flex justify-center items-center ">
				<div className="card w-auto bg-base-100 shadow-xl p-1 mt-4">
					<div className="card-body">
						<h2 className="card-title">Enter your marks</h2>
						<p className="text-start text-primary">SGPA calculator</p>

						<div className="card-body text-start w-96">
							<form onSubmit={handleSubmit(onSubmit)}>
								<div className="form-control">
									<label className="label">
										<span className="label-text font-semibold">
											Database Management System
										</span>
									</label>
									<input
										type="number"
										min={0}
										max={100}
										className="input input-bordered"
										name="dbms"
										id="dbms"
										required
										{...register("dbms")}
									/>
								</div>
								<div className="form-control">
									<label className="label">
										<span className="label-text font-semibold">
											Object Oriented Programming Using Java
										</span>
									</label>
									<input
										type="number"
										min={0}
										max={100}
										className="input input-bordered"
										name="java"
										id="java"
										required
										{...register("java")}
									/>
								</div>
								<div className="form-control">
									<label className="label">
										<span className="label-text font-semibold">
											Software Engineering
										</span>
									</label>
									<input
										type="number"
										min={0}
										max={100}
										className="input input-bordered"
										name="se"
										id="se"
										required
										{...register("se")}
									/>
								</div>
								<div className="form-control">
									<label className="label">
										<span className="label-text font-semibold">
											Web Technologies
										</span>
									</label>
									<input
										type="number"
										min={0}
										max={100}
										className="input input-bordered"
										name="web"
										id="web"
										required
										{...register("web")}
									/>
								</div>
								<div className="form-control">
									<label className="label">
										<span className="label-text font-semibold">
											Professional Elective 1 (ERP/UID/OT/DMBI/CG)
										</span>
									</label>
									<input
										type="number"
										min={0}
										max={100}
										className="input input-bordered"
										name="pe1"
										id="pe1"
										required
										{...register("pe1")}
									/>
								</div>
								<div className="form-control">
									<label className="label">
										<span className="label-text font-semibold">
											Professional Elective 2 (MAD/AI/DOS/CNS/NLP)
										</span>
									</label>
									<input
										type="number"
										min={0}
										max={100}
										className="input input-bordered"
										name="pe2"
										id="pe2"
										required
										{...register("pe2")}
									/>
								</div>
								<div className="form-control">
									<label className="label">
										<span className="label-text font-semibold">
											DBMS Laboratory
										</span>
									</label>
									<input
										type="number"
										min={0}
										max={100}
										className="input input-bordered"
										name="dbmsLab"
										id="dbmsLab"
										required
										{...register("dbmsLab")}
									/>
								</div>
								<div className="form-control">
									<label className="label">
										<span className="label-text font-semibold">
											Java Programming Laboratory
										</span>
									</label>
									<input
										type="number"
										min={0}
										max={100}
										className="input input-bordered"
										name="javaLab"
										id="javaLab"
										required
										{...register("javaLab")}
									/>
								</div>
								<div className="form-control">
									<label className="label">
										<span className="label-text font-semibold">Seminar</span>
									</label>
									<input
										type="number"
										min={0}
										max={100}
										className="input input-bordered"
										name="seminar"
										id="seminar"
										required
										{...register("seminar")}
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
											to={"/sgpa-sem-three"}
										>
											Calculate 3<sup>rd</sup> Sem SGPA
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

export default SemTwoSGPACard;
