import React, { useMemo, useState } from "react";
import EditableTable from "./EditableTable";
import { Column } from "react-table";

interface Country {
	id: number;
	name: string;
	code: string;
	population: string;
}

export const CountriesTable: React.FC = () => {
	const [data, setData] = useState<Country[]>([
		{ id: 1, name: "United States", code: "US", population: "331 million" },
		{ id: 2, name: "United Kingdom", code: "UK", population: "68 million" },
		{ id: 3, name: "Canada", code: "CA", population: "38 million" },
	]);

	const columns: Column<Country>[] = useMemo(
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
				Header: "Code",
				accessor: "code",
			},
			{
				Header: "Population",
				accessor: "population",
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
			<h2 className="text-2xl font-semibold mb-4">Countries</h2>
			<EditableTable
				columns={columns}
				data={data}
				updateMyData={updateMyData}
			/>
		</div>
	);
};
