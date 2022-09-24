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
        border: "2px solid",
        borderRightWidth: "1px",
        borderLeftWidth: "0px",
        borderTopWidth: "0px",
        borderBottomWidth: "0px",
        marginRight: "7px",
        borderColor: trigger ? "#FFFFFF" : "#5E5E5E",
    }
  });
};

const Dividercolor = props => {
  return <ScrollHandler {...props}>{props.children}</ScrollHandler>;
};

export default Dividercolor;
