import { useState } from 'react';
import { Routes, Route, BrowserRouter as Router} from 'react-router-dom'
import Header from "components/Header";
import Home from "components/Home";
import ArticleIng from "components/ArticleIng";
import ArticleEnd from "components/ArticleEnd";
import AddSchedule from "components/AddSchedule";
import Login from "components/Login";
import SignUp from "components/SignUp";
import MySchedule from "components/MySchedule"
import Footer from "components/Footer";
import styles from 'styles/App.module.css';

function App() {
  const [modeState, setModeState] = useState('조율 진행중');

  let id_max = 0;
  const [schedule, setSchedule] = useState([
    {id:0, title:'동아리 회의', desc:'이번주 동아리 전체 회의날 정하기'}
  ])

  const _addSchedule = 
  <AddSchedule 
    onChangeModeState = {function(mode) {
      setModeState(mode);
    }}
    onAddSch = { (_title, _desc) => {
      id_max++;
      setSchedule(schedule.concat({id:id_max, title:_title, desc:_desc}));
    }}/>;

  const _articleIng = 
  <ArticleIng 
    schedule={schedule}
    modeState={modeState}
    onChangeModeState = {function(mode) {
      setModeState(mode);
    }}/>

  const _articleEnd = 
  <ArticleEnd 
    // schedule={schedule}
    modeState={modeState}
    onChangeModeState = {function(mode) {
      setModeState(mode);
    }}/>

  return (
    <div className="App">
      <Router>
        <Header />
        <section className={styles.main_body}>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/introduction" element=""></Route>
            <Route path="/mySchedule/ing" element={_articleIng}></Route>
            <Route path="/mySchedule/end" element={_articleEnd}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/signup" element={<SignUp />}></Route>
            <Route path="/addSchedule" element={_addSchedule}></Route>
            <Route path="/mySchedule/:id" element={<MySchedule schedule={schedule}/>}></Route>
          </Routes>
        </section>
        <Footer />
      </Router>
    </div>
  );
}

export default App;