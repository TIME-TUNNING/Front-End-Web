import { Link } from 'react-router-dom';
import styles from 'styles/Header.module.css';
import logo from 'icons/logo.png';

const Header = () => (
    <header className={styles.main_header}>
        <h1 className={styles.logo}>
            <img className={styles.logo_image} src={logo} alt="타임튜닝 로고"/>
        </h1>
        <ul className={styles.menu}>
            <Link to="/" className={styles.tab}>타임튜닝이란</Link>
            <Link to="/mySchedule/ing" className={styles.tab}>일정 관리</Link>
            <div className={styles.my_menu}>
                <Link to="/login" className={`${styles.tab} ${styles.smallTab}`}>로그인</Link>
                <span className={`${styles.smallBar} ${styles.smallTab}`}>|</span>
                <Link to="/signup" className={`${styles.tab} ${styles.smallTab}`}>회원가입</Link> 
            </div>
            {/* <a  href="/home">홈</a>
            <a className={styles.tab} href="/introduction">타임튜닝이란?</a>
            <a className={styles.tab} href="/schedule">일정 관리</a>
            <a className={`${styles.tab} ${styles.smallTab}`} href="/mypage">이아름님, 안녕하세요!</a> */}
        </ul>
    </header>
);

export default Header;