import styles from '../../../styles/Home.module.css'
import React, {useState} from "react";
import {useRouter} from "next/router";

export default function MenuItem(props) {

    const Router = useRouter()
    const [isHovering, setIsHovering] = useState(false);

    const handleMouseOver = () => {
        setIsHovering(true);
    };

    const handleMouseOut = () => {
        setIsHovering(false);
    };



    return (
        <div className={isHovering ? styles.headerMenuText_hover : styles.headerMenuText} >
            <a onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}
               href="http://wiss.tistory.com"
               style={{padding: "10px", margin: "10px", display: "inline-block"}}>{props.item}</a>
        </div>
    )
}
