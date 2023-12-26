import "./Footer.css"
import Sun from "../images/Sun.svg"
import Bird from "../images/background-footer-birds.svg"
import { MdKeyboardArrowUp } from "react-icons/md"


const Footer = () => {

	const topFunction = () => {
		document.body.scrollTop = 0
		document.documentElement.scrollTo(
		  {
			top: 0,
			behavior: "smooth"
		  }
		)
	  }

	return (
		<div className="footer-container">
			<div className="sun-container">

				<img className="footer-sun" src={Sun}/>
				<p id="btnTop" className="btn-top" onClick={() => topFunction()}><MdKeyboardArrowUp className="arrow-up"/>Voltar ao Topo</p>
				<img className="footer-bird" src={Bird}/>
							
			</div>
			
		</div>
		)
	}
	
	export default Footer