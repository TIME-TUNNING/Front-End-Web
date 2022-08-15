import { useParams } from 'react-router-dom'
// import { useState } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import delete_img from 'icons/Delete.png';
import styles from 'styles/MySchedule.module.css';

const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 3
};

// const [content, setContent] = useState();

// const handleClickButton = e => {
//     const { name } = e.target;
//     setContent(name);
// };

const MySchedule = (props) => {
    let { sch_id } = useParams();

    const members = [
        {key: 0, name: '손민지', id: 'smj1234'},
        {key: 1, name: '박채연', id: 'bjy1234'},
        {key: 2, name: '성민혁', id: 'smh1234'},
        {key: 3, name: '임주영', id: 'ijy1234'},
        {key: 4, name: '심주현', id: 'sjh1234'},
        {key: 5, name: '류성훈', id: 'rsh1234'},
        {key: 6, name: '안혜진', id: 'ahj1234'},
    ];

    const memberList = members.map( member => 
        <div
        key={member.key}
        className={styles.member}
        >
            <div className={styles.circle}></div>
            <span className={styles.member_name}>{member.name}</span>
            <button
            type='button'
            className={styles.btn_delete}
            >
                <img className={styles.delete_image} src={delete_img} alt="삭제 버튼"/>
            </button>
        </div>
    )

    // console.log(props.schedule[sch_id].id);
    // console.log(sch_id);
    
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
                        <Slider {...settings}>
                            <div className={styles.dayblock}>
                                <span>
                                    <span className={styles.monthfont}>6월</span>
                                    <span className={styles.dayfont}>
                                        <p>15</p>
                                        목요일
                                    </span>
                                </span>
                            </div>
                            <div className={styles.dayblock}>
                                <h3>1</h3>
                            </div>
                            <div className={styles.dayblock}>
                                <h3>1</h3>
                            </div>
                            <div className={styles.dayblock}>
                                <h3>1</h3>
                            </div>
                            <div className={styles.dayblock}>
                                <h3>1</h3>
                            </div>
                            <div className={styles.dayblock}>
                                <h3>1</h3>
                            </div>
                            <div className={styles.dayblock}>
                                <h3>1</h3>
                            </div>
                            <div className={styles.dayblock}>
                                <h3>1</h3>
                            </div>
                            <div className={styles.dayblock}>
                                <h3>1</h3>
                            </div>
                            <div className={styles.dayblock}>
                                <h3>1</h3>
                            </div>
                        </Slider>
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
                            />
                            <div className={styles.btn_position}>
                                <button
                                className={styles.btn_search}
                                type='button'
                                >검색</button>
                            </div>
                        </div>
                        <div>
                            <span className={styles.texts}>참여자</span>
                            <div className={styles.memberList}>
                                {memberList}
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
