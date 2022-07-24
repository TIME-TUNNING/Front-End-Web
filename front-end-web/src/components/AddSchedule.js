import React, { useState } from 'react';
import styles from 'styles/AddSchedule.module.css';
import ColorPicker from 'components/ColorPicker';

function AddSchedule(props) {
    const [myColor, setMyColor] = useState(null);

    return (
    <div className={styles.addSchedule}>
        <div className={styles.box}>
            <div className={styles.infos}>
                <div className={styles.title}>
                    <input type='text' placeholder='일정 제목'/>
                </div>
                <div className={styles.desc}>
                    <span>일정 설명</span>
                    <input type='text'/>
                </div>
                <div className={styles.color}>
                    <span>색상 선택</span>
                    <ColorPicker 
                    myColor={myColor}
                    onChangeColor={function(color) {
                        setMyColor(color);
                        console.log(myColor);
                    }}
                    
                    />
                </div>
                <div className={styles.date}>
                    <span>날짜 선택</span>
                    <input type='text' readOnly/>
                    
                </div>
            </div>
            <div className={styles.btns}>
                <button
                className={styles.btn_ok}
                type='submit'
                >확인</button>
                <button
                className={styles.btn_cancel}
                type='button'
                onClick = { (e) => {
                    e.preventDefault();
                    props.onChangeScheduleMode('ing');
                    props.onChangeModeState('조율 진행중');
                }}
                >취소</button>
            </div>
        </div>
    </div>
    )
};



export default AddSchedule;
