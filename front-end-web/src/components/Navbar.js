// import React, { useState } from 'react';
import styles from 'styles/Navbar.module.css';

const Navbar = (props) => (
    <nav className={styles.navbar}>
        <div className={styles.time_tunning_menu}>
            <span className={styles.menu_status}>
                <span className={styles.menu_status_bold}>{props.modeState}</span>
                인 일정
            </span>
            <div className={styles.menu}>
                <a 
                className={styles.menu_ing} 
                href='/ing'
                // style={props.fontColor}
                onClick={(e) => {
                    e.preventDefault();
                    props.onChangeScheduleMode('ing');
                    props.onChangeModeState('조율 진행중');
                    // props.onChangeFontColor();
                }}
                >조율 진행</a>
                <a 
                className={styles.menu_end} 
                href='/end'
                onClick={(e) => {
                    e.preventDefault();
                    props.onChangeScheduleMode('end');
                    props.onChangeModeState('조율 완료');
                    // props.onChangeFontColor();
                }}
                >조율 완료</a>
            </div>
        </div>
        <button className={styles.btn_add}>추가하기</button>
    </nav>
);

export default Navbar;
