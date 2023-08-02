import styles from '../../../styles/Home.module.css'
import React, {useState} from "react";
import {useRouter} from "next/router";

export default function MenuItem(props) {

    const Router = useRouter()

    const onClick = () => {
        switch (props.item) {
            case "Travelog":
                Router.push("./travelog")
                break;
            case "Share" :
                Router.push("./share")
                break;
            case "Planner" :
                Router.push("./planner")
                break;
            case "Help" :
                Router.push("./help")
                break;
            default:
                break;
        }
    }

    return (
        <div className={styles.headerMenuText} >
            <a onClick={onClick}>{props.item}</a>
        </div>
    )
}
