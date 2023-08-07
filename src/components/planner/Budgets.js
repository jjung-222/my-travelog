import React, { useState } from 'react';
import plannerStyles from "../../../styles/Planner.module.css";
import {ChevronLeft, ChevronRight} from '@mui/icons-material';
import TodoListItem from "./TodoListItem";

function Budgets() {


    return (
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
    );
}
export default Budgets;