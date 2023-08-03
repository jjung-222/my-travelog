import React, { useState } from 'react';
import plannerStyles from "../../../styles/Planner.module.css";
import moment, { Moment as MomentTypes } from 'moment';
import {ChevronLeft, ChevronRight} from '@mui/icons-material';

function Calendar() {
    const [getMoment, setMoment]=useState(moment());

    const today = getMoment;
    const firstWeek = today.clone().startOf('month').week();
    const lastWeek = today.clone().endOf('month').week() === 1 ? 53 : today.clone().endOf('month').week();

    const calendarArr=()=>{

        let result = [];
        let week = firstWeek;
        for ( week; week <= lastWeek; week++) {
            result = result.concat(
                <tr key={week} className={plannerStyles.calendarTr}>
                    {
                        Array(7).fill(0).map((data, index) => {
                            let days = today.clone().startOf('year').week(week).startOf('week').add(index, 'day'); //d로해도되지만 직관성

                            if(moment().format('YYYYMMDD') === days.format('YYYYMMDD')){ //today  className={plannerStyles.dayItem}
                                return(
                                    <td className={plannerStyles.calendartoday} key={index}>
                                        <span >{days.format('D')}</span>
                                    </td>
                                );
                            }else if(days.format('MM') !== today.format('MM')){ //이번달 말고
                                return(
                                    <td className={plannerStyles.calendarother} key={index} >
                                        <span >{days.format('D')}</span>
                                    </td>
                                );
                            }else{
                                return(
                                    <td className={plannerStyles.calendarTd} key={index}  >
                                        <span >{days.format('D')}</span>
                                    </td>
                                );
                            }
                        })
                    }
                </tr>
            );
        }
        return result;
    }

    return (
        <div className={plannerStyles.calendarContainer}>
            <div className={plannerStyles.control}>
                <span className={plannerStyles.Date}><ChevronLeft onClick={()=>{ setMoment(getMoment.clone().subtract(1, 'month')) }} >이전달</ChevronLeft></span>
                <span className={plannerStyles.Date}>{today.format('YYYY 년 MM 월')}</span>
                <span className={plannerStyles.Date}><ChevronRight onClick={()=>{ setMoment(getMoment.clone().add(1, 'month')) }} >다음달</ChevronRight></span>
            </div>
            <table className={plannerStyles.calendarTable}>
                <tbody className={plannerStyles.calendarTbody}>
                {calendarArr()}
                </tbody>
            </table>
        </div>
    );
}
export default Calendar;