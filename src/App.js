import ProfileCard from "./components/ProfileCard";
import Alexaimg from "./imagenes/Rx.jpg";
import Siriimg from "./imagenes/Control.jpg";
import Cortanaimg from "./imagenes/Placa.jpg";

import "bulma/css/bulma.css";
import NavBar from "./components/Navbar";
import ItemListContainer from "./components/ItemListContainer";
import { IoCart } from "react-icons/io5";

function App(){
  //primer enfoque pero no muy bien laburado, queda muy extenso  
    return (

        <div>
            <section className="hero is-success">
                <div className="hero-body">
                    <h1 className="title">Bienvenidos a TAKE IT </h1>
                </div>
            </section>
        <div>
        <NavBar> </NavBar>    
        <ItemListContainer greeting></ItemListContainer>
        </div>
        
            <div className="container">
                <div className="columns">
                    <div className="column is-4">
                    <ProfileCard titulo= "Receptor" arroba= "@Alexa22" img={Alexaimg}/>  
                    </div>
                    <div className="column is-4">
                    <ProfileCard titulo= "Central Electronica" arroba= "@Cortana66" img={Cortanaimg}/>  
                    </div>
                    <div className="column is-4">
                    <ProfileCard titulo= "Control Remoto" arroba= "@Siri77" img={Siriimg}/>  
                    </div>
                </div>

            </div>
         
        </div>
    )
}




export default App;