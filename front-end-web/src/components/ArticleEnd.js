import styles from 'styles/Article.module.css';

const ArticleEnd = () => (
    <article className={styles.article}>
            
            <div 
            className={styles.message}
            // style={{display: id_max > -1 ? 'block' : 'none'}}
            >
                <span className={styles.text}>
                    조율이 완료된
                </span>
                <span className={styles.text}>
                    일정이 없어요
                </span>
            </div>
        </article>
);

export default ArticleEnd;