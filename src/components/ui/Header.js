import React, {useState} from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";
import Button from "@material-ui/core/Button";
//import Typography from "@material-ui/core/Typography";
import {makeStyles} from "@material-ui/styles";
import {Link} from "react-router-dom";


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
    },
    button: {
        ...theme.typography.estimateButton,
        borderRadius: "50px",
        marginLeft: "50px",
        marginRight: "25px",
        color: "white"
    }
}));


function Header() {


    const classes = useStyles();
    const [tabsValue, setTabsValue] = useState(0);

  


    function handleTabChange(event, value) {   
        setTabsValue(value);
    }


    return (
      <React.Fragment>  
        <AppBar color="primary">
            <Toolbar position="fixed" disableGutters={true}> 
                <img alt="logo" className={classes.logo} src={logo}/>
                <Tabs value={tabsValue} onChange={handleTabChange} className={classes.tabContainer} indicatorColor="secondary">
                    <Tab disableRipple className={classes.tab} component={Link} to="/" label="Home" />
                    <Tab className={classes.tab} component={Link} to="/Services" label="Services" />
                    <Tab className={classes.tab} component={Link} to="/TheRevolution" label="The Revolution" />
                    <Tab className={classes.tab} component={Link} to="/About" label="About us" />
                    <Tab className={classes.tab} component={Link} to="/Contact" label="Contact us" />
                    <Button variant="contained" className={classes.button} color="secondary">Free Estimate</Button>
                </Tabs>
            </Toolbar>
        </AppBar>
        <div className={classes.toolbarMargins}/>
     </React.Fragment>  
        
    );
}

export default Header;