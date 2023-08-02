import React, { useState } from 'react';
import MainPage from "../../src/components/Contents/MainPage";
import styles from "../../styles/Home.module.css";
function main() {

    return (
        <div className={styles.container}>

            {/** 콘텐츠 부분 **/}
            <MainPage />

        </div>
    )
}

export default main;