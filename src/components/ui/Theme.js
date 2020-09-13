
import {createMuiTheme} from "@material-ui/core/styles";

const arcBlue = "#0B72B9";
const arcOrange = "#FFBA60";

export default createMuiTheme({
    palette: {  // Palette is our theme colours styling (british english haha).
        common: {
            blue: `${arcBlue}`,  //Anytime we want to change our App theme colours, they'll be under palette (MATERIAL-UI)
            orange: `${arcOrange}`
            
        },
        primary: {
            main: `${arcBlue}`   //creates a dark and light version
        },
        secondary: {
            main: `${arcOrange}` //creates a dark and light version
        }
    },
    typography: {  // Typography is the area we set the font sizes, weights etc for our theme to customize Material-UI for our App
        h3: {
            fontWeight: 300
        },
        tab: {
                fontWeight: 600,
                fontSize: "1rem",
                minWidth: 10,
                marginLeft: "25px"
        },
        estimateButton: {
                fontSize: "1rem",
                transform: "none",
                height: "45px",
        }
    }
});