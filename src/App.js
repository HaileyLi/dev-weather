import React, { useState, useEffect } from 'react';
import WeatherTable from './Components/WeatherTable.jsx';
import Loading from './Components/Loading.jsx';

// import weather api
const api = {
  key: "330654833734435416e3ac946d2be83e",
  base: "https://api.openweathermap.org/data/2.5/"
}

// main App component
function App() {
  // To add more cities in future, push more elements in cityList
  const cityList = ["Sydney", "Melbourne", "Wollongong"]

  // react hook
  const [city, setCity] = useState(cityList[0]);
  const [weather, setWeather] = useState({});
  const [loading, setLoading] = useState(true);

  // use to fetch Data, work as componentDidMount
  useEffect(() => {
    getWeather(city)
  }, [])

  // fetch data
  const getWeather = (city) => {
    fetch(`${api.base}weather?q=${city}&units=metric&APPID=${api.key}`)
      .then(res => res.json())
      .then(result => {
        setWeather(result);
        setCity('');
        setLoading(false);
        console.log(result);
      });
  }

  // handle select change
  const handleCityChange = (e) => {
    setCity(e.target.value)
    setLoading(true)
    getWeather(e.target.value)
  }

  // dom render
  return (
    <React.Fragment>
      <select onChange={e => handleCityChange(e)}>
        {cityList.map((item, i) =>
          <option value={item} key={"key" + i}>{item}</option>)}
      </select>
      {loading ?
        <Loading /> :
        <WeatherTable weather={weather} />
      }

    </React.Fragment>
  );
}

export default App;
