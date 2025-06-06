const PrivacyP = () => {
	return (
		<div className="mt-12 font-mono text-justify">
			<div className="container mx-auto p-4">

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
						This app collects name, USN, and semester marks, when you use the
						Download Result feature. This information is sent to our Firestore
						database and may be used to investigate and resolve bugs related to
						the calculation process.
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
					<li>You agree to our Privacy Policy to use this application.</li>
				</ul>

				{/* Privacy */}
				<h2 className="mt-4 text-xl font-medium">Privacy Policy</h2>
				<p className="mt-2 text-gray-800">
					This application does not collect or store any personal user
					information by default. If you use the Download Result feature, the
					data you have entered, including your name, USN, and semester marks,
					will be sent to our Firestore database. This data is used only for
					cross-verifying the calculations and will not be shared or used for
					any other purpose. We collect only the data that you provide to us and
					do not gather any additional information or engage in tracking.
				</p>
			</div>
		</div>
	);
};

export default PrivacyP;
