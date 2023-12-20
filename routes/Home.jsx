import {useState, useRef, useEffect} from 'react'
import axios from 'axios';
import WeatherData from '../components/WeatherData';
import { FaSearch } from "react-icons/fa";
import "./Home.css"
import WeekWeatherData from '../components/WeekWeatherData';
import Loader from '../components/Loader';
import Switch from '../components/Switch';
import Header from '../components/Header';
import Population from '../components/Population';
import SunRiseSet from '../components/SunRiseSet';


const api_key = import.meta.env.VITE_API_KEY
const url_forecast = "https://api.openweathermap.org/data/2.5/forecast?q="

const Home = () => {
	const formRef = useRef();
	const [weather, setWeather] = useState([]);
	const [loading, setLoading] = useState(null)
	
	const getWeather = async () => {
		setWeather([])
		setLoading("")

		const formData = formRef.current;
		
		try {
			
			setLoading("loading")
			const res = await axios.get(`${url_forecast}${formData.search.value}&appid=${api_key}&units=metric&lang=pt_br`);
			setWeather([res.data]);
			setLoading("loaded")
			
			console.log(res.data)
		} catch (error) {
			
			setLoading("error")
			console.log(error);
		}
		
		
	};
	
	const handleSubmit = async (e) => {
		e.preventDefault();
		
		const formData = formRef.current;
		
		if (
			!formData.search.value
			) {
				return console.log("Preencha todos os campos");
			}

			getWeather()
		}
		
		useEffect(() => {
			const formData = formRef.current;
			formData.search.value=""
			
		},[weather])
		
		return (
			<div className="container">
				<form ref={formRef} onSubmit={handleSubmit} className="form">

				<Header />
				<div className="search-container">
					<input type="text" name="search" placeholder="Pesquisar..."></input>
					<button type="submit"><FaSearch className="search-icon"/></button>
				</div>

				<div className="weather-container">
					{	
						// weather.length === 0 ? <Loader /> : 
						loading === "" ? <p></p> :
						loading === "error" ? <p>Não foi possível consultar o termo digitado.</p> :
						loading === "loading" ? <Loader /> :
						weather && <WeatherData weather={weather}/>
					}
				</div>


				{weather && <WeekWeatherData weather={weather}/>}
				{weather && <SunRiseSet weather={weather}/>}
				{weather && <Population weather={weather}/>}
				


				
				</form>	
				
				

			</div>
			
					
			
			)
		}
		
		export default Home