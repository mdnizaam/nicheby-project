import React from "react";
import { useScrollTrigger } from "@mui/material";
import { ClassNames } from "@emotion/react";

const ScrollHandler = props => {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: props.window ? window() : undefined
  });

  return React.cloneElement(props.children, {
    style: {
      backgroundColor: trigger ? "#494949" : "#FFFFFF",
      transition: trigger ? "0.3s" : "0.5s",
      color: trigger ? "#FFFFFF" : "#000000",
      border: trigger ? "1px solid #FFFFFF" : "1px solid #000000",
      borderRadius: "8px",
      marginRight: "4500px",
    }
  });
};

const Titlecolor = props => {
  return <ScrollHandler {...props}>{props.children}</ScrollHandler>;
};

export default Titlecolor;
