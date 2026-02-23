import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";
export default function WeatherApp() {
    const [weatherInfo, setWeatherInfo] = useState({
        city: "delhi",
        temp: 26.05,
        tempMin: 25.05,
        tempMax: 25.05,
        feelsLike: 24.84,
        humidity: 47,
        weather: "cloud"
    });
    let updateInfo = (newInfo) => {
        setWeatherInfo(newInfo);
    }

    return (
        <div style={{ textAlign: "center" }}>
            <h2 style={{ color: "#0f172a" }}>Weather App </h2>
            <InfoBox info={weatherInfo} />
            <SearchBox updateInfo={updateInfo} />

        </div>
    );
}