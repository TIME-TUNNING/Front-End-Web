import React, { useState } from 'react';
import Header from "components/Header";
import Navbar from "components/Navbar";
import ArticleIng from "components/ArticleIng";
import ArticleEnd from "components/ArticleEnd";
import Footer from "components/Footer";
import styles from 'styles/App.module.css';

function App() {
  const [scheduleMode, setScheduleMode] = useState('ing');
  const [modeState, setModeState] = useState('조율 진행중');
  // const [fontColor, setFontColor] = useState('black');
  // const [isClicked, setIsClicked] = useState(false);

  let _article = <ArticleIng />

  if (scheduleMode === 'ing') {
    _article = <ArticleIng />;
  } else if (scheduleMode === 'end') {
    _article = <ArticleEnd />;
  }

  return (
    <div className="App">
      <Header />
      <section className={styles.main_body}>
        <Navbar
        modeState={modeState}
        // fontColor={fontColor}
        onChangeScheduleMode = {function(mode) {
          setScheduleMode(mode);
        }}
        onChangeModeState = {function(mode) {
          setModeState(mode);
        }}
        // onChangeFontColor = {function() {
        //   setIsClicked(!isClicked);
        //   if (isClicked === true) {
        //     setFontColor('#4B77F2');
        //   } else {
        //     setFontColor('black');
        //   }
        // }}
        />
        {_article}
      </section>
      <Footer />
    </div>
  );
}

export default App;
