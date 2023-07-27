import React, { useState, useEffect } from 'react';
import Image from "next/image";

function LoginForm() {
    const [user, setUser] = useState(null);
    const [isLogin, setIsLogin] = useState(false);

    const initKakao = async () => {
        const Kakao = window.Kakao;
        const jsKey = "76eed9c4ee80a37491bfdc70a4c6fb71";
        if (Kakao && !Kakao.isInitialized()) {
            await Kakao.init(jsKey);
            console.log(`kakao 초기화 ${Kakao.isInitialized()}`);
        }
    };

    const kakaoLogin = async () => {
        await Kakao.Auth.login({
            success(res) {
                console.log(res);
                Kakao.Auth.setAccessToken(res.access_token);
                console.log("카카오 로그인 성공");

                Kakao.API.request({
                    url: "/v2/user/me",
                    success(res) {
                        console.log("카카오 인가 요청 성공");
                        setIsLogin(true);
                        debugger
                        const kakaoAccount = res.kakao_account;
                        // localStorage.setItem("email", kakaoAccount.email);
                        // localStorage.setItem("nickname", kakaoAccount.profile.nickname);
                    },
                    fail(error) {
                        console.log(error);
                    },
                });
            },
            fail(error) {
                console.log(error);
            },
        });
    };

    const kakaoLogout = () => {
        Kakao.Auth.logout((res) => {
            console.log(Kakao.Auth.getAccessToken());
            console.log(res);
            // localStorage.removeItem("email");
            // localStorage.removeItem("nickname");
            setUser(null);
        });
    };

    useEffect(() => {
        initKakao();
        Kakao.Auth.getAccessToken() ? setIsLogin(true) : setIsLogin(false);
    }, []);

    useEffect(() => {
        console.log(isLogin);
        if (isLogin) {
            setUser({
                // email: localStorage.getItem("email"),
                // profileImg: localStorage.getItem("profileImg"),
                // nickname: localStorage.getItem("nickname"),
            });
        }
    }, [isLogin]);

    const onEmailHandler =()=>{

    }

    const onSubmitHandler = ()=>{

    }

    return (
        <div style={{display: 'flex', justifyContent:'center'}}>
            <div style={{
                marginTop:"7%",
                justifyContent: 'center', alignItems: 'center',
                width: '36%', height: '80vh', border: "1px solid #000000"
            }}>
                <div style={{width: "100%", height:"30%", textAlign:"center", paddingTop:"90px"}}>
                    <Image src="/imgs/travelogLogo.png" width={250} height={65} />
                </div>

                { user ?
                    <>
                        <button onClick={kakaoLogout}>로그아웃</button>
                    </>
                    :
                    <>
                    <div style={{height: "28%", textAlign: "center"}}>
                        <form style={{display: 'flex', flexDirection: 'column'}}
                              onSubmit={onSubmitHandler}
                        >
                            <div>
                                <label style={{
                                    float: "left",
                                    fontSize: "18px",
                                    marginBottom: "10px",
                                    textAlign: "left",
                                    marginLeft: "5%"
                                }}>로그인</label>
                                <label style={{
                                    float: "right",
                                    fontSize: "13px",
                                    marginBottom: "10px",
                                    textAlign: "left",
                                    marginRight: "5%",
                                    color: "#a5a5a5"
                                }}>아직 회원이 아니신가요?</label>
                            </div>

                            <div><input style={{height: "40px", width: "90%", fontSize: "17px"}} type='id'
                                        placeholder="아이디를 입력해주세요" value="" onChange={onEmailHandler}/></div>
                            <div><input style={{height: "40px", width: "90%", fontSize: "17px"}} type='password'
                                        placeholder="비밀번호를 입력해주세요" value="" onChange={onEmailHandler}/></div>
                            <div>
                                <button style={{
                                    height: "40px",
                                    width: "90%",
                                    fontSize: "17px",
                                    marginTop: "15px",
                                    borderRadius: "20px",
                                    border: "0px",
                                    color: "white",
                                    background: "#127eff"
                                }}>
                                    로그인
                                </button>
                            </div>
                        </form>
                    </div>

                    <div style={{width: "90%", height: "2%", borderBottom: "1px solid #000000", margin: "5%"}}></div>

                    <div style={{width: "100%", height: "30%", textAlign: "center"}}>
                        <p style={{margin: "0px"}}>다음 방법으로 로그인하기</p>
                        <div style={{display: "flex", marginLeft: "15px"}}>
                            <div style={{padding: "10px"}} onClick={kakaoLogin}>
                                <Image src="/imgs/kakao.png" width={65} height={65}/>
                            </div>
                            <div style={{padding: "10px"}}><Image src="/imgs/naver.png" width={65} height={65}/></div>
                        </div>
                    </div>
                </>
                }
            </div>
        </div>
    )
}

export default LoginForm;