const PrivacyP = () => {
	return (
		<div className="mt-4 font-mono text-justify">
			<div className="container mx-auto p-4">
				{/* About */}
				<h1 className="text-2xl font-medium">About</h1>

				<p className="mt-2 text-gray-800">
					The SGPA & CGPA Calculator is an experimental web application
					developed to calculate semester and cumulative grade point averages
					for MCA students of VTU belonging to the 2022-2024 batch. This
					application allows students to input their marks for each subject and
					calculate their SGPAs for semesters 1 and 2, as well as their overall
					CGPA for the first year. It acts as an online calculator for this
					specific purpose and does not store any user information. As this is
					an early experimental version, there may be bugs and inaccuracies in
					the calculations. We welcome user feedback to help improve the tool.
					If you encounter any issues, please use the Report Issue feature on
					the website to send details that will help fix the problem.
				</p>

				{/* Terms */}
				<h2 className="mt-4 text-xl font-medium">Terms and Conditions</h2>

				<p className="mt-2 text-gray-800">
					By using this application, you agree to the following terms:
				</p>

				<ul>
					<li>
						This app is provided as-is, without warranty. We do not guarantee
						completely accurate calculations. Use at your own risk.
					</li>
					<li>
						This app does not store personal information except when voluntarily
						provided via the Report Issue feature. Information may be used to
						investigate and resolve bugs.
					</li>
					<li>
						We reserve the right to suspend or cease providing this application
						at any time without notice.
					</li>
					<li>
						You agree not to use this app for any illegal purpose or in
						violation of laws.
					</li>
					<li>
						This app is meant only for use by VTU MCA students of the 2022-2024
						batch. It may not produce accurate results for other programs or
						batches.
					</li>
				</ul>

				{/* Privacy */}
				<h2 className="mt-4 text-xl font-medium">Privacy Policy</h2>

				<p className="mt-2 text-gray-800">
					This application does not collect or store any personal user
					information by default. If you use the Report Issue feature,
					additional data is sent to help diagnose the problem, including: IP
					address and associated metadata, Browser type, version, Device
					operating system details This information is used only for
					investigating bugs and will not be shared or used for any other
					purpose. It is not connected to individual identities.
				</p>
			</div>
		</div>
	);
};

export default PrivacyP;
