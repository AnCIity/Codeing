import React from "react";
import { Switch, Route, Redirect, NavLink } from "react-router-dom";
import Home from "./pages/home";
import Child from "./pages/child";

function App() {
    console.log("首页组件");

    return (
        <div>
            <h2>这是App组件</h2>
            <hr />
            <nav>
                <NavLink to="/home">首页</NavLink>
                <NavLink to="/child">子组件</NavLink>
            </nav>
            <hr />
            <Switch>
                <Route path="/home" component={Home}></Route>
                <Route path="/child" component={Child}></Route>
                <Redirect to="/home"></Redirect>
            </Switch>
        </div>
    );
}

export default App;
