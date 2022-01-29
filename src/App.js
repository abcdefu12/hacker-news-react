import logo from './logo.svg';
// import './App.css';
// import styles from "./App.module.css";



import{BrowserRouter as Router, Switch, Route,Link} from "react-router-dom";
// import Template from './components/Template';
import Main from "./routes/Main";



function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/">
            <Main />
          </Route>

        </Switch>
      </Router>

      {/* <header className="App-header">
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
      </header> */}
    </div>
  );
}

export default App;
