import React from "react";
import { useScrollTrigger } from "@mui/material";

const ScrollHandler = props => {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: props.window ? window() : undefined
  });

  return React.cloneElement(props.children, {
    style: {
      
      backgroundColor: trigger ? "#373737" : "#FFFFFF",
      transition: trigger ? "0.3s" : "0.5s",
      color:trigger ? "#FFFFFF" : "#000000",
      opacity: trigger ? "100% ":"100%",
      border: "1px solid #000000",
      borderRadius : "10px",
      height: "2.5rem",
      width: "200px",
      justifyContent: "left",
      marginTop: "6px",
      marginRight: "14px",
      borderColor: "#5C5A5A",
    }
  });
};

const Searchcolor = props => {
  return <ScrollHandler {...props}>{props.children}</ScrollHandler>;
};

export default Searchcolor;