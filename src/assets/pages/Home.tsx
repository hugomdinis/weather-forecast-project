import { useState } from "react";
import { getWeather } from "../services/WeatherApi";
import { SearchBar } from "../components/SearchBar";
import { WeatherChart } from "../components/WeatherChart";
import { WeatherMap } from "../components/WeatherMap";
import { Container, WeatherList, WeatherItem, ToggleButton, Card, CardSearchBar, RowSearchBar, ColumnSearchTitle, ColumnSearchBar, ColumnCharMap, ColumnList, RowMap, RowChart, RowWeather} from "./HomeStyles";
import { WiDaySunny } from "react-icons/wi";

export const Home = () => {
  const [weather, setWeather] = useState<any>(null);
  const [error, setError] = useState("");
  const [unit, setUnit] = useState<"C" | "F">("C")

  const handleSearch = async (city: string) => {
    try {
      setError("");
      const data = await getWeather(city);
      setWeather(data);
    } catch (err) {
      setError("City not found or API error.");
    }
  };

  // Function to switch between Celsius and Fahrenheit
  const toggleUnit = () => {
    setUnit(unit == "C" ? "F" : "C")
  };

  // Função para converter a temperatura
  const convertTemperature = (tempCelsius: number) => {
    return unit == "C" ? tempCelsius : (tempCelsius * 9) / 5 + 32;
  }

  return (
    <Container>
        <CardSearchBar>
          <RowSearchBar>
            <ColumnSearchTitle>
              <WiDaySunny size={50} style={{ marginRight: "10px", color: "#FFD700" }} />
              <h2>Weather Forecast</h2>
            </ColumnSearchTitle>
            <ColumnSearchBar>
              <SearchBar onSearch={handleSearch} />
            </ColumnSearchBar>
          </RowSearchBar>
        </CardSearchBar>
        {error && <p style={{ color: "red" }}>{error}</p>}
        {weather && (
            <RowWeather>
              <ColumnList>
                <Card>
                  <h2>{weather.city.name}, {weather.city.country}</h2>
                  <ToggleButton onClick={toggleUnit}>
                    {unit == "C" ? "Fahrenheit" : "Celsius"} 
                  </ToggleButton>
                  <WeatherList>
                    {weather.forecast.map((day: any) => (
                      <WeatherItem key={day.date}>
                        <span>{day.date}</span>
                        <span>{convertTemperature(day.temperature).toFixed(1)}°{unit}</span>
                        <img src={`https://openweathermap.org/img/wn/${day.icon}.png`} alt={day.weather} />
                      </WeatherItem>
                    ))}
                  </WeatherList>
                </Card>
              </ColumnList>

              <ColumnCharMap>
                <RowChart>
                  <Card>
                      <h3>Temperature Evolution</h3>
                      <WeatherChart 
                        forecast={weather.forecast.map((day: any) => ({
                            date: day.date,
                            temperature: convertTemperature(day.temperature),
                        }))}
                        unit={unit}
                      />
                    </Card>
                </RowChart>
                <RowMap>
                  <Card>
                    <h3>Temperature Map</h3>
                    <WeatherMap lat={weather.city.coord.lat} lon={weather.city.coord.lon} />
                  </Card>
                </RowMap>
              </ColumnCharMap>
            </RowWeather>
        )}
    </Container>
  );
};
