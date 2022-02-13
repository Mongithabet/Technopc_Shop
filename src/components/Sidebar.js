import { React, useState } from "react";
import '../components/css/Sidebar.css'
import Accordion from "./Accordion.js";
import { useSpring, animated } from "react-spring";
import FilterList from "@material-ui/icons/FilterList";


export default function Sidebar(props) {
  const [open, setOpen] = useState(true);
  //toggle accordion function
  let toggleHandler = (e) => {
    //switch state
    setOpen(!open);
  };

  //conditional styling
  
  //open animation with react spring

  const openAnimation = useSpring({
    from: { opacity: "0", maxHeight: "25px" },
    to: { opacity: "1", marginBottom: "0px",marginTop: "0px",maxHeight: open ? "500px" : "25px" },
    config: { duration: "300" }
    
  });
    


    return ( <div className="box-accordion">
    
      <animated.div className="accordion__item" style={openAnimation}>
                
                 <div className='filter' onClick={toggleHandler} ><strong >Filtrer
                    <FilterList className="filter-icon"/>
                  </strong></div> 
      
      <Accordion 
        title="CATÉGORIE"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"
      />
      <Accordion
        title="MARQUE"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"
      />
      <Accordion
        title="PRIX"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"
      />
      <Accordion 
        title="GAMER"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"
      />
   <Accordion 
        title="TAILLE DE L'ÉCRAN"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"
      />
       <Accordion 
        title="SYSTÈME D'EXPLOITATION"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"
      />
       <Accordion 
        title="PROCESSEUR"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"
      />
       <Accordion 
        title="ECRAN TACTILE"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"
      />
       <Accordion 
        title="MÉMOIRE"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"
      />
       <Accordion 
        title="DISQUE DUR"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"
      />
       <Accordion 
        title="CARTE GRAPHIQUE"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"
      />
       <Accordion 
        title="CHIPSET GRAPHIQUE"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"
      />
       <Accordion 
        title="ECRAN"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"
      />
       <Accordion 
        title="GARANTIE"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"
      />
       <Accordion 
        title="DISPONIBILITÉ"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"
      />
       <Accordion 
        title="PROMOTION"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"
      />

                  </animated.div>
<div className="over"></div>
   
                  </div>


    )
}
