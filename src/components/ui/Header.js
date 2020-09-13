import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";
//import Typography from "@material-ui/core/Typography";
import {makeStyles} from "@material-ui/styles";

//My Assets
import logo from "../../assets/logo.svg";

const useStyles = makeStyles(theme => ({  //our own custom in-line style object.
    toolbarMargins: {
        ...theme.mixins.toolbar,   //fix toolbar issues with having elements beneath it
        marginBottom: "2.2em"
    },
    logo: {
        height: "6em"
    },
    tabContainer: {
        marginLeft: "auto"
    },
    tab: { 
        ...theme.typography.tab,  // we can use the spread operator to extend from our theme
        textTransform: "none",
    }
}));


function Header() {


    const classes = useStyles();


    return (
      <React.Fragment>  
        <AppBar color="primary">
            <Toolbar position="fixed" disableGutters={true}> 
                <img alt="logo" className={classes.logo} src={logo}/>
                <Tabs className={classes.tabContainer}>
                    <Tab className={classes.tab} label="Home" />
                    <Tab className={classes.tab} label="Services" />
                    <Tab className={classes.tab} label="The Revolution" />
                    <Tab className={classes.tab} label="About us" />
                    <Tab className={classes.tab} label="Contact us" />
                </Tabs>
            </Toolbar>
        </AppBar>
        <div className={classes.toolbarMargins}/>
     </React.Fragment>  
        
    );
}

export default Header;