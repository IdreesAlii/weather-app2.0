import React, { useState } from 'react'

const SearchBar = ({ fetchWeather }) => {
  const [city, setCity] = useState(""); 

  const handleSubmit = (e) => {
    e.preventDefault();
    if(city.trim()) {
      fetchWeather(city)
      setCity('');
    }
  }


  return (
   <form className='flex' onSubmit={handleSubmit}>
    <input
      type="text"
      placeholder='Enter City Name'
      value={city}
      onChange={(e) => setCity(e.target.value)} 
      className="
          flex-1
          glow-pulse
          p-3
          border-2
          border-blue-500
          outline-none
          shadow-lg
          transition
          duration-300
          focus:ring-4
          focus:ring-blue-400
          focus:ring-opacity-60
          w-80
          max-w-full
          rounded-l-full border-r-0
          mr-1
        "
    />
    <button
     type='submit'
     className="bg-blue-500
     border cursor-pointer p-3 hover:bg-blue-600
     flex items-center justify-center
     font-medium rounded-r-full border-l-0
     transition-colors duration-300 ease-in-out
     shadow-md
     hover:glow-pulse focus:glow-pulse outline-none
     "
     >
      Search
    </button>
  </form>
  );
};

export default SearchBar;