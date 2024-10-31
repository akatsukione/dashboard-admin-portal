import React, { useState } from "react";
import { useTable, Column, Cell, Row } from "react-table";

interface EditableCellProps {
	value: any;
	row: Row;
	column: any;
	updateMyData: (rowIndex: number, columnId: string, value: any) => void;
}

const EditableCell: React.FC<EditableCellProps> = ({
	value: initialValue,
	row: { index },
	column: { id },
	updateMyData,
}) => {
	const [value, setValue] = useState(initialValue);

	const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setValue(e.target.value);
	};

	const onBlur = () => {
		updateMyData(index, id, value);
	};

	React.useEffect(() => {
		setValue(initialValue);
	}, [initialValue]);

	return <input value={value} onChange={onChange} onBlur={onBlur} />;
};

interface EditableTableProps<T extends object> {
	columns: Column<T>[];
	data: T[];
	updateMyData: (rowIndex: number, columnId: string, value: any) => void;
}

export const EditableTable = <T extends object>({
	columns,
	data,
	updateMyData,
}: EditableTableProps<T>): JSX.Element => {
	const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
		useTable({
			columns,
			data,
			updateMyData,
		});

	return (
		<div className="overflow-x-auto">
			<table
				{...getTableProps()}
				className="min-w-full divide-y divide-gray-200"
			>
				<thead className="bg-gray-50">
					{headerGroups.map((headerGroup) => (
						<tr {...headerGroup.getHeaderGroupProps()}>
							{headerGroup.headers.map((column) => (
								<th
									{...column.getHeaderProps()}
									className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
								>
									{column.render("Header")}
								</th>
							))}
						</tr>
					))}
				</thead>
				<tbody
					{...getTableBodyProps()}
					className="bg-white divide-y divide-gray-200"
				>
					{rows.map((row) => {
						prepareRow(row);
						return (
							<tr {...row.getRowProps()}>
								{row.cells.map((cell) => {
									return (
										<td
											{...cell.getCellProps()}
											className="px-6 py-4 whitespace-nowrap"
										>
											{cell.render("Cell")}
										</td>
									);
								})}
							</tr>
						);
					})}
				</tbody>
			</table>
		</div>
	);
};

export default EditableTable;
