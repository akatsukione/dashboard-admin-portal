import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout";
import { EmployeesTable } from "./components/EmployeesTable";
import { DepartmentsTable } from "./components/DepartmentsTable";
import { CountriesTable } from "./components/CountriesTable";
import { Metrics } from "./components/Metrics";

const App: React.FC = () => {
	return (
		<Router>
			<Layout>
				<Routes>
					<Route path="/" element={<EmployeesTable />} />
					<Route path="/employees" element={<EmployeesTable />} />
					<Route path="/departments" element={<DepartmentsTable />} />
					<Route path="/countries" element={<CountriesTable />} />
					<Route path="/metrics" element={<Metrics />} />
				</Routes>
			</Layout>
		</Router>
	);
};

export default App;
