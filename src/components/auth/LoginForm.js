import React, { useState, useEffect } from 'react';
import Image from "next/image";
import KakaoLoginBtn from "./KakaoLoginBtn";
import Router from "next/router";
import styles from "../../../styles/Login.module.css";
import NaverLoginBtn from "./NaverLoginBtn";

function LoginForm() {
    const [user, setUser] = useState(null);
    const [isLoggedIn, setIsLoggedIn] = useState(false); // 상태 추가


    const onEmailHandler =()=>{

    }

    const onSubmitHandler = ()=>{

    }


    const handleLoginSuccess = (response) => {
        // 로그인 성공 시 처리
        console.log('카카오 로그인 성공:', response.profile);
        setIsLoggedIn(true);
        Router.push("/main")
    };

    const handleLoginFailure = (error) => {
        // 로그인 실패 시 처리
        console.error('카카오 로그인 실패:', error);
        setIsLoggedIn(false);
    };


    const kakaoLogout = () => {

    }

    return (
        <div className={styles.loginContainer}>
            <div className={styles.loginSubContainer}>
                <div className={styles.loginContent}>
                    <div className={styles.loginPageLogo}>
                        <Image src="/imgs/travelogLogo.png" width={250} height={65} />
                    </div>

                    <div className={styles.loginFormContainer}>
                        <form className={styles.loginForm}
                              onSubmit={onSubmitHandler}
                        >
                            <div>
                                <label className={styles.loginLabel1}>로그인</label>
                                <label className={styles.loginLabel2}>아직 회원이 아니신가요?</label>
                            </div>

                            <div className={styles.inputContainer}>
                                <div><input className={styles.loginInputId} type='id'
                                            placeholder="아이디를 입력해주세요" value="" onChange={onEmailHandler}/></div>
                                <div><input className={styles.loginInputPw} type='password'
                                            placeholder="비밀번호를 입력해주세요" value="" onChange={onEmailHandler}/></div>
                            </div>
                            <div>
                                <button className={styles.loginBtn}>
                                    로그인
                                </button>
                            </div>
                        </form>
                    </div>

                    <div className={styles.divideBorder}></div>

                    <div className={styles.simpleLoginContainer}>
                        <p className={styles.simpleLoginTitle}>다음 방법으로 로그인하기</p>
                        <div className={styles.simpleLoginSubContainer}>
                            <div className={styles.simpleLoginItem}>
                                <KakaoLoginBtn onSuccess={handleLoginSuccess} onFailure={handleLoginFailure} kakaoLogout={kakaoLogout}/>
                            </div>
                            <div className={styles.simpleLoginItem}>
                                <NaverLoginBtn onSuccess={handleLoginSuccess} onFailure={handleLoginFailure} kakaoLogout={kakaoLogout}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginForm;