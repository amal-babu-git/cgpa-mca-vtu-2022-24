import DeveloperProfile from "../utilities/DeveloperProfile";
// import ReportIssueModal from "../utilities/ReportIssueModal";

const Footer = () => {
  return (
		<>
			<footer className="footer items-center p-4 bg-base-300 text-neutral-content mt-4">
				<aside className="items-center grid-flow-col">
					{/* <ReportIssueModal/> */}
				</aside>
				<nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
					<DeveloperProfile/>
				</nav>
			</footer>
		</>
	);
}

export default Footer