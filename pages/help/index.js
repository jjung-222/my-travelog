import React, { useState } from 'react';
import styles from "../../styles/Home.module.css";
import HelpPage from "../../src/components/Contents/HelpPage";
function help() {

    return (
        <div className={styles.container}>

            {/** 콘텐츠 부분 **/}
            <HelpPage />

        </div>
    )
}

export default help;