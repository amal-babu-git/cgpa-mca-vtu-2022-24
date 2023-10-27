import { useState } from "react";
import { useForm } from "react-hook-form";

const SemOneSGPACard = () => {
	const { register, handleSubmit } = useForm();
	const [SGPAResult, setSGPAResult] = useState(0.0);

	const onSubmit = (data) => {
		console.log(data);

		// calculate  grade-point * course-credit
		const math = calculateGP(parseFloat(data.math)) * parseFloat(4);
		const os = calculateGP(parseFloat(data.os)) * parseFloat(4);
		const ds = calculateGP(parseFloat(data.ds)) * parseFloat(3);
		const cn = calculateGP(parseFloat(data.cn)) * parseFloat(3);
		const da = calculateGP(parseFloat(data.da)) * parseFloat(4);
		const dsLab = calculateGP(parseFloat(data.dslab)) * parseFloat(1.5);
		const cnLab = calculateGP(parseFloat(data.cnlab)) * parseFloat(1.5);
		const ipr = calculateGP(parseFloat(data.ipr)) * parseFloat(2);

		//find sum
		const sum = math + os + ds + cn + da + dsLab + cnLab + ipr;
		const result = sum / parseFloat(23);
		console.log(result);
		setSGPAResult(result);
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
										{...register("ipr")}
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
									</div>
								)}
								<div className="form-control  mt-2 p-3">
									<input
										className="btn btn-primary "
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

export default SemOneSGPACard;
