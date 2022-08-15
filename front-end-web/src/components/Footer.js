// import { Link } from 'react-router-dom';
import styles from 'styles/Footer.module.css';

const Footer = () => (
    <footer className={styles.footer}>
        <div className={styles.texts}>
            <span className={styles.top_text}>UMC 2nd</span>
            <span>Team TimeTuning</span>
            {/* <Link to="/inputTime">임시링크(input time)</Link> */}
        </div>
    </footer>
);

export default Footer;
