import Image from 'next/image'
import styles from '../../../styles/Home.module.css'
import React, {useState} from "react";
import {useRouter} from "next/router";
import MenuItem from "../Items/MenuItem";

export default function Header() {
    const menuItem = ["Make", "Share", "Planner", "Help"];

    const Router = useRouter()
    const [isHovering, setIsHovering] = useState(false);
    const [isHovering2, setIsHovering2] = useState(false);

    const handleMouseOver = () => {
        setIsHovering(true);
    };

    const handleMouseOut = () => {
        setIsHovering(false);
    };

    return (
        <header className={styles.header}>
            <div>
                <div className={styles.logo}>
                    <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
                </div>
                <div className={styles.headerMenu}>
                    {menuItem.map((item, index) => {
                        return  <MenuItem key={index} item={item}/>
                    })}
                </div>
                <div className={isHovering ? styles.loginText_hover : styles.loginText}>
                    <p onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}> Get started by{' '} <a onClick={()=>{Router.push("/auth")}}>SignIn / SignUp</a> </p>
                </div>

            </div>
        </header>
    )
}
