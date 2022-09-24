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
      stroke: trigger ? "#FFFFFF" : "#373737",
    }
  });
};

const Iconcolor = props => {
  return <ScrollHandler {...props}>{props.children}</ScrollHandler>;
};

export default Iconcolor;
