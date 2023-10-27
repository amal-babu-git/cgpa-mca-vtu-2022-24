import { useState } from "react";
import { useForm } from "react-hook-form";

const FirstYearCGPA = () => {
	const { register, handleSubmit } = useForm();
	const [CGPAResult, setCGPAResult] = useState(0.0);

	const onSubmit = (data) => {
		console.log(data);

	
		const semOneSGPA = parseFloat(data.sem1) 
		const semTwoSGPA = parseFloat(data.sem2)
		
		const result = parseFloat(semOneSGPA*23+semTwoSGPA*26) / parseFloat(49);
		console.log(result);
		setCGPAResult(result);
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
											ENTER SEM I SGPA
										</span>
									</label>
									<input
										type="number"
										min={0}
										max={10}
										step={0.01}
										className="input input-bordered"
										name="dbms"
										id="dbms"
										required
										{...register("sem1")}
									/>
								</div>
								<div className="form-control">
									<label className="label">
										<span className="label-text font-semibold">
											ENTER SEM II SGPA
										</span>
									</label>
									<input
										type="number"
										min={0}
										max={10}
										step={0.01}
										className="input input-bordered"
										name="java"
										id="java"
										required
										{...register("sem2")}
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
											id="sgpa"
											name="sgpa"
										/>
									</div>
								)}
								<div className="form-control  mt-2 p-3">
									<input
										className="btn btn-neutral btn-active "
										type="submit"
										value="submit"
									/>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default FirstYearCGPA;
