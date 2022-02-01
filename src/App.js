import logo from './logo.svg';
// import './App.css';
// import styles from "./App.module.css";



import{BrowserRouter as Router, Switch, Route,Link} from "react-router-dom";

import Main from "./routes/Main";
import Top from "./routes/Top";
import New from "./routes/New";
import Ask from "./routes/Ask";
import Show from "./routes/Show";
import Jobs from "./routes/Jobs";



function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/Top"> <Top /> </Route>
          <Route path="/New"> <New /> </Route>
          <Route path="/Ask"> <Ask /> </Route>
          <Route path="/Show"> <Show /> </Route>
          <Route path="/Jobs"> <Jobs /> </Route>
          <Route path="/"> <Main /> </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
