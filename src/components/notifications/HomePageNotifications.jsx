// THIS IS HOME PAGE NOTIFICATIONS COMPONENT, TO DISPLAY NOTIFICATION CARDS ON HOME PAGE

import { Link } from "react-router-dom";

const HomePageNotifications = () => {
    return (
        <div className="p-1 m-1">
			<div
				role="alert"
				className="alert"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					className="stroke-info h-6 w-6 shrink-0"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth="2"
						d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
					></path>
				</svg>
				<span className="link-primary">
					<Link to={"https://cgpa-sgpa--beta-6o1e7nhr.web.app/"}>
						Checkout the Beta version of this app
					</Link>
				</span>
			</div>

			<div
				role="alert"
				className="alert mt-2"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					className="stroke-info h-6 w-6 shrink-0"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth="2"
						d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
					></path>
				</svg>
				<span>
					<Link
						to={
							"https://medium.com/@amalbabuk/sgpa-and-cgpa-calculation-for-mca-course-at-vtu-7bf3f8400631"
						}
						target="_blank"
						className="link-primary"
					>
						How to calculate CGPA manually{" "}
						<span className="underline">click</span>
					</Link>
				</span>
			</div>
			<div
				role="alert"
				className="alert mt-2"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					className="stroke-info h-6 w-6 shrink-0"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth="2"
						d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
					></path>
				</svg>
				<span>
					<Link
						to={
							"https://medium.com/@amalbabuk/mastering-leetcode-tackling-dsa-challenges-step-by-step-2d2d9b04d85b"
						}
						target="_blank"
						className="link-primary"
					>
						Mastering LeetCode (Blog)
					</Link>
				</span>
			</div>
		</div>
	);
}

export default HomePageNotifications