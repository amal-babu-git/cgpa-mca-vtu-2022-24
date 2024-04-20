import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const CGPA = () => {
	const { register, handleSubmit } = useForm();
	const [CGPAResult, setCGPAResult] = useState(0.0);

	useEffect(() => {
		window.scroll(0, 0);
	}, []);

	// checking, if sgpas are available in local storage
	const sem1 = localStorage.getItem("sem1") ?? "";
	const sem2 = localStorage.getItem("sem2") ?? "";
	const sem3 = localStorage.getItem("sem3") ?? "";

	const onSubmit = (data) => {
		console.log(data);

		const semOneSGPA = parseFloat(data.sem1);
		const semTwoSGPA = parseFloat(data.sem2);
		const semThreeSGPA = parseFloat(data.sem3);

		// (sem1_sgpa * total_credits_in_sem_1 + sem2_sgpa * total_credits_in_sem_2) / total_credits
		const result =
			parseFloat(semOneSGPA * 24 + semTwoSGPA * 26 + semThreeSGPA * 26) /
			parseFloat(76);
		console.log(result);
		setCGPAResult(result);

		// store cgpa to local storage
		localStorage.setItem("cgpa", result.toFixed(4));

		// save to local storage this will helps for only print sgpas in report download page
		localStorage.setItem("sem1", semOneSGPA.toFixed(4));
		localStorage.setItem("sem2", semTwoSGPA.toFixed(4));
		localStorage.setItem("sem3", semThreeSGPA.toFixed(4));

		setTimeout(() => {
			document.getElementById("cgpa").focus();
		}, 100);
	};

	return (
		<>
			<div className="flex justify-center items-center ">
				<div className="card w-auto bg-base-100 shadow-xl p-1 mt-4">
					<div className="card-body">
						<h2 className="card-title">Enter Your Sem I and Sem II SGPA</h2>
						<p className="text-start text-primary">CGPA calculator</p>

						<div className="card-body text-start w-96">
							<form onSubmit={handleSubmit(onSubmit)}>
								<div className="form-control">
									<label className="label">
										<span className="label-text font-semibold">
											ENTER 1<sup>st</sup> SEM SGPA
										</span>
									</label>
									<input
										type="number"
										min={0}
										max={10}
										step={0.00001}
										className="input input-bordered"
										name="dbms"
										id="dbms"
										defaultValue={sem1}
										required
										{...register("sem1")}
									/>
								</div>
								<div className="form-control">
									<label className="label">
										<span className="label-text font-semibold">
											ENTER 2<sup>rd</sup> SEM SGPA
										</span>
									</label>
									<input
										type="number"
										min={0}
										max={10}
										step={0.00001}
										className="input input-bordered"
										name="java"
										id="java"
										defaultValue={sem2}
										required
										{...register("sem2")}
									/>
								</div>
								<div className="form-control">
									<label className="label">
										<span className="label-text font-semibold">
											ENTER 3<sup>rd</sup> SEM SGPA
										</span>
									</label>
									<input
										type="number"
										min={0}
										max={10}
										step={0.00001}
										className="input input-bordered"
										name="java"
										id="java"
										defaultValue={sem3}
										required
										{...register("sem3")}
									/>
								</div>

								{/* result */}
								{CGPAResult > 0 && (
									<div className="form-control">
										<label className="label">
											<span className="label-text font-semibold">CGPA</span>
										</label>
										<input
											type="number"
											value={CGPAResult}
											className="input input-bordered border-primary font-semibold"
											readOnly
											id="cgpa"
											name="cgpa"
										/>
										<div className="form-control  mt-2 p-3">
											<Link
												className="btn"
												to={"/report"}
											>
												{" "}
												Download Result
											</Link>
										</div>
									</div>
								)}
								<div className="form-control  mt-2 p-3">
									<input
										className="btn btn-neutral btn-active "
										type="submit"
										value="submit"
									/>
								</div>
								<div>
									<div className="font-normal">
										<span className="text-red-500">
											<ul>Alert</ul>
										</span>
										<p>
											Please calculate your semester GPAs before proceeding. If
											you don&apos;t know your first, second or third semester
											SGPA, please go back and calculate them first. Once you
											have the SGPAs for each semester, you can come back here
											and calculate your overall CGPA.
										</p>

										<Link
											className="link-primary btn font-semibold me-1 ms-1"
											to={"/"}
										>
											Go Back
										</Link>
										<span>to calculate SGPAs</span>
										<p className="underline">
											Do not use this app to calculate CGPA if you are failed in
											any subject.
										</p>
									</div>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default CGPA;
