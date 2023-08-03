import styles from "../../../styles/Home.module.css";
import plannerStyles from "../../../styles/Planner.module.css";
import React, {useState} from "react";
import Calendar from "../planner/Calendar";
import TodoList from "../planner/TodoList";

export default function PlannerPage() {
    const [selected, setSelected] = useState("CALENDAR");

    const onClick = (id) => {
        switch (id) {
            case "CALENDAR":
                setSelected("CALENDAR")
                break;
            case "TODO":
                setSelected("TODO")
                break;
            case "BUDGET":
                setSelected("BUDGET")
                break;
        }
    }

    return (
        <main className={styles.main2}>
            <div className={plannerStyles.plannerContainer}>
                <div>
                    <p className={plannerStyles.title1}>Travel</p>
                    <p className={plannerStyles.title2}>Planner</p>
                </div>

                <nav className={plannerStyles.navContainer}>
                    <ul className={plannerStyles.navbarMenu}>
                        <div className={selected == "CALENDAR" ? plannerStyles.selected : ""}  onClick={()=>{onClick("CALENDAR")}}><li><p>CALENDAR</p></li></div>
                        <div className={selected == "TODO" ? plannerStyles.selected : ""}  onClick={()=>{onClick("TODO")}}><li><p>TODO-LIST</p></li></div>
                        <div className={selected == "BUDGET" ? plannerStyles.selected : ""}  onClick={()=>{onClick("BUDGET")}}><li ><p>BUDGET</p></li></div>
                    </ul>
                </nav>

                {
                    selected == "CALENDAR" &&
                    <div className={plannerStyles.plannerCalender}>
                        <Calendar />
                    </div>
                }

                {
                    selected == "TODO" &&
                    <div className={plannerStyles.plannerCalender}>
                        <TodoList />
                    </div>
                }

                {
                    selected == "BUDGET" &&
                    <div>
                        <div className={plannerStyles.assetStatusContainer}>
                            <div style={{border:"1px solid #333", width: "50%", margin:"5px"}}>
                                chart
                            </div>
                            <div style={{width: "50%",height:"25vh", margin:"20px", textAlign:"center"}}>
                                <table style={{width:"100%",height:"100%", top:"5px"}}>
                                    <tr>
                                        <th style={{backgroundColor:"#333333", width:"40%", color:"white"}}>INITIAL BUDGET</th>
                                        <td style={{border:"1px solid #333333", width:"60%"}}>6,000,000</td>
                                    </tr>
                                    <tr>
                                        <th style={{backgroundColor:"#333333", width:"40%", color:"white"}}>TOTAL INCOME</th>
                                        <td style={{border:"1px solid #333333", width:"60%"}}>1,000,000</td>
                                    </tr>
                                    <tr>
                                        <th style={{backgroundColor:"#333333", width:"40%", color:"white"}}>TOTAL EXPENSE</th>
                                        <td style={{border:"1px solid #333333", width:"60%"}}>2,000,000</td>
                                    </tr>
                                    <tr>
                                        <th style={{backgroundColor:"#333333", width:"40%", color:"white"}}>TOTAL BUDGET</th>
                                        <td style={{border:"1px solid #333333", width:"60%"}}>5,000,000</td>
                                    </tr>
                                </table>
                            </div>
                        </div>
                        <h2 style={{margin: "0", textAlign:"center"}}>TODAY'S </h2>
                        <div style={{height:"10vh", display:"flex", marginBottom:"2%", textAlign:"center"}}>
                            <div style={{width: "50%", margin:"5px"}}>
                                <div style={{border:"1px solid #333", backgroundColor:"#333333", width: "100%", height:"35px", color:"#ffffff"}}><p style={{margin:"0", fontSize:"19px"}}>INCOME</p></div>
                                <div style={{border:"1px solid #333", width: "100%", height:"35px"}}>1,000,000</div>
                            </div>
                            <div style={{width: "50%", margin:"5px"}}>
                                <div style={{border:"1px solid #333", backgroundColor:"#333333", width: "100%", height:"35px", color:"#ffffff"}}><p style={{margin:"0", fontSize:"19px"}}>EXPENSE</p></div>
                                <div style={{border:"1px solid #333", width: "100%", height:"35px"}}>2,000,000</div>
                            </div>
                        </div>
                        <div className={plannerStyles.assetListContainer}>
                            <div><input type="text" placeholder="금액을 입력해 주세요"/><button>INCOME</button><button>EXPENSE</button></div>
                            <div style={{overflowY: "hidden"}}>
                                <div>1,000,000</div>
                                <div>1,000,000</div>
                                <div>1,000,000</div>
                                <div>1,000,000</div>
                                <div>1,000,000</div>
                                <div>1,000,000</div>
                                <div>1,000,000</div>
                            </div>

                        </div>
                    </div>
                }

            </div>
        </main>
    )
}