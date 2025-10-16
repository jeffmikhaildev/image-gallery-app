import { Outlet } from "react-router-dom";
import Navigation from "../components/Navigation";

const Layout = () => {
	return (
		<>
			<Navigation />
			<main className="p-4 sm:p-6 bg-zinc-900 text-purple-500">
				<Outlet />
			</main>
		</>
	);
};

export default Layout;
