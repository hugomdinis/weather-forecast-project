import axios from "axios";

const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
const BASE_URL = "https://api.openweathermap.org/data/2.5/forecast";

// Definir interfaces para os dados recebidos da API
interface WeatherEntry {
  dt_txt: string;
  main: {
    temp: number;
  };
  weather: {
    description: string;
    icon: string;
  }[];
}

interface WeatherResponse {
  city: {
    name: string;
    country: string;
  };
  list: WeatherEntry[];
}

export const getWeather = async (city: string) => {
  try {
    const response = await axios.get(`${BASE_URL}?q=${city}&appid=${API_KEY}&units=metric`);
    
    // Especificar que response.data segue a interface WeatherResponse
    const data = response.data as WeatherResponse;
    const forecastData = data.list;

    // Criar um objeto para armazenar previsões diárias
    const dailyForecast: Record<string, { date: string; temperature: number; weather: string; icon: string }> = {};

    forecastData.forEach((entry: WeatherEntry) => {
      const date = entry.dt_txt.split(" ")[0]; // YYYY-MM-DD
      
      // Seleciona apenas a previsão das 12:00
      if (entry.dt_txt.includes("12:00:00")) {
        dailyForecast[date] = {
          date,
          temperature: entry.main.temp,
          weather: entry.weather[0].description,
          icon: entry.weather[0].icon,
        };
      }
    });

    return {
      city: data.city,
      forecast: Object.values(dailyForecast), // Retorna um array com previsões diárias
    };

  } catch (error: any) {
    console.error("Erro ao buscar dados:", error.response ? error.response.data : error.message);
    throw new Error(error.response?.data?.message || "Erro ao buscar os dados.");
  }
};
