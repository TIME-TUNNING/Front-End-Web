import { useState } from 'react';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom'
import Header from "components/Header";
import Home from "components/Home";
import Navbar from "components/Navbar";
import ArticleIng from "components/ArticleIng";
import ArticleEnd from "components/ArticleEnd";
import AddSchedule from "components/AddSchedule";
import Login from "components/Login";
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

  let id_max = 0;
  const [schedule, setSchedule] = useState([
    {id:0, title:'동아리 회의', desc:'이번주 동아리 전체 회의날 정하기'}
  ])

  let _article;
  if (scheduleMode === 'ing') {
    _article = <ArticleIng schedule={schedule}/>;
  } else if (scheduleMode === 'end') {
    _article = <ArticleEnd />;
  } else if (scheduleMode === 'add') {
    _article = 
    <AddSchedule 
    onChangeScheduleMode={onChangeScheduleMode}
    onChangeModeState = {function(mode) {
      setModeState(mode);
    }}
    onAddSch = { (_title, _desc) => {
      id_max++;
      setSchedule(schedule.concat({id:id_max, title:_title, desc:_desc}));
      // console.log(schedule);
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
            <Route path="/" element={<Home />}></Route>
            <Route path="/introduction" element=""></Route>
            <Route path="/schedule" element={_schedule}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/signup" element={<SignUp />}></Route>
          </Routes>
        </section>
        <Footer />
      </Router>
    </div>
  );
}

export default App;