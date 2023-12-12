import {useState, useRef, useEffect} from 'react'
import axios from 'axios';
import WeatherData from '../components/WeatherData';
import { FaSearch } from "react-icons/fa";
import "./Home.css"

const api_key = import.meta.env.VITE_API_KEY
const url_forecast = "https://api.openweathermap.org/data/2.5/forecast?q="

const Home = () => {
	const formRef = useRef();
	const [weather, setWeather] = useState([]);
	
	const getWeather = async () => {
		const formData = formRef.current;

    try {

      const res = await axios.get(`${url_forecast}${formData.search.value}&appid=${api_key}&units=metric&lang=pt_br`);
      setWeather([res.data]);

		console.log(res.data)
    } catch (error) {
			
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

	},[getWeather])

	return (
		
			<form ref={formRef} onSubmit={handleSubmit}>

				<div className="search-container">
					<input type="text" name="search" placeholder="Pesquisar..."></input>
					<button type="submit"><FaSearch className="search-icon"/></button>
				</div>
					
				{weather && <WeatherData weather={weather}/>}
			</form>			

		)
	}
	
	export default Home