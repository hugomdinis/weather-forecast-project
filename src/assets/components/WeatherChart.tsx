
import { CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

interface WeatherChartProps {
    forecast: { date: string; temperature: number}[];
    unit: "C" | "F";
}

export const WeatherChart: React.FunctionComponent<WeatherChartProps> = ({ forecast, unit}) => {
    return(
        <ResponsiveContainer width="100%" height={300}>
            <LineChart data={forecast}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date"/>
                <YAxis 
                    label={{ value: `Temperatura (°${unit})`, angle: -90, position: "insideLeft" }}
                />
                <Tooltip 
                contentStyle={{ backgroundColor: "#fff", color: "#666", border: "1px solid #ccc" }} 
                itemStyle={{ color: "#666" }} 
                labelStyle={{ color: "#666" }} 
                formatter={(value) => [`${value}°${unit}`, "Temperature"]}
                />
                <Line type="monotone" dataKey="temperature" stroke="#007bff" strokeWidth={2} />
            </LineChart>
        </ResponsiveContainer>
    );
};