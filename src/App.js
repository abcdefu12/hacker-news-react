import logo from './logo.svg';
// import './App.css';
// import styles from "./App.module.css";
import { categoryList } from './atom/category';


import{BrowserRouter as Router, Switch, Route,Link} from "react-router-dom";

import Main from "./routes/Main";
import Group from "./routes/Group";
import Top from "./routes/Top";
import New from "./routes/New";
import Ask from "./routes/Ask";
import Show from "./routes/Show";
import Job from "./routes/Job";
import Search from './routes/Search';

import { RecoilRoot, atom, selector, useRecoilState, useRecoilValue, } from "recoil";


function App() {
  return (
    <RecoilRoot>
      <Router>
        <Route path={"/"}> <Main /> </Route>
        <Route path={`/:category`}> <Group /> </Route>
      </Router>
    </RecoilRoot>



    // <div>
    //   <Router>
    //     <Switch>
    //       <Route path="/Search"> <Search /> </Route>
    //       <Route path="/Top"> <Top /> </Route>
    //       <Route path="/new"> <New /> </Route>
    //       <Route path="/Ask"> <Ask /> </Route>
    //       <Route path="/Show"> <Show /> </Route>
    //       <Route path="/job"> <Job /> </Route>
    //       <Route path="/"> <Main /> </Route> 
    //     </Switch>
    //   </Router>

    // </div>
  );
}

export default App;
    