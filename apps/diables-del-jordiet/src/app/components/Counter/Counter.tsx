"use client";

import React from "react";
import styles from "./Counter.module.css";
import useCountdown from "@/app/utils/hooks/useCountdown";

export default function Counter() {
    const { days, hours, minutes, seconds } = useCountdown(new Date().toJSON(), "2024-08-17T21:00:00");

    return (
        <div className={ styles.container } suppressHydrationWarning>
            <div className={ styles.counter }>
                <div><span>{ days !== 1 ? "Dies" : "Dia" }</span><span>{ days }</span></div>
                <div><span>{ hours !== 1 ? "Hores" : "Hora" }</span><span>{ hours }</span></div>
                <div><span>{ minutes !== 1 ? "Minuts" : "Minut" }</span><span>{ minutes }</span></div>
                <div><span>Segons</span><span>{ seconds }</span></div>
            </div>
        </div>
    )
}
