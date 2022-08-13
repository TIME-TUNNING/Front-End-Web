import { useParams } from 'react-router-dom'
import styles from 'styles/MySchedule.module.css';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


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
                    <div className={styles.tablebox}>
                    </div>
                    <div className={styles.time}>
                        <span>00:00 03:00 06:00 09:00 12:00 15:00 18:00 21:00 24:00</span>
                        
                    </div>
                </div>
                <div className={styles.btns}>

                </div>
            </div>
        </div>
    )
}

export default MySchedule;
