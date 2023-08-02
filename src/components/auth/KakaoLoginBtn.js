import React, {useState} from 'react';
import KakaoLogin from 'react-kakao-login';
import Image from "next/image";

const KakaoLoginBtn = ({ onSuccess, onFailure }) => {

    const responseKaKao = (res) => {
        // 성공 시 res.profile에 사용자 정보가 들어 있습니다.
        onSuccess(res);
    };

    return (
        <>
            <KakaoLogin
                token="76eed9c4ee80a37491bfdc70a4c6fb71" //{`${process.env.REACT_APP_KAKAO_KEY}`} // 여기에 앱 키를 입력합니다.
                onSuccess={responseKaKao}
                onFail={onFailure}
                onLogout={console.info}
                render={({ onClick }) => (
                    <div onClick={onClick}>
                        <img src="imgs/kakao.png" width={55} height={55}/>
                    </div>
                )}
            />
        </>
    );
};

export default KakaoLoginBtn;