import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, hashHistory } from "react-router";

import Archives from "./pages/Archives";
import Featured from "./pages/Featured";
import Layout from "./pages/Layout";
import Settings from "./pages/Settings";
import ToDos from "./pages/ToDos";

const app = document.getElementById('app');
ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={Layout}>
            <IndexRoute name="featured" component={Featured}></IndexRoute>
            <Route path="archives" name="archives" component={Archives}></Route>
            <Route path="settings" name="settings" component={Settings}></Route>
            <Route path="todos" name="todos" component={ToDos}></Route>            
        </Route>
    </Router>,
    app);
