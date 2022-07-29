import styles from 'styles/Login.module.css'
import logoimg from 'icons/logoimg.png'
import pw from 'icons/pw.png'





function Login(props) {
    // const [hidePassword, setHidePassword] = useState(true);

    // const toggleHidePassword =()=>{
    //     setHidePassword(!hidePassword);
    // }
    
    return (
        <div className={styles.login}>
            <img className={styles.logo} src={logoimg}/>
            <div className={styles.box}>
                <span className={`${styles.title} ${styles.id}`}>
                    아이디
                </span>
                <form className={styles.form}>
                    <input className={styles.input} type="text" name = "id" placeholder="아이디를 입력하세요" />
                </form>
                <span className={`${styles.title} ${styles.pw}`}>
                    비밀번호
                </span>
                <form className={styles.form}>
                    <input className={styles.input} type='password' name = "pw" placeholder="비밀번호를 입력하세요" />
                    {/* {hidePassword ? "password":"text"} */}
                    <img 
                    className={styles.pwimg} 
                    src={pw}
                    
                    />
                </form> 
                <button
                className={styles.btn_login}
                type='submit'
                onClick = { (e) => {
                    e.preventDefault();
                }}
                >로그인</button>
            </div>
            <div className={styles.textdiv}>
                <a className={styles.text}>
                    아이디/비밀번호를 잊으셨나요?
                </a>
                <span className={styles.text}> | </span>
                <a className={styles.text}>
                    회원가입
                </a>
            </div>
        </div>
        
    )
};

export default Login;