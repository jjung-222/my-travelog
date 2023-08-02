import React, {useState} from 'react';

const NaverLoginBtn = ({ onSuccess, onFailure }) => {

    const responseKaKao = (res) => {
        // 성공 시 res.profile에 사용자 정보가 들어 있습니다.
        onSuccess(res);
    };

    return (
        <>
            <img src="imgs/naver.png" width={55} height={55}/>
        </>
    );
};

export default NaverLoginBtn;