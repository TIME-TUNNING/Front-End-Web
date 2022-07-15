import styles from 'styles/Header.module.css';
import logo from 'icons/logo.png';

const Header = () => (
    <header className={styles.main_header}>
        <h1 className={styles.logo}>
            <img className={styles.logo_image} src={logo} alt="타임튜닝 로고"/>
        </h1>
        <ul className={styles.menu}>
            <a className={styles.tab} href="/home">홈</a>
            <a className={styles.tab} href="/introduction">타임튜닝이란?</a>
            <a className={`${styles.tab} ${styles.manage_schedule}`} href="/schedule">일정 관리</a>
            <a className={styles.tab} href="/mypage">구민지님, 안녕하세요!</a>
        </ul>
    </header>
);

export default Header;