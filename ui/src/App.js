import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import LeftMenu from "./components/LeftMenu";
import AppHeader from "./components/AppHeader";
import DevicesList from './containers/devicelist';



import './App.css';
import './css/main.css';

class App extends Component {
  render() {
    return (
        <MuiThemeProvider>

        <div className="App">
        <LeftMenu/>
         <AppHeader/>



        <p className="App-intro">
           <DevicesList/>

        </p>

      </div>
        </MuiThemeProvider>
    );
  }
}

export default App;
