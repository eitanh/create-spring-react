import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import LeftMenu from "./components/LeftMenu";
import AppHeader from "./components/AppHeader";
import DevicesList from './containers/devicelist';
import {
    BrowserRouter as Router,
    Route,
    Link,
    withRouter,
    Redirect
} from 'react-router-dom'


import Test from './components/Test';
import './App.css';
import './css/main.css';


// <DevicesList/>
// <LeftMenu/>
// <AppHeader/>
//  <p className="App-intro"></p>
class App extends Component {
  render() {
    return (
        <MuiThemeProvider>
            <Router>

        <div className="App">

            <Route exact path="/" component={Test} />
            <Route path="/devices" component={DevicesList}/>






      </div>
            </Router>
        </MuiThemeProvider>
    );
  }
}

export default App;
