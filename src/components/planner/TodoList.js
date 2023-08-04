import React, { useState } from 'react';
import plannerStyles from "../../../styles/Planner.module.css";
import {ChevronLeft, ChevronRight} from '@mui/icons-material';
import TodoListItem from "./TodoListItem";

function TodoList() {
    let today = new Date();

    const year = today.getFullYear();
    const month = ('0' + (today.getMonth() + 1)).slice(-2);
    const day = ('0' + today.getDate()).slice(-2);

    const dateString = year + '년 ' + month  + '월 ' + day + "일";


    const [currentData, setcurrentData] = useState({
        inputText: "",
        badge: "",
    })

    const onChange = (e) => {

    }

    return (
        <div className={plannerStyles.plannerTodoContainer}>
            <h2>{dateString}</h2>
            <div>
                <TodoListItem text="프로젝트 생성하기" done={true} />
            </div>

        </div>
    );
}
export default TodoList;