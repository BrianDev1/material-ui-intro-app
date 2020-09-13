import React from "react";
import Lottie from "react-lottie";
import {makeStyles} from "@material-ui/core/styles";

import animationsData from "../animations/landinganimation/data";

const useStyles = makeStyles(theme => ({  //custom styles object

}));



export default function LandingPage() {

    const classes = useStyles(); //custom style object

    const defaultOptions = {
        loop:true,
        autoPlay: true,
        animationData: animationsData,
        rendererSettings: {
            preserveApsectratio: 'xMidYMid slice'
        }
    }


    return(
        <Lottie options={defaultOptions} height={"100%"} width={"100%"}/>
    );

}