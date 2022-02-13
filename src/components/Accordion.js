import { React, useState } from "react";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { useSpring, animated } from "react-spring";

function Accordion(props) {
  const [open, setOpen] = useState(false);
  //toggle accordion function
  let toggleHandler = (e) => {
    //switch state
    setOpen(!open);
  };

  //conditional styling
  const styles = {
    //if open is true, change color of title
    accordionTitle: {
      color: open ? "#10d6f5" : "#000"
    }
  };
  //open animation with react spring

  const openAnimation = useSpring({
    from: { opacity: "0", maxHeight: "25px" },
    to: { opacity: "1",marginBottom: "0px",marginTop: "0px", maxHeight: open ? "800px" : "25px" },
    config: { duration: "300" }
  });
  

 
  return (<div>
            

    <animated.div className="accordion__item" style={openAnimation}>
      <div className="accordion__header" onClick={toggleHandler}>
        <p style={styles.accordionTitle} className="title2">{props.title}</p>
          <ExpandMoreIcon className="i" />
      </div>
      <p className="accordion__content">{props.text}</p>
    </animated.div>
    </div>
  );
}

export default Accordion;
