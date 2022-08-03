import React, { useEffect, useState } from "react";
import styles from 'styles/Login.module.css'
import logoimg from 'icons/logoimg.png'
import pw from 'icons/pw.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { faEyeSlash } from "@fortawesome/free-solid-svg-icons";

function Login(props) {
    // const [hidePassword, setHidePassword] = useState(true);

    // const toggleHidePassword =()=>{
    //     setHidePassword(!hidePassword);
    // }

    const [isHide, setIsHide] = useState(true);
    let _eye = 
    <div
    className={styles.eye}
    onClick = {() => {
        setIsHide(!isHide);
    }}>
        <FontAwesomeIcon icon={faEye} />
    </div>
    
    if (isHide === false) {
        _eye = 
        <div
        className={styles.eyeSlash}
        onClick = {() => {
            setIsHide(!isHide);
        }}>
            <FontAwesomeIcon icon={faEyeSlash} />
        </div>
    }

    const [isVisible, setIsVisible] = useState(
        [false, false, false, false]
    );
    const onChangeDisplay = (index) => {
        let newArray = [...isVisible];
        for (let i = 0; i < 4; i++) {
            if (i === index) {
                newArray[i] = true;
            } else {
                newArray[i] = false;
            }
        }
        setIsVisible(newArray);
    }
    
    return (
        <div className={styles.login}>
            <img className={styles.logo} src={logoimg} alt='img'/>
            <div className={styles.box}>
                <span className={`${styles.title} ${styles.id}`}>
                    아이디
                </span>
                <form className={styles.form}>
                    <input className={styles.input} type="text" name = "id" placeholder="  아이디를 입력하세요" />
                </form>
                <span className={`${styles.title} ${styles.pw}`}>
                    비밀번호
                </span>
                <form className={styles.form}>
                    <input 
                    className={styles.input} 
                    type={isHide ? 'password' : 'text'}
                    name = "pw" 
                    placeholder="  비밀번호를 입력하세요" 
                    onClick = {() => {
                        onChangeDisplay(3);
                    }}
                    />
                    {_eye}
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
                <span className={styles.text}>
                    아이디/비밀번호를 잊으셨나요?
                </span>
                <span className={styles.text}> | </span>
                <span className={styles.text}>
                    회원가입
                </span>
            </div>
        </div>
    )
};

export default Login;
