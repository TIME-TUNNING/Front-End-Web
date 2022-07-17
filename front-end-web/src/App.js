import React, { useState } from 'react';
import Header from "components/Header";
import Navbar from "components/Navbar";
import ArticleIng from "components/ArticleIng";
import ArticleEnd from "components/ArticleEnd";
import AddSchedule from "components/AddSchedule";
import Footer from "components/Footer";
import styles from 'styles/App.module.css';

function App() {
  const [scheduleMode, setScheduleMode] = useState('ing');
  const [modeState, setModeState] = useState('조율 진행중');
  const [ingColor, setIngColor] = useState('#4B77F2');
  const [endColor, setEndColor] = useState('black');
  const [display, setDisplay] = useState('flex');

  let _article = <ArticleIng />

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

  return (
    <div className="App">
      <Header />
      <section className={styles.main_body}>
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
      </section>
      <Footer />
    </div>
  );
}

export default App;
