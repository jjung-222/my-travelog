import React, { useState } from 'react';
import plannerStyles from "../../../styles/Planner.module.css";
import {ChevronLeft, ChevronRight} from '@mui/icons-material';

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
        <div>
            <p>{dateString}</p>
            <div className={plannerStyles.inputContainer}>
                <input className={plannerStyles.inputStyle} type="text" value={currentData.inputText} onChange={onChange} />
            </div>
        </div>
    );
}
export default TodoList;