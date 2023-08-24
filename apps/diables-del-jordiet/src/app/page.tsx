import React from "react";
import styles from "./page.module.css";
import Counter from "@/app/components/Counter/Counter";

export default function Home() {
    return (
        <main className={ styles.main }>
            <h1 className={ styles.title }>
                Diables del Jordiet
            </h1>
            <p className={ styles.description }>
                El proper correfoc dels Diables del Jordiet serà en:
            </p>
            <Counter />
        </main>
    );
}
