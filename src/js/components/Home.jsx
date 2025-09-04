import React, {useState} from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import { Contador } from "../Contador";

//create your first component
const Home = () => {

	// const [luzAmarillo, setLuzAmarillo] = useState(false)
	// const [luzRoja, setLuzRoja] = useState(false)
	const [luz, setLuz] = useState("verde" ,"roja", "amarillo")
	// const [interruptor, setInterruptor] = useState()



	// cuando pulse el boton, quiero button tenga la clase de luzVerdeActive y cuando pulse de nuevo, quiero que tenga la clase de luzVerde
	// cuando interruptor sea false, quiero que las demas luces se apaguen, 

	return (
	<div className="padre z-0">
		<p><Contador></Contador></p>
		<div className="paloSemaforo"></div>
		<div className="gorraSemaforo"></div>
		<div className="d-flex align-items-center flex-column gap-3 estiloFondoSemaforo">
			<div>
				{ luz == "verde" ?
				
				<button className="luzVerdeActive" onClick={()=>{
					setLuz(null)
					console.log(luz)
				}}></button>	
				:
				<button className="luzVerde" onClick={()=>{
					setLuz("verde")
					console.log(luz)
				}}></button>	
			}
			</div>

			<div>
				{ luz == "roja" ?
				
				<button className="luzRojaActive" onClick={()=>{
					setLuz(null)
					console.log(luz)
				}}></button>	
				:
				<button className="luzRoja" onClick={()=>{
					setLuz("roja")
					console.log(luz)
				}}></button>	
			}
			</div>

			<div>
				{ luz == "amarillo" ?
				
				<button className="luzAmarillaActive" onClick={()=>{
					setLuz(null)
					console.log(luz)
				}}></button>	
				:
				<button className="luzAmarilla" onClick={()=>{
					setLuz("amarillo")
					console.log(luz)
				}}></button>	
			}
			</div>




		</div>
	</div>
			
	);
};

export default Home;