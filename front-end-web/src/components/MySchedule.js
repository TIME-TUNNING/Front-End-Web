import { useParams } from 'react-router-dom'
import { useState } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import moment from 'moment';
import 'moment/locale/ko'
import delete_img from 'icons/Delete.png';
import styles from 'styles/MySchedule.module.css';

// const [content, setContent] = useState();

// const handleClickButton = e => {
//     const { name } = e.target;
//     setContent(name);
// };

const MySchedule = (props) => {

    // const [tab, settab] = useState([false, false, false, false, false, false, false]);
    // const tabSelct = (index) => {
    //     let newArray = [...tab];
    //     for (let i = 0 ; i < 8; i++){
    //         if(i === index){
    //             newArray[i] = true;
    //         } else {
    //             newArray[i] = false;
    //         }
    //     }
    //     settab(newArray);
    // }
        
    let { sch_id } = useParams();

    const _startDate = moment(props.schedule[sch_id].date[0].startDate);
    const _endDate = moment(props.schedule[sch_id].date[0].endDate);
    const difference = _endDate.diff(_startDate, 'days');

    const settings_1 = {
        dots: true,
        infinite: difference > 5,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 5,
    };

    const settings_2 = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3
    }

    const test_members = [
        {key: 0, name: '손민지', id: 'smj1234'},
        {key: 1, name: '박채연', id: 'bjy1234'},
        {key: 2, name: '성민혁', id: 'smh1234'},
        {key: 3, name: '임주영', id: 'ijy1234'},
        {key: 4, name: '심주현', id: 'sjh1234'},
        {key: 5, name: '류성훈', id: 'rsh1234'},
        {key: 6, name: '안혜진', id: 'ahj1234'},
    ];

    const [members, setMembers] = useState([]);
    const [inviteId, setInviteId] = useState('');

    const handleAddMember = () => {
        for (let i = 0; i < 7; i++) {
            if (inviteId === test_members[i].id) {
                setMembers(members.concat(test_members[i]))
            }
        }
    };

    const memberList = members.map( (member) => 
    <div key={member.key}>
        <div className={styles.member}>
            <div className={styles.circle}></div>
            <span className={styles.member_name}>{member.name}</span>
            <button
            type='button'
            className={styles.btn_delete}
            >
                <img className={styles.delete_image} src={delete_img} alt="삭제 버튼"/>
            </button>
        </div>
    </div>
    );

    let days = [];
    
    // console.log(difference);

    // console.log(days);
    
    // console.log(num);
    
    const [isSelected, setIsSelected] = useState([]);
    let dayArray = [];
    for (let i = 0; i <= difference; i++) {
        days.push(_startDate.clone().add(i, 'days'));
        dayArray.push(false);
    }
    dayArray[0] = false;
    // setIsSelected(dayArray);

    const handleSelect = (index) => {
        for (let i = 0; i <= difference; i++) {
            if (i === index) {
                dayArray[i] = true;
            } else {
                dayArray[i] = false;
            }
        }
        setIsSelected(dayArray);
    }
    
    // console.log(days);
    const dateList = days.map( (day, index) => 
    <div key={Number(index)}>
        <div className={styles.dayblock}>
            <button
            className={`${styles.btn_dayblock} ${isSelected[index] ? styles.backgroundChange : 'none'}`}                                
            type='button'
            onClick={() => {
                handleSelect(index);
            }}>
                <span className={`${styles.monthfont} ${isSelected[index] ? styles.colorGray : 'none'}`}>{moment(day).format('M월')}</span>
                <span className={`${styles.dayfont} ${isSelected[index] ? styles.colorWhite : 'none'}`}>{moment(day).format('DD')}</span>
                <span className={`${styles.weekfont} ${isSelected[index] ? styles.colorWhite : 'none'}`}>{moment(day).locale('ko').format('dddd')}</span>
            </button>
            <button
            className={styles.btn_allday}
            type='button'
            >종일</button>
        </div>
    </div>
    );

    
    
    return (
        <div className={styles.mySchedule}>
            <div className={styles.box}>
                <div className={styles.infos}>
                    <div className={styles.title}>
                        {props.schedule[sch_id].title}
                    </div>
                    <div className={styles.desc}>
                        {props.schedule[sch_id].desc}
                    </div>
                    <div className={styles.slide}>
                        <Slider {...settings_1}>
                            {dateList}
                        </Slider>
                    </div>
                    <div className={styles.dateTime}>
                        <div className={styles.timeInputs}>
                            <input 
                            className={styles.input}
                            type='time'/>
                            <span className={styles.span}>~</span>
                            <input 
                            className={styles.input}
                            type='time'/>
                        </div>
                        <div className={styles.timeBtn}>
                            <button
                            className={styles.button}
                            >입력</button>
                        </div>
                    </div>
                    <div className={styles.tablebox}></div>
                    <div className={styles.time}>
                        <span>00:00 03:00 06:00 09:00 12:00 15:00 18:00 21:00 24:00</span>
                    </div>
                    <div className={styles.invite}>
                        <span className={styles.texts}>친구초대</span>
                        <div className={styles.flex}>
                            <input 
                            className={styles.invite_input}
                            type='text' 
                            placeholder='아이디로 초대하세요'
                            spellCheck='false'
                            onChange = { (e) => {setInviteId(e.target.value)}}
                            />
                            <div className={styles.btn_position}>
                                <button
                                className={styles.btn_search}
                                type='button'
                                onClick={handleAddMember}
                                >검색</button>
                            </div>
                        </div>
                        <div>
                            <span className={styles.texts}>참여자</span>
                            <div className={styles.memberList}>
                                <div>
                                    <Slider {...settings_2}>
                                        {memberList}
                                    </Slider>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.btns}>
                    <button
                    className={styles.btn_submit}
                    type='submit'
                    >일정 확정하기</button>
                </div>
            </div>
        </div>
    )
}

export default MySchedule;
