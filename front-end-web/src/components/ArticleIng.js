// import { useState } from 'react';
import ScheduleBlock from "components/ScheduleBlock";
import styles from 'styles/Article.module.css';

const ArticleIng = (props) => {
    console.log(props);
    const contents = props.schedule.map(sch => (
        <ScheduleBlock
        key={Number(sch.id)}
        schedule={sch} />
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
