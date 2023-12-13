import "./WeatherIcon.css"

const WeatherIcon = ({icon, size}) => {
  if (size == 'max') {
    return (
      <img className="maxIcon" src={`https://openweathermap.org/img/wn/${icon}@2x.png`}/>
    )
  }
  if (size == 'min') {
  return (
    <img className="minIcon" src={`https://openweathermap.org/img/wn/${icon}@2x.png`}/>
  )
}
}

export {WeatherIcon}