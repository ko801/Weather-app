import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import SunnyIcon from '@mui/icons-material/Sunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import "./InfoBox.css";

export default function InfoBox({ info }) {
    const HOT_URL =
        "https://plus.unsplash.com/premium_photo-1673264933056-8f2f9c87742f?q=80&w=687&auto=format&fit=crop";
    const COLD_URL =
        "https://plus.unsplash.com/premium_photo-1669050065747-53252b7d22a1?q=80&w=1074&auto=format&fit=crop";
    const RAIN_URL =
        "https://images.unsplash.com/photo-1679597454545-a904443e9f2f?q=80&w=1321&auto=format&fit=crop";

    return (
        <div className="InfoBox">
            <div className="info-wrapper">
                <Card className="weather-card" sx={{ maxWidth: 345 }}>
                    <CardMedia
                        className="weather-image"
                        sx={{ height: 140 }}
                        image={
                            info.humidity > 80
                                ? RAIN_URL
                                : info.temp > 15
                                    ? HOT_URL
                                    : COLD_URL
                        }
                        title="weather image"
                    />
                    <CardContent className="weather-content">
                        <Typography
                            gutterBottom
                            variant="h5"
                            component="div"
                            className="city-name"
                        >
                            {info.city}
                            {info.humidity > 80 ? (
                                <ThunderstormIcon className="weather-icon" />
                            ) : info.temp > 15 ? (
                                <SunnyIcon className="weather-icon" />
                            ) : (
                                <AcUnitIcon className="weather-icon" />
                            )}
                        </Typography>

                        <Typography
                            variant="body2"
                            sx={{ color: 'text.secondary' }}
                            component="div"
                            className="weather-details"
                        >
                            <p>Temperature: {info.temp}°C</p>
                            <p>Min Temp: {info.tempMin}°C</p>
                            <p>Max Temp: {info.tempMax}°C</p>
                            <p>Humidity: {info.humidity}%</p>
                            <p>Feels Like: {info.feelsLike}°C</p>
                        </Typography>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
