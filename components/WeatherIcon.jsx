import "./WeatherIcon.css"

const WeatherIcon = ({icon}) => {
  return (
    <img src={`https://openweathermap.org/img/wn/${icon}@2x.png`}/>
  )
}

export {WeatherIcon}