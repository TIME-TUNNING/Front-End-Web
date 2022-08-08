// import { useState } from 'react';
import { Link } from 'react-router-dom';
import ScheduleBlock from "components/ScheduleBlock";
import styles from 'styles/Article.module.css';

const ArticleIng = (props) => {
    console.log(props.schedule[0].id);
    const contents = props.schedule.map(sch => (
        <Link to={{
            pathname: `/mySchedule/${sch.id}`,
            key: sch.id,
            title: sch.title,
            desc: sch.desc
        }}>
            <ScheduleBlock
            key={Number(sch.id)}
            schedule={sch} 
            />
        </Link>
    ));

    return (
        <article className={styles.article}>
            <div>
                {contents}
            </div>
            <div 
            className={styles.message}
            // style={{display: id_max > -1 ? 'block' : 'none'}}
            >
                <span className={styles.text}>
                    아직 조율중인
                </span>
                <span className={styles.text}>
                    일정이 없어요
                </span>
            </div>
        </article>
    
)};

export default ArticleIng;
