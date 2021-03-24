import React, { Component } from 'react';
import { Route } from "react-router-dom";

import Nav from '../Nav/Nav';
import Home from '../Home/Home';
import Plp from '../plp/Plp';
class App extends Component{
    render(){
        return(
            <React.Fragment>
                <Nav/>
                {/* <Plp/> */}
                {/* <Home/> */}
                <Route path="/" component={Home} exact />
                <Route path="/products" component={Plp} exact />
            </React.Fragment>
        );
    }
}

export default App;