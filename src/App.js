import logo from './logo.svg';
import './App.css';
import styles from "./App.module.css";

import loadingImg from "./images/loadingLogo.png";
import leftside from "./images/LeftSide.png";
import rightside from "./images/RightSide.png";
import navLogo from "./images/NavLogo.png";
import navSearch from "./images/NavSearch.png";
import navTop from "./images/icon_top.png";
import navNew from "./images/icon_new.png";
import navAsk from "./images/icon_ask.png";
import navShow from "./images/icon_show.png";
import navJobs from "./images/icon_job.png";



function App() {
  return (
    <div className={styles.app}>
      {/* LOADING */}
      <img src={loadingImg} className={styles.app_loadingImg}/>

      {/* STATUS */}
      <div className={styles.app_status}>
        <img src={leftside} className={styles.app_status_left} />
        <img src={rightside} className={styles.app_status_right} />
        <a className={styles.app_status_notch}></a>
      </div>

      {/* UPPER NAV */}
      <div className={styles.app_nav}>
        <img src={navLogo} className={styles.app_nav_logo} />
        <div className={styles.app_nav_text}>svelte<br/>hacker<br/>news</div>
        <img src={navSearch} className={styles.app_nav_search} />
      </div>

      {/* CONTENT */}
      <div className={styles.app_content}></div>

      {/* HOME INDICATOR */}
      <div className={styles.app_home}></div>

      {/* UNDER NAV */}
      <div className={styles.app_navd}>
        <img src={navTop} className={styles.app_navd_top} />
        <img src={navNew} className={styles.app_navd_new} />
        <img src={navAsk} className={styles.app_navd_ask} />
        <img src={navShow} className={styles.app_navd_show} />
        <img src={navJobs} className={styles.app_navd_jobs} />
      </div>






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
