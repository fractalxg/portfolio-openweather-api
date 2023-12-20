import "./SunRiseSet.css"

const SunData = ({data}) => {
	
	const timestamp = data
	const date = new Date(timestamp * 1000)
	const formattedDate = date.toLocaleTimeString()

	return (
		<p className="sunrise-data">{formattedDate}</p>
	)
}

const SunRiseSet = ({weather}) => {
	return (
		<div>
			{weather && weather.map((data) => (
          <div key={data.city.id}>
						<div className="sunriseset-container">
							<div className="sunrise">
							<p className="sunrise-text">Nascer do Sol</p>
							<SunData data={data.city.sunrise}/>
							</div>
							<div className="sunset">
							<SunData data={data.city.sunset}/>
							<p className="sunset-text">Pôr do Sol</p>
							</div>
						
						</div>
						
					</div>
				))}
		</div>
		)
	}
	
	export default SunRiseSet