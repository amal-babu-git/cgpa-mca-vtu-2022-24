import { usePDF } from "react-to-pdf";
import { useEffect, useState } from "react";

const ReportPDF = () => {
	const [semOneMarks, setSemOneMarks] = useState("");
	const [semTwoMarks, setSemTwoMarks] = useState("");
	const [semThreeMarks, setSemThreeMarks] = useState("");
	const [semOneSGPA, setSemOneSGPA] = useState("");
	const [semTwoSGPA, setSemTwoSGPA] = useState("");
	const [semThreeSGPA, setSemThreeSGPA] = useState("");
	const [CGPA, setCGPA] = useState("");

	const { toPDF, targetRef } = usePDF({ filename: "page.pdf" });

	useEffect(() => {
		setSemOneMarks(JSON.parse(localStorage.getItem("semOneMarks")));
		setSemOneSGPA(JSON.parse(localStorage.getItem("sem1")));

		setSemTwoMarks(JSON.parse(localStorage.getItem("semTwoMarks")));
		setSemTwoSGPA(JSON.parse(localStorage.getItem("sem2")));

		setSemThreeMarks(JSON.parse(localStorage.getItem("semThreeMarks")));
		setSemThreeSGPA(JSON.parse(localStorage.getItem("sem3")));
		setCGPA(JSON.parse(localStorage.getItem("cgpa")));
	}, []);

	return (
		<div className="p-10">
			<div className="form-control  mt-2 p-3">
				<button
					className="btn"
					onClick={() => toPDF()}
				>
					Download PDF
				</button>
			</div>
			<div ref={targetRef}>
				<div className="m-1">
					<div className="overflow-x-auto">
						<div className="p-2">
							<div className="form-control font-semibold">
								<label className="input input-bordered flex mb-2 items-center gap-2">
									Name
									<input
										type="text"
										className="grow text-blue-950"
										placeholder="Enter your name"
									/>
								</label>
								<label className="input input-bordered flex items-center gap-2">
									USN
									<input
										type="text"
										className="grow text-blue-950"
										placeholder="Enter USN"
									/>
								</label>
							</div>
						</div>
						<h3 className="font-mono font-semibold text-blue-700 text-lg">
							Semester I
						</h3>

						<table className="table mt-3">
							{/* head */}

							<thead>
								<tr className="bg-zinc-200">
									<th></th>
									<th>Subject</th>
									<th>Mark</th>
								</tr>
							</thead>
							<tbody>
								{/* TODO: */}
								{/* row 1 */}
								{Object.entries(semOneMarks).map(([key, value]) => (
									<tr
										key={key}
										className="bg-base-200"
									>
										<td></td>
										<th>{key.toUpperCase()}</th>
										<td>{value ?? "N/A"}</td>
									</tr>
								))}

								<tr className="bg-zinc-200">
									<td></td>
									<td className="text-blue-800 font-bold">SGPA</td>
									<td className="text-blue-800 font-bold">{semOneSGPA}</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div className="mt-10">
					<div className="overflow-x-auto">
						<h3 className="font-mono font-semibold text-blue-700 text-lg">
							Semester II
						</h3>
						<div></div>
						<table className="table mt-3">
							{/* head */}

							<thead>
								<tr className="bg-zinc-200">
									<th></th>
									<th>Subject</th>
									<th>Mark</th>
								</tr>
							</thead>
							<tbody>
								{/* TODO: */}
								{/* row 1 */}
								{Object.entries(semTwoMarks).map(([key, value]) => (
									<tr
										key={key}
										className="bg-base-200"
									>
										<td></td>
										<th>{key.toUpperCase()}</th>
										<td>{value ?? "N/A"}</td>
									</tr>
								))}

								<tr className="bg-zinc-200">
									<td></td>
									<td className="text-blue-800 font-bold">SGPA</td>
									<td className="text-blue-800 font-bold">{semTwoSGPA}</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div className="mt-10">
					<div className="overflow-x-auto">
						<h3 className="font-mono font-semibold text-blue-700 text-lg">
							Semester III
						</h3>
						<div></div>
						<table className="table mt-3">
							{/* head */}

							<thead>
								<tr className="bg-zinc-200">
									<th></th>
									<th>Subject</th>
									<th>Mark</th>
								</tr>
							</thead>
							<tbody>
								{/* TODO: */}
								{/* row 1 */}
								{Object.entries(semThreeMarks).map(([key, value]) => (
									<tr
										key={key}
										className="bg-base-200"
									>
										<td></td>
										<th>{key.toUpperCase()}</th>
										<td>{value ?? "N/A"}</td>
									</tr>
								))}

								<tr className="bg-zinc-200">
									<td></td>
									<td className="text-blue-800 font-bold">SGPA</td>
									<td className="text-blue-800 font-bold">{semThreeSGPA}</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div className="mt-10">
					<div className="overflow-x-auto">
						<h3 className="font-mono font-semibold text-blue-700 text-lg">
							CGPA
						</h3>
						<div></div>
						<table className="table mt-3">
							{/* head */}

							<thead>
								<tr className="bg-zinc-200">
									<th></th>
									<th></th>
									<th></th>
								</tr>
							</thead>
							<tbody>
								<tr className="bg-zinc-200">
									<td></td>
									<td className="text-red-800 font-bold">CGPA</td>
									<td className="text-red-800 font-bold">{CGPA}</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ReportPDF;
