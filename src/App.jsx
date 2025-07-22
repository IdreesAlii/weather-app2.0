import { useState } from 'react'
import SearchBar from './components/SearchBar'
import axios from 'axios';
import  { WeatherCard }  from './components/WeatherCard';
import video from './video.mp4';


function App() {
  const [weather, setweather] = useState(null);
  const [loading, setloading] = useState(false);
  const [error, seterror] = useState("");

  const API_KEY = import.meta.env.VITE_API_KEY;
  const API_URL = `https://api.openweathermap.org/data/2.5/weather`;

  const fetchWeather = async (city) => {
    setloading(true);
    seterror('');
    try {
      const url = `${API_URL}?q=${city}&units=metric&appid=${API_KEY}`;
      const response = await axios.get(url);
      console.log(response.data);
      setweather(response.data);

    } catch (error) {
      if (error.response && error.response.status === 404) {
        seterror('City not found. Please try again.')
      } else {
        seterror("An error occured. Please try again later.")
      }
      setweather(null);
    } finally {
      setloading(false);
    }
    

  };

  return (

    <div className='min-h-screen flex flex-col items-center justify-center bg-blue-100
    relative overflow-hidden '>
      <video className='absolute
       top-0 left-0 w-full h-full
        object-cover' autoPlay loop muted>
        <source src={video} type='video/mp4' />
        Your browser does not support the video tag
      </video>
      <div className='absolute top-0 left-0
      w-full h-full bg-black/15 z-1'></div>
      <div className='bg-black/70 text-blue-100 rounded-lg shadow-lg p-8 max-w-lg w-full
      z-10'>
        <h1 className="text-5xl font-bold text-center mb-5 bg-gradient-to-r from-sky-500 to-indigo-500 bg-clip-text text-transparent">
          Weather App
        </h1>
        <p className=" text-xl mt-4 mb-6 text-blue-200 text-center">
          Get real-time weather updates in your city
        </p>
        <SearchBar fetchWeather=
        {fetchWeather} />
        {loading && <p className="text-blue-300 mt-4 text-center">Loading...</p>}
        {error && <p className="text-red-400 mt-4 text-center">{error}</p>}
        {weather && <WeatherCard weather={weather} />}

      </div>
    </div>
  )
}

export default App
