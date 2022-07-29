import { useState } from 'react';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom'
import Header from "components/Header";
import Navbar from "components/Navbar";
import ArticleIng from "components/ArticleIng";
import ArticleEnd from "components/ArticleEnd";
import AddSchedule from "components/AddSchedule";
import SignUp from "components/SignUp";
import Footer from "components/Footer";
import styles from 'styles/App.module.css';

function App() {
  const [scheduleMode, setScheduleMode] = useState('ing');
  const [modeState, setModeState] = useState('조율 진행중');
  const [ingColor, setIngColor] = useState('#4B77F2');
  const [endColor, setEndColor] = useState('black');
  const [display, setDisplay] = useState('flex');

  const onChangeScheduleMode = function(mode) {
    setScheduleMode(mode);
    if (mode === 'ing') {
    setIngColor('#4B77F2');
    setEndColor('black');
    setDisplay('flex');
    } else if (mode === 'end') {
    setIngColor('black');
    setEndColor('#4B77F2');
    } else if (mode === 'add') {
      setDisplay('none');
    }
  }

  let _article = <ArticleIng />
  if (scheduleMode === 'ing') {
    _article = <ArticleIng />;
  } else if (scheduleMode === 'end') {
    _article = <ArticleEnd />;
  } else if (scheduleMode === 'add') {
    _article = 
    <AddSchedule 
    onChangeScheduleMode={onChangeScheduleMode}
    onChangeModeState = {function(mode) {
      setModeState(mode);
    }}
    />;
  }

  const _schedule = 
  <div>
    <Navbar
          display={display}
          modeState={modeState}
          ingColor={ingColor}
          endColor={endColor}
          onChangeScheduleMode={onChangeScheduleMode}
          onChangeModeState = {function(mode) {
            setModeState(mode);
          }}
          />
    {_article}
  </div>
  
  return (
    <div className="App">
      <Router>
        <Header />
        <section className={styles.main_body}>
          <Routes>
            <Route path="/" element=""></Route>
            <Route path="/introduction" element=""></Route>
            <Route path="/schedule" element={_schedule}></Route>
            <Route path="/login" element=""></Route>
            <Route path="/signup" element={<SignUp />}></Route>
          </Routes>
        </section>
        <Footer />
      </Router>
    </div>
  );
}

export default App;