import React, { useState } from 'react';
import styles from "../../styles/Home.module.css";
import SharePage from "../../src/components/Contents/SharePage";
function share() {

    return (
        <div className={styles.container}>

            {/** 콘텐츠 부분 **/}
            <SharePage />

        </div>
    )
}

export default share;