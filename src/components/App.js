import React from 'react';
import {ThemeProvider} from "@material-ui/styles";
import Header from "./ui/Header";
import theme from "./ui/Theme";
import {BrowserRouter, Route, Switch} from "react-router-dom";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/" component={() => <div>Home</div>} />
          <Route exact path="/About" component={() => <div>About us</div>} />
          <Route exact path="/Services" component={() => <div>Services</div>} />
          <Route exact path="/TheRevolution" component={() => <div>The Revolution</div>} />
          <Route exact path="/Contact" component={() => <div>Contact us</div>} />
          <Route exact path="/" component={() => <div>Home</div>} />
          <Route exact path="/" component={() => <div>Home</div>} />
          <Route exact path="/" component={() => <div>Home</div>} />
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
