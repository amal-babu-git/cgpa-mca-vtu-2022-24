const ReportIssueModal = () => {
	return (
		<>
			<button
				className="btn"
				onClick={() => document.getElementById("my_modal_5").showModal()}
			>
				Report an Issue
			</button>

			<dialog
				id="my_modal_5"
				className="modal modal-bottom sm:modal-middle"
			>
				<div className="modal-box">
					<div className="form-control p-2 mt-2">
						<h3 className="text-black text-lg font-semibold ">Report an issue</h3>
						<p className="font-mono mb-1 mt-1 ms-1">
							Please note: Submitting the problem will also collect metadata
							outlined in our Privacy Policy, such as marks and additional
							information
						</p>
						<input
							type="text"
							placeholder="Enter problem"
							className="input input-bordered form-control text-black"
							id="msg"
							name="msg"
						/>
						<input
							type="submit"
							className="btn btn-neutral w-full mt-2"
							value="Submit"
						/>
					</div>
					<div className="modal-action">
						<form method="dialog">
							{/* if there is a button in form, it will close the modal */}
							<button className="btn">close</button>
						</form>
					</div>
				</div>
			</dialog>
		</>
	);
};

export default ReportIssueModal;
