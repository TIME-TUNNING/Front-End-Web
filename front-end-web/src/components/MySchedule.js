import styles from 'styles/MySchedule.module.css';

const MySchedule = (props) => {
    // console.log(props.schedule.id);
    
    return (
        <div className={styles.mySchedule}>
            <div className={styles.box}>
                <div className={styles.infos}>
                    <div className={styles.title}>
                        {props.schedule[0].title}
                    </div>
                    <div className={styles.desc}>
                        {props.schedule[0].desc}
                    </div>
                    <div>

                    </div>
                </div>
                <div className={styles.btns}>

                </div>
            </div>
        </div>
    )
}

export default MySchedule;
