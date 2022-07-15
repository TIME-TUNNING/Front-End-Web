import styles from 'styles/Navbar.module.css';

const Navbar = () => (
    <div class={styles.sort}>
        <nav class={styles.navbar}>
            <ul>            
                <a class={styles.ing}><b class={styles.ing2}>조율 진행중</b>인 일정 탭</a>
            </ul>
            <ul>
                <a class={styles.scheduling} href="http://127.0.0.1:5500/index.html">일정 조율</a>&emsp;
                <a class={styles.end} href="http://127.0.0.1:5500/indexcheck.html">일정 확인</a>
            </ul>
        </nav>
        <div class={styles.navbar2}>
            <a class={`${styles.button} ${styles.btnFade} ${styles.btnLightBlue}`} href="" title="Button fade lightblue">추가하기</a>
        </div>
    </div>
);

export default Navbar;
