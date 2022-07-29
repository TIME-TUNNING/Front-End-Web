import { useState } from 'react';
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import ColorPicker from 'components/ColorPicker';
import styles from 'styles/AddSchedule.module.css';

function AddSchedule(props) {
    const [myColor, setMyColor] = useState(null);

    const [range, setRange] = useState([
        {
            startDate: new Date(),
            endDate: null,
            key: 'selection'
        }
    ]);

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
                    {/* <input type='text' readOnly/> */}
                    <div className={styles.date_calendar}>
                        <DateRange 
                        editableDateInputs={false}
                        // dateDisplayFormat={false}
                        onChange={item => setRange([item.selection])}
                        moveRangeOnFirstSelection={false}
                        months={2}
                        ranges={range}
                        direction='horizontal'
                        /> 
                    </div>
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