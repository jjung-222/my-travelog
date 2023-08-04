import styles from "../../../styles/Home.module.css";
import React from "react";
import plannerStyles from "../../../styles/Planner.module.css";
import ShareList from "../share/ShareList";

export default function SharePage() {

    return (
        <main className={styles.main2}>
            <div className={plannerStyles.plannerContainer}>
                <ShareList />
            </div>
        </main>
    )
}