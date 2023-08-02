import React from 'react';
import styles from "../../styles/Home.module.css";
import PlannerPage from "../../src/components/Contents/PlannerPage";
function planner() {

    return (
        <div className={styles.container}>
            {/** 콘텐츠 부분 **/}
            <PlannerPage />
        </div>
    )
}

export default planner;