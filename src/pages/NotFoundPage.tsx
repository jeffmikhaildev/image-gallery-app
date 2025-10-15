import { Link } from "react-router-dom";

const NotFoundPage = () => {
	return (
		<section className="flex flex-col gap-4 items-center bg-zinc-900 h-screen p-16 text-yellow-500">
			<h2 className="font-bold">404 - Page Not Found</h2>
			<Link
				to="/"
				className="px-4 py-2 border-yellow-500 border rounded-sm">
				Home Page
			</Link>
		</section>
	);
};

export default NotFoundPage;
