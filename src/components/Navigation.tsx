import { Link } from "react-router-dom";

const Navigation = () => {
	return (
		<nav className="p-4 sm:p-6 bg-zinc-900 text-yellow-500 border-b flex gap-4 flex-col md:flex-row md:justify-between">
			<Link
				to="/"
				className="font-black text-xl">
				SnapNest
			</Link>

			<div className="flex flex-col gap-4 sm:flex-row sm:justify-between">
				<form className="flex gap-2">
					<input
						type="search"
						placeholder="Search..."
						className="bg-yellow-500 px-4 py-1 rounded-sm outline-none text-zinc-900"
					/>
				</form>

				<ul>
					<Link
						to="/"
						className="border grow text-center px-4 py-1 rounded-sm">
						Login
					</Link>
					<Link
						to="/"
						className="border grow text-center px-4 py-1 rounded-sm">
						Profile
					</Link>
				</ul>
			</div>
		</nav>
	);
};

export default Navigation;
