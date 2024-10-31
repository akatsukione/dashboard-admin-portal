import React, { useMemo, useState } from "react";
import EditableTable from "./EditableTable";
import { Column } from "react-table";

interface Employee {
	id: number;
	name: string;
	position: string;
	department: string;
}

export const EmployeesTable: React.FC = () => {
	const [data, setData] = useState<Employee[]>([
		{ id: 1, name: "John Doe", position: "Developer", department: "IT" },
		{
			id: 2,
			name: "Jane Smith",
			position: "Designer",
			department: "Marketing",
		},
		{ id: 3, name: "Bob Johnson", position: "Manager", department: "Sales" },
	]);

	const columns: Column<Employee>[] = useMemo(
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
				Header: "Position",
				accessor: "position",
			},
			{
				Header: "Department",
				accessor: "department",
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
			<h2 className="text-2xl font-semibold mb-4">Employees</h2>
			<EditableTable
				columns={columns}
				data={data}
				updateMyData={updateMyData}
			/>
		</div>
	);
};
