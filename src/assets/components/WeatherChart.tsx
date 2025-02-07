
import { BarChart, Bar, ResponsiveContainer, XAxis} from "recharts";

interface WeatherChartProps {
    forecast: { date: string; temperature: number}[];
    unit: "C" | "F";
}

const CustomBarLabel = (props: any) => {
    const { x, y, width, value, unit } = props;
    return (
        <text 
            x={x + width / 2} 
            y={y - 5} 
            fill="#000" 
            fontSize={12} 
            textAnchor="middle"
        >
            {value.toFixed(1)}°{unit}
        </text>
    );
};

export const WeatherChart: React.FunctionComponent<WeatherChartProps> = ({ forecast, unit}) => {
    return(
        <ResponsiveContainer width="100%" height={300}>
            <BarChart 
                data={forecast} 
                margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
            >
                <XAxis 
                    dataKey="date" 
                    tick={{ fill: "#666" }} 
                    label={{ value: "Days", position: "insideBottom", offset: -5 }}
                />
                <Bar 
                    dataKey="temperature" 
                    fill="#007bff" 
                    barSize={30} 
                    label={<CustomBarLabel unit={unit} />}
                />
            </BarChart>
        </ResponsiveContainer>
    );
};