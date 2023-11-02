import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import styles from "./App.module.css";
import ReportContainer from "./components/Report/ReportContainer";
//import { initialState } from "./redux/report-reducer";

function App() {
  return (
    <HashRouter basename="/">
      <div className={styles.appWrapper}>
        <ReportContainer />
      </div>
    </HashRouter>
  );
}

export default App;
