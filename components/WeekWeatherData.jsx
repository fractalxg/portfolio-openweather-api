import {Temperature, DayToWeek, DayToDay} from "../utils/Format"
import {WeatherIcon} from "./WeatherIcon"
import "./WeekWeatherData.css"

const WeekWeatherData = ({weather}) => {
  return (
    <div>
      
        {weather && weather.map((data) => (
          <div key={data.city.id}>
            <div className="week-weather-fade-in">
              <div className="week-weather">

                <div className="days">
                  <p className="border-true">{DayToWeek(data.list[8].dt_txt)} {DayToDay(data.list[8].dt_txt)}</p>
                  <div className="weather">
                   <WeatherIcon icon={data.list[8].weather[0].icon} size = 'min'/>
                  <div className="temp">
                    <p className="border-true">max. {Temperature(data.list[8].main.temp_max)}</p>
                    <p>min. {Temperature(data.list[8].main.temp_min)}</p>
                  </div>
                  </div>
                </div>

                <div className="days">
                  <p className="border-true">{DayToWeek(data.list[16].dt_txt)} {DayToDay(data.list[16].dt_txt)}</p>
                  <div className="weather">
                   <WeatherIcon icon={data.list[16].weather[0].icon} size = 'min'/>
                  <div className="temp">
                    <p className="border-true">max. {Temperature(data.list[16].main.temp_max)}</p>
                    <p>min. {Temperature(data.list[16].main.temp_min)}</p>
                  </div>
                  </div>
                </div>

                <div className="days">
                  <p className="border-true">{DayToWeek(data.list[24].dt_txt)} {DayToDay(data.list[24].dt_txt)}</p>
                  <div className="weather">
                   <WeatherIcon icon={data.list[24].weather[0].icon} size = 'min'/>
                  <div className="temp">
                    <p className="border-true">max. {Temperature(data.list[24].main.temp_max)}</p>
                    <p>min. {Temperature(data.list[24].main.temp_min)}</p>
                  </div>
                  </div>
                </div>

                <div className="days">
                  <p className="border-true">{DayToWeek(data.list[32].dt_txt)} {DayToDay(data.list[32].dt_txt)}</p>
                  <div className="weather">
                   <WeatherIcon icon={data.list[32].weather[0].icon} size = 'min'/>
                  <div className="temp">
                    <p className="border-true">max. {Temperature(data.list[32].main.temp_max)}</p>
                    <p>min. {Temperature(data.list[32].main.temp_min)}</p>
                  </div>
                  </div>
                </div>

                <div className="days">
                  <p className="border-true">{DayToWeek(data.list[39].dt_txt)} {DayToDay(data.list[39].dt_txt)}</p>
                  <div className="weather">
                   <WeatherIcon icon={data.list[39].weather[0].icon} size = 'min'/>
                  <div className="temp">
                    <p className="border-true">max. {Temperature(data.list[39].main.temp_max)}</p>
                    <p>min. {Temperature(data.list[39].main.temp_min)}</p>
                  </div>
                  </div>
                </div>
                
              </div>
              
            </div>
            
          </div>
        ))}
        
    </div>
  )
}

export default WeekWeatherData