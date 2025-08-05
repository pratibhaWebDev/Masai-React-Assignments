import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const WeatherDetails = () => {
  const { city } = useParams();
  const [data, setData] = useState(null);
  const [error, setError] = useState('');

  const weatherKey = import.meta.env.VITE_WEATHER_API_KEY;
  const mapKey = import.meta.env.VITE_GOOGLE_MAP_API_KEY;

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        setError('');
        const res = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${weatherKey}&units=metric`
        );
        setData(res.data);
      } catch (err) {
        setError('City not found');
        setData(null);
      }
    };
    fetchWeather();
  }, [city]);

  return (
    <div className="p-4">
      <h2>Weather for {city}</h2>
      {error && <p>{error}</p>}
      {data && (
        <div>
          <p>🌡 Temperature: {data.main.temp}°C</p>
          <p>💧 Humidity: {data.main.humidity}%</p>
          <p>🌥 Condition: {data.weather[0].description}</p>

          <iframe
            title="Google Map"
            width="100%"
            height="300"
            loading="lazy"
            allowFullScreen
            src={`https://www.google.com/maps/embed/v1/place?key=${mapKey}&q=${city}`}
          ></iframe>
        </div>
      )}
    </div>
  );
};

export default WeatherDetails;
