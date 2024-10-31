import React, { useMemo, useState } from "react";
import EditableTable from "./EditableTable";
import { Column } from "react-table";

interface Department {
	id: number;
	name: string;
	manager: string;
	employeeCount: number;
}

const DepartmentsTable: React.FC = () => {
	const [data, setData] = useState<Department[]>([
		{ id: 1, name: "IT", manager: "John Doe", employeeCount: 50 },
		{ id: 2, name: "Marketing", manager: "Jane Smith", employeeCount: 30 },
		{ id: 3, name: "Sales", manager: "Bob Johnson", employeeCount: 40 },
	]);

	const columns: Column<Department>[] = useMemo(
		() => [
			{
				Header: "ID",
				accessor: "id",
			},
			{
				Header: "Name",
				accessor: "name",
			},
			{
				Header: "Manager",
				accessor: "manager",
			},
			{
				Header: "Employee Count",
				accessor: "employeeCount",
			},
		],
		[]
	);

	const updateMyData = (rowIndex: number, columnId: string, value: any) => {
		setData((old) =>
			old.map((row, index) => {
				if (index === rowIndex) {
					return {
						...old[rowIndex],
						[columnId]: value,
					};
				}
				return row;
			})
		);
	};

	return (
		<div className="bg-white shadow rounded-lg p-6">
			<h2 className="text-2xl font-semibold mb-4">Departments</h2>
			<EditableTable
				columns={columns}
				data={data}
				updateMyData={updateMyData}
			/>
		</div>
	);
};

export default DepartmentsTable;
