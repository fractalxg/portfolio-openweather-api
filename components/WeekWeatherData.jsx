import {Temperature} from "../utils/Format"
import {WeatherIcon} from "./WeatherIcon"
import "./WeekWeatherData.css"

const WeekWeatherData = ({weather}) => {
  return (
    <div>
      
        {weather && weather.map((data) => (
          <div key={data.city.id}>
            <div className="week-weather-fade-in">
              <WeatherIcon icon={data.list[8].weather[0].icon} size = 'min'/>
            </div>
            
          </div>
        ))}
        
    </div>
  )
}

export default WeekWeatherData