import React, { useState } from "react";
import {
	LineChart,
	Line,
	BarChart,
	Bar,
	PieChart,
	Pie,
	AreaChart,
	Area,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	Legend,
	ResponsiveContainer,
} from "recharts";
import { Select } from "@radix-ui/react-select";

interface DataPoint {
	name: string;
	value: number;
}

const data: DataPoint[] = [
	{ name: "Jan", value: 400 },
	{ name: "Feb", value: 300 },
	{ name: "Mar", value: 200 },
	{ name: "Apr", value: 278 },
	{ name: "May", value: 189 },
	{ name: "Jun", value: 239 },
];

type ChartType = "line" | "bar" | "pie" | "area";

const Metrics: React.FC = () => {
	const [chartType, setChartType] = useState<ChartType>("line");

	const renderChart = () => {
		switch (chartType) {
			case "line":
				return (
					<LineChart data={data}>
						<XAxis dataKey="name" />
						<YAxis />
						<CartesianGrid strokeDasharray="3 3" />
						<Tooltip />
						<Legend />
						<Line type="monotone" dataKey="value" stroke="#8884d8" />
					</LineChart>
				);
			case "bar":
				return (
					<BarChart data={data}>
						<XAxis dataKey="name" />
						<YAxis />
						<CartesianGrid strokeDasharray="3 3" />
						<Tooltip />
						<Legend />
						<Bar dataKey="value" fill="#8884d8" />
					</BarChart>
				);
			case "pie":
				return (
					<PieChart>
						<Pie
							data={data}
							dataKey="value"
							nameKey="name"
							cx="50%"
							cy="50%"
							outerRadius={80}
							fill="#8884d8"
							label
						/>
						<Tooltip />
					</PieChart>
				);
			case "area":
				return (
					<AreaChart data={data}>
						<XAxis dataKey="name" />
						<YAxis />
						<CartesianGrid strokeDasharray="3 3" />
						<Tooltip />
						<Legend />
						<Area
							type="monotone"
							dataKey="value"
							stroke="#8884d8"
							fill="#8884d8"
						/>
					</AreaChart>
				);
			default:
				return null;
		}
	};

	return (
		<div className="bg-white shadow rounded-lg p-6">
			<h2 className="text-2xl font-semibold mb-4">Metrics</h2>
			<div className="space-y-4">
				<div className="flex justify-end">
					<Select.Root
						onValueChange={(value: ChartType) => setChartType(value)}
						defaultValue={chartType}
					>
						<Select.Trigger className="w-[180px]">
							<Select.Value placeholder="Select chart type" />
						</Select.Trigger>
						<Select.Content>
							<Select.Item value="line">Line Chart</Select.Item>
							<Select.Item value="bar">Bar Chart</Select.Item>
							<Select.Item value="pie">Pie Chart</Select.Item>
							<Select.Item value="area">Area Chart</Select.Item>
						</Select.Content>
					</Select.Root>
				</div>
				<div className="h-[400px]">
					<ResponsiveContainer width="100%" height="100%">
						{renderChart()}
					</ResponsiveContainer>
				</div>
			</div>
		</div>
	);
};

export default Metrics;
