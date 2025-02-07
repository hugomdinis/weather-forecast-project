import { useState, useEffect } from "react";
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

export const WeatherChart: React.FunctionComponent<WeatherChartProps> = ({ forecast, unit }) => {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const formatDate = (date: string) => {
        const dateObj = new Date(date);
        return isMobile ? dateObj.getDate().toString() : date;
    };

    return (
        <ResponsiveContainer width="100%" height={300}>
            <BarChart 
                data={forecast.map((item) => ({ ...item, formattedDate: formatDate(item.date) }))} 
                margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
            >
                <XAxis 
                    dataKey="formattedDate" // Usa a data formatada
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