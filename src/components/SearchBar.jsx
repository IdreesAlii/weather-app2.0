import React, { useState, useEffect } from 'react';

const SearchBar = ({ fetchWeather }) => {
  const [city, setCity] = useState("");
  const [glow, setGlow] = useState(true); // start with glow on

  // Stop the glow after 5 seconds when the component mounts
  useEffect(() => {
    const timer = setTimeout(() => setGlow(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (city.trim()) {
      fetchWeather(city);
      setCity('');
    }
  };

  return (
    <form className="flex" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter City Name"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        className={`
          flex-1
          p-3
          border-2
          border-blue-500
          outline-none
          transition-shadow
          duration-500
          w-80
          max-w-full
          rounded-l-full
          border-r-0
          mr-1
          ${glow ? 'shadow-[0_0_15px_3px_rgba(59,130,246,0.7)]' : 'shadow-none'}
        `}
      />
      <button
        type="submit"
        className="bg-blue-500
          border
          cursor-pointer
          p-3
          hover:bg-blue-600
          flex
          items-center
          justify-center
          font-medium
          rounded-r-full
          border-l-0
          transition-colors
          duration-300
          ease-in-out
          shadow-md
          outline-none
        "
      >
        Search
      </button>
    </form>
  );
};

export default SearchBar;
