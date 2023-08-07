import React, { useState } from 'react';
import plannerStyles from "../../../styles/Planner.module.css";
import {ChevronLeft, ChevronRight} from '@mui/icons-material';
import TodoListItem from "./TodoListItem";

function TodayBudgetItem() {


    return (
        <div style={{width: "50%", margin:"5px"}}>
            <div style={{border:"1px solid #333", backgroundColor:"#333333", width: "100%", height:"35px", color:"#ffffff"}}><p style={{margin:"0", fontSize:"19px"}}>INCOME</p></div>
            <div style={{border:"1px solid #333", width: "100%", height:"35px"}}>1,000,000</div>
        </div>
    );
}
export default TodayBudgetItem;