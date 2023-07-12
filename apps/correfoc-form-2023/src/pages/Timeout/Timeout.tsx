import React from "react";
import { useCountdown } from "@/hooks/useCountdown";

import styles from "./Timeout.module.scss";
import { useWorldTime } from "@/api/Hooks";

export const Timeout = () => {
    const timeQuery = useWorldTime({
        timezone: Intl.DateTimeFormat().resolvedOptions().timeZone
    });

    const actualDate = React.useMemo<string>(() => timeQuery.data?.datetime ?? new Date().toJSON(), [timeQuery.data])

    const { days, hours, minutes, seconds } = useCountdown(actualDate, "2023-08-12T21:00:00");

    if (days === 0 && hours === 0 && minutes === 0 && seconds === 0) {
        window.location.reload();
    }

    return (
        <div className={styles.container}>
            <div>Estigues atent a l'enllaç, aviat tindràs noticies nostres.</div>
            <div className={styles.counter}>
                <div><span>{days !== 1 ? "Dies" : "Dia"}</span><span>{days}</span></div>
                <div><span>{hours !== 1 ? "Hores" : "Hora"}</span><span>{hours}</span></div>
                <div><span>{minutes !== 1 ? "Minuts" : "Minut"}</span><span>{minutes}</span></div>
                <div><span>Segons</span><span>{seconds}</span></div>
            </div>
        </div>
    )
}
