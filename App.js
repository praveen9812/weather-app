import React, { useState } from 'react';
const api= {
  key: "2452a691d278b86d6559812ad685b91c",
  base: "https://api.openweathermap.org/data/2.5/"
}
function App() {
 
  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({});

  const search = evt => {
    if (evt.key === "Enter") {
      fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
        .then(res => res.json())
        .then(result => {
          setWeather(result);
          setQuery('');
          console.log(result);
        });
    }
  }

const dateBuilder=(d)=>{
  let months=["January","February","March","April","May","June","July",
  "August","September","October","November","December"];
  let days=["Monday", "Tuesday", "Wednesday",
  "Thursday", "Friday", "Saturday", "Sunday"];
let day = days[d.getDay()];
let date = d.getDate();
let month = months[d.getMonth()];
let year = d.getFullYear();
return `${day} ${date} ${month} ${year}`

}


  return (
 <div className={(typeof weather.main != "undefined") ? ((25> weather.main.temp>5 ) ? 'app warm' :(weather.main.temp > 25) ?'app warm1' :(weather.weather[0].main=="Rain" ) ?'app cold':'app') : 'app'}>
         <main>
        <div className ="search-box">
          <input  
          type="text"
          className="search-bar"
          placeholder="Search..."
          onChange={e => setQuery(e.target.value)}
          value={query}
          onKeyPress={search}
          />
        </div>
        {(typeof weather.main != "undefined") ?(
          <div>
        
        <div className="location-box">
          <div className="location"> {weather.name}, {weather.sys.country}</div>
          <div className="date"> {dateBuilder(new Date())}</div>
           </div>
           <div className=" weather-box">
             <div className="temp">
             {Math.round(weather.main.temp)}°c  
             </div>
             
             <div className="weather">{weather.weather[0].main}             
              <img src ={`http://openweathermap.org/img/w/${weather.weather[0].icon}.png`} alt="wthr img" />
            </div>

             <div className="weather1"> {weather.weather[0].description} </div>
             <div className="data">
             <table >
         <tr>
            <td>Sea level</td>
            <td> {weather.main.sea_level}</td>
         </tr>
         
      
         <tr>
            <td>Pressure</td>
            <td> {weather.main.pressure}</td>
         </tr>
         <tr>
            <td>Humidity</td>
            <td>{weather.main.humidity}</td>
         </tr>
         <tr>
            <td>Wind speed</td>
            <td>{weather.wind.speed}</td>
         </tr>
      </table>
              </div>
           </div>
           </div>
           
           
        ):('')} 
      </main>
    </div>
  );
}

export default App;
