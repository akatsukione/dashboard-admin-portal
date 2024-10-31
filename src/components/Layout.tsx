import React from "react";
import { Link, useLocation } from "react-router-dom";
import { BarChart, Users, Building, Globe } from "lucide-react";

interface MenuItem {
	name: string;
	icon: React.ElementType;
	link: string;
}

const menuItems: MenuItem[] = [
	{ name: "Employees", icon: Users, link: "/employees" },
	{ name: "Departments", icon: Building, link: "/departments" },
	{ name: "Countries", icon: Globe, link: "/countries" },
	{ name: "Metrics", icon: BarChart, link: "/metrics" },
];

interface LayoutProps {
	children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
	const location = useLocation();

	return (
		<div className="flex h-screen bg-gray-100">
			{/* Sidebar */}
			<aside className="w-64 bg-white shadow-md">
				<div className="p-4">
					<h1 className="text-2xl font-bold text-gray-800">Dashboard</h1>
				</div>
				<nav className="mt-6">
					{menuItems.map((item) => (
						<Link
							key={item.name}
							to={item.link}
							className={`flex items-center px-6 py-3 text-gray-600 hover:bg-gray-100 hover:text-gray-800 ${
								location.pathname === item.link
									? "bg-gray-100 text-gray-800"
									: ""
							}`}
						>
							<item.icon className="h-5 w-5 mr-3" />
							{item.name}
						</Link>
					))}
				</nav>
			</aside>

			{/* Main content */}
			<div className="flex flex-col flex-1 overflow-hidden">
				{/* Header */}
				<header className="flex items-center justify-between px-6 py-4 bg-white shadow">
					<div className="flex items-center">
						<img src="/logo.svg" alt="Logo" className="h-8 w-8 mr-2" />
						<h2 className="text-xl font-semibold text-gray-800">
							Company Name
						</h2>
					</div>
				</header>

				{/* Main board */}
				<main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100 p-6">
					{children}
				</main>

				{/* Footer */}
				<footer className="bg-white shadow mt-auto py-4 px-6">
					<p className="text-center text-gray-600">
						© 2024 Company Name. All rights reserved.
					</p>
				</footer>
			</div>
		</div>
	);
};

export default Layout;
