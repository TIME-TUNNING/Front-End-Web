import { useState } from 'react';
import { DateRange } from 'react-date-range';
import ko from 'date-fns/locale/ko';
import moment from 'moment';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import ColorPicker from 'components/ColorPicker';
import styles from 'styles/AddSchedule.module.css';

function AddSchedule(props) {
    const [myColor, setMyColor] = useState(null);

    
    const [range, setRange] = useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: 'selection'
        }
    ]);

    const today = moment().toDate();

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
                    <span className={styles.date_text}>날짜 선택</span>
                    <div className={styles.date_calendar}>
                        <DateRange 
                        locale={ko}
                        editableDateInputs={false}
                        minDate={today}
                        onChange={item => setRange([item.selection])}
                        moveRangeOnFirstSelection={false}
                        months={2}
                        ranges={range}
                        rangeColors={['#4B77F2']}
                        direction='horizontal'
                        dateDisplayFormat={'yyyy년 MM월 dd일'}
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
                    console.log(range);
                }}
                >취소</button>
            </div>
        </div>
    </div>
    )
};



export default AddSchedule;