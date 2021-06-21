import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Nav from "../components/Nav";
import Home from '../pages/Home';
import About from '../pages/About';

class App extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        console.log(this.props);
        return (
            <div className="container">

                <BrowserRouter>
                    <Nav />
                    <Switch>
                        <Route exact path="/Profile" component={Home}></Route>
                        <Route path="/Profile/About" component={About}></Route>
                    </Switch>
                </BrowserRouter>
            </div>
        );
    }
}

export default App;
