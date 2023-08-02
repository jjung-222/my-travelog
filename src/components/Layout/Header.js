import Image from 'next/image'
import styles from '../../../styles/Home.module.css'
import React, {useState} from "react";
import {useRouter} from "next/router";
import MenuItem from "../Items/MenuItem";

export default function Header() {
    const menuItem = ["Travelog", "Share", "Planner", "Help"];

    const Router = useRouter()

    return (
        <header className={styles.header}>
            <div>
                <div className={styles.logo}>
                    <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} onClick={()=>Router.push("./main")}/>
                </div>
                <div className={styles.headerMenu}>
                    {menuItem.map((item, index) => {
                        return  <MenuItem key={index} item={item}/>
                    })}
                </div>
                <div className={styles.loginText}>
                    <p> Get started by{' '} <a onClick={()=>{Router.push("/auth")}}>SignIn / SignUp</a> </p>
                </div>

            </div>
        </header>
    )
}
