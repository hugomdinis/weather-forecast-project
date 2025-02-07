import React,{ useEffect, useState }from "react";
import Map, { Source, Layer, PaddingOptions } from "react-map-gl/maplibre";
import "maplibre-gl/dist/maplibre-gl.css";
import {MapWrapper} from "./WeatherMapStyle";

interface WeatherMapProps {
  lat: number;
  lon: number;
}

const mapStyleUrl = "https://basemaps.cartocdn.com/gl/voyager-gl-style/style.json";

export const WeatherMap: React.FunctionComponent<WeatherMapProps> = ({ lat, lon }) => {
  const openWeatherApiKey = import.meta.env.VITE_WEATHER_API_KEY;

  const defaultPadding: PaddingOptions = {
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  };


  //Initial map state
  const [viewState, setViewState] = useState({
    longitude: lon,
    latitude: lat,
    zoom: 11,
    bearing: 0,
    pitch: 20,
    padding: defaultPadding,
  });

  //Dar update ao mapa quando a localização muda
  useEffect(() => {
    setViewState((prev) => ({
      ...prev,
      longitude: lon,
      latitude: lat,
      zoom: 11,
      pitch: 20,
    }));
  }, [lat, lon]);

  return (
    <MapWrapper>
      <Map
        {...viewState}
        onMove={(evt) => setViewState(evt.viewState)} //Permitem que o mapa seja movido
        style={{ width: "100%", height: "100%" }}
        mapStyle={mapStyleUrl}>

        <Source
          id="temperature"
          type="raster"
          tiles={[
            `https://tile.openweathermap.org/map/temp_new/{z}/{x}/{y}.png?appid=${openWeatherApiKey}`,
          ]}
          tileSize={256}
        >
          <Layer id="temperature-layer" type="raster" paint={{}} />
        </Source>
      </Map>
    </MapWrapper>
  );
};
