import styles from "../../../styles/Home.module.css";
import plannerStyles from "../../../styles/Planner.module.css";
import React, {useState} from "react";
import CalendarContent from "../planner/CalendarContent";
import TodoList from "../planner/TodoList";
import TodoListAdd from "../planner/TodoListAdd";
import Budgets from "../planner/Budgets";
import TodayBudgetItem from "../planner/TodayBudgetItem";
import BudgetInput from "../planner/BudgetInput";

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
                        <CalendarContent />
                    </div>
                }

                {
                    selected == "TODO" &&
                    <div>
                        <div className={plannerStyles.plannerTodo}>
                            <TodoList />
                        </div>
                        <div>

                        </div>
                    </div>
                }

                {
                    selected == "BUDGET" &&
                    <div>
                        <Budgets />
                        <h2 style={{margin: "0", textAlign:"center"}}>TODAY'S </h2>
                        <div style={{height:"10vh", display:"flex", marginBottom:"2%", textAlign:"center"}}>
                            <TodayBudgetItem />
                            <TodayBudgetItem />
                        </div>
                        <BudgetInput />
                    </div>
                }

            </div>
        </main>
    )
}