import React from 'react';
//import logo from './logo.svg';
import './App.css';
import Navbar from './MyComponents/Navbar';
import Header from './MyComponents/Header1';
import Footer from './MyComponents/Footer';
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home';
import Teams from './pages/Teams';
import Events from './pages/Events';
import CodersCup from './pages/CodersCup';
import Header1 from './MyComponents/Header1';

function App ()
{
  return(
    <>
    <Navbar />

      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/teams" component={Teams} />
          <Route exact path="/events" component={Events} />
          <Route exact path="/coderscup" component={CodersCup} />
        </Switch>
      </BrowserRouter>

      <Footer />
    </>
  )
}
export default App;
