import {WeatherIcon} from "./WeatherIcon"
import "./WeatherData.css"
import {Temperature, Capitalize, DateTime} from "../utils/Format"
import { FaWind } from "react-icons/fa";
import { FaDroplet } from "react-icons/fa6";

const Weather = ({weather}) => {

	return (
		<div>
		{weather && weather.map((data) => (

				<div key={data.city.id}>
					<div className="weather-fade-in">
					<div className="container_city_name_temp">
						<p className="city-name">{data.city.name}</p>
						<div className="temp_max_min">
							<p>max.</p>
							<p>min.</p>
						</div>
						<div className="max-min">
							<p>{Temperature(data.list[0].main.temp_max)}</p>
							<p>{Temperature(data.list[0].main.temp_min)}</p>
						</div>		
					</div>
					<div className="main_temp_container">
						<WeatherIcon icon = {data.list[0].weather[0].icon} size = 'max'/>
						<div className="description">
							<p className="main_temp_font">{Temperature(data.list[0].main.temp)}</p>
							<p className="main_temp_description">{Capitalize(data.list[0].weather[0].description)}</p>	
						</div>
					</div>
					<div className="informations">
						<p className="inf_icon"><FaDroplet />{data.list[0].main.humidity}%</p>
						<p className="inf_icon"><FaWind />{data.list[0].wind.speed} km/h</p>
					</div>
					<p className="date-time">Data da consulta: {DateTime()}</p>
					</div>	
					
				</div>
				
		))}
		
		</div>

	)
}
		
export default Weather