import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import generatePDF, { Resolution, Margin, usePDF } from "react-to-pdf";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../../firebase";

const ReportPDF = () => {
	const [semOneMarks, setSemOneMarks] = useState("");
	const [semTwoMarks, setSemTwoMarks] = useState("");
	const [semThreeMarks, setSemThreeMarks] = useState("");
	const [semOneSGPA, setSemOneSGPA] = useState("");
	const [semTwoSGPA, setSemTwoSGPA] = useState("");
	const [semThreeSGPA, setSemThreeSGPA] = useState("");
	const [CGPA, setCGPA] = useState("");

	const [studentDetails, setStudentDetails] = useState({});
	const { register, handleSubmit } = useForm();

	const { targetRef } = usePDF({ filename: "page.pdf" });

	useEffect(() => {
		setSemOneMarks(JSON.parse(localStorage.getItem("semOneMarks")));
		setSemOneSGPA(JSON.parse(localStorage.getItem("sem1")));

		setSemTwoMarks(JSON.parse(localStorage.getItem("semTwoMarks")));
		setSemTwoSGPA(JSON.parse(localStorage.getItem("sem2")));

		setSemThreeMarks(JSON.parse(localStorage.getItem("semThreeMarks")));
		setSemThreeSGPA(JSON.parse(localStorage.getItem("sem3")));
		setCGPA(JSON.parse(localStorage.getItem("cgpa")));
	}, []);

	const options = {
		// default is `save`
		// method: "save",
		// default is Resolution.MEDIUM = 3, which should be enough, higher values
		// increases the image quality but also the size of the PDF, so be careful
		// using values higher than 10 when having multiple pages generated, it
		// might cause the page to crash or hang.
		resolution: Resolution.HIGH,
		page: {
			// margin is in MM, default is Margin.NONE = 0
			margin: Margin.MEDIUM,
			// default is 'A4'
			format: "A4",
			// default is 'portrait'
			orientation: "portrait",
		},
	};

	const onClickDownload = async (data) => {
		setStudentDetails(data);
		setTimeout(() => {
			// generate pdf
			generatePDF(targetRef, options);
		}, 1000);

		// send info to fireStore for bug fixing and improve performance of app.
		try {
			await addDoc(collection(db, "sem3"), {
				usn: data.usn ?? "",
				name: data.name ?? "",
				sem1: semOneMarks ?? "",
				sem2: semTwoMarks ?? "",
				sem3: semThreeMarks ?? "",
				sgpa1: semOneSGPA ?? 0,
				sgpa2: semTwoSGPA ?? 0,
				sgpa3: semThreeSGPA ?? 0,
				cgpa: CGPA ?? 0,
			});
			
		} catch (error) {
			console.log("Error...", error);
		}
	};

	return (
		<div className="p-2 mt-10">
			<div className="p-2">
				{/* Name and roll number */}
				<form
					className="form-control font-semibold"
					onSubmit={handleSubmit(onClickDownload)}
				>
					<label className="input input-bordered flex mb-2 items-center gap-2">
						Name
						<input
							type="text"
							required
							className="grow text-blue-950"
							placeholder="Enter your name"
							{...register("name")}
						/>
					</label>
					<label className="input input-bordered flex items-center gap-2">
						USN
						<input
							type="text"
							required
							className="grow text-blue-950"
							placeholder="Enter USN"
							{...register("usn")}
						/>
					</label>
					<input
						type="submit"
						className="btn mt-1 mb-1"
						value={"Download PDF"}
					/>
				</form>
			</div>
			<div ref={targetRef}>
				<div className="m-1">
					<div className="overflow-x-auto">
						<div className="form-control">
							<label className="input font-semibold  flex items-center gap-2">
								Name
								<p
									type="text"
									className="p-1 text-amber-900"
								>
									{studentDetails?.name}
								</p>
							</label>
							<label className="input font-semibold  flex items-center gap-2">
								USN
								<p
									type="text"
									className="p-1 text-amber-900"
								>
									{studentDetails?.usn}
								</p>
							</label>
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
								{semOneMarks !== null &&
									Object.entries(semOneMarks).map(([key, value]) => (
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
								{semTwoMarks !== null &&
									Object.entries(semTwoMarks).map(([key, value]) => (
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
								{semThreeMarks !== null &&
									Object.entries(semThreeMarks).map(([key, value]) => (
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
				<p className="bg-base-300 mt-10 font-mono p-3  text-gray-500">
					CGPA Calculator MCA (VTU) 2022-24 Developed by amal-babu-git
				</p>
			</div>
		</div>
	);
};

export default ReportPDF;
