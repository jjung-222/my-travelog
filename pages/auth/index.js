import React, { useState } from 'react';
import styles from "../../styles/Home.module.css";
import LoginForm from "../../src/components/auth/LoginForm";
function auth() {

    return (
        <div className={styles.container}>
            {/** 콘텐츠 부분 **/}
            <LoginForm />
        </div>
    )
}

export default auth;