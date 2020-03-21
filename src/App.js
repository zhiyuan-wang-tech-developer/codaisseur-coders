import React from 'react';
// import logo from './logo.svg';
import './App.css';
import DevelopersList from './components/DevelopersList'
import Homepage from './components/Homepage'
import Toolbar from './components/Toolbar'
import Postpage from './components/Postpage'
import Loginpage from './components/Loginpage'
import { Switch, Route } from 'react-router-dom'

/** 
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
*/

function App() {
  return (
    <div className='App'>
      <main>
        <Toolbar />
        <Switch>
          <Route path='/homepage' component={Homepage} />
          <Route path='/login' component={Loginpage} />
          <Route path='/developers' component={DevelopersList} />
          <Route path='/read/:id' component={Postpage} />
        </Switch>
      </main>
    </div>
  )
}

export default App;
