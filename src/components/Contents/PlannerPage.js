import styles from "../../../styles/Home.module.css";
import plannerStyles from "../../../styles/Planner.module.css";
import React from "react";
import Calender from "../planner/Calender";

export default function PlannerPage() {

    return (
        <main className={styles.main2}>
            <div className={plannerStyles.plannerContainer}>
                <div style={{border:"1px solid #333"}}>
                    <p className={plannerStyles.title1}>Travel</p>
                    <p className={plannerStyles.title2}>Planner</p>
                </div>

                <div className={plannerStyles.plannerCalender} style={{display: "flex"}}>
                   <Calender />
                </div>
                <div className={plannerStyles.assetStatusContainer} style={{display: "flex"}}>
                    <div style={{border:"1px solid #333", width: "70%", margin:"5px"}}>
                        <div style={{border:"1px solid #333", width: "100%", height:"33%"}}>income</div>
                        <div style={{border:"1px solid #333", width: "100%", height:"33%"}}>today's income</div>
                        <div style={{border:"1px solid #333", width: "100%", height:"33%"}}>total</div>
                    </div>
                    <div style={{border:"1px solid #333", width: "70%", margin:"5px"}}>
                        <div style={{border:"1px solid #333", width: "100%", height:"33%"}}>expenses</div>
                        <div style={{border:"1px solid #333", width: "100%", height:"33%"}}>today's expenses</div>
                        <div style={{border:"1px solid #333", width: "100%", height:"33%"}}>total</div>
                    </div>
                </div>
                <div className={plannerStyles.assetListContainer}>
                    <div>item</div>
                </div>
                <div className={plannerStyles.assetChartContainer}>assetChart</div>
            </div>
        </main>
    )
}