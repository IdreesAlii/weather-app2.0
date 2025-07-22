import React from 'react'

export const WeatherCard = ({ weather}) => {
  return (
    <div className='mt-6'>
      <h2 className=' mt-6 text-2xl font-semibold text-center'>
        {weather.name}, {weather.sys.country}
      </h2>
      <div className='flex justify-center items-center mt-4'>
        <img src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
         alt={weather.weather[0].description}
         className='w-16 h-17' />
         <p className='text-4xl font-bold'>
          {Math.round(weather.main.temp)}°C
         </p>
      </div>
      <p className='text-xl text-center text-gray-100 capitalize'>
        {weather.weather[0].description}
        </p>
        <div className='grid grid-cols-2 gap-4 mt-6'>
          <div className='text-center'>
            <p className='text-xl text-gray-400'>
              Humidity
            </p>
            <p className='text-xl font-bold'>
              {weather.main.humidity} %
            </p>
          </div>
          <div className='text-center'>
            <p className='text-xl text-gray-400'>
              Wind
            </p>
            <p className='text-xl font-bold'>
              {weather.wind.speed} m/s
            </p>
          </div>
          <div className='text-center'>
            <p className=' text-xl text-gray-400'>
              Pressure
            </p>
            <p className='text-xl font-bold'>
              {weather.main.pressure} hPa
            </p>
          </div>
          <div className='text-center'>
            <p className='text-xl text-gray-400'>
              Feels like
            </p>
            <p className='text-xl font-bold'>
              {Math.round(weather.main.feels_like)}°C
            </p>
          </div>
        </div>
    </div>
  )
}
