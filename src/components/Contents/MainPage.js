import styles from "../../../styles/Home.module.css";
import {useRouter} from "next/router";

export default function MainPage() {
    const Router = useRouter()

    return (
        <main className={styles.main1}>
            <h1 className={styles.title}>
                Welcome to <a onClick={() => {
                console.log("dd")
            }}>Travelog!</a>
            </h1>

            <div className={styles.grid}>
                <a href="https://nextjs.org/docs" className={styles.card}>
                    <h2>Make your own travelog &rarr;</h2>
                    <p>If you input the places you have visited, We'll create your log.</p>
                </a>

                <a href="https://nextjs.org/learn" className={styles.card}>
                    <h2>Share your travelog &rarr;</h2>
                    <p>Share your travel log with people and me!</p>
                </a>

                <a
                    onClick={()=>{Router.push("/planner")}}
                    className={styles.card}
                >
                    <h2>Travel Planner &rarr;</h2>
                    <p>Record your travel plans and expense ledger.</p>
                </a>

                <a
                    className={styles.card}
                >
                    <h2>Travel Maker &rarr;</h2>
                    <p>
                        Provide a list of travel-related websites and recommend itineraries.
                    </p>
                </a>
            </div>
        </main>
    )
}