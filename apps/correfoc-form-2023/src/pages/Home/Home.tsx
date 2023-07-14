import React from "react";
import { getUserTimezone, useWorldTime } from "@jmartinez3421/utils-and-hooks";
import { Timeout } from "@/pages/Timeout";
import { AppRouter } from "@/AppRouter";
import styles from "./Home.module.scss";

export const Home = () => {
    const timeQuery = useWorldTime({
        timezone: getUserTimezone(),
    });

    const actualDate = React.useMemo<string>(() => timeQuery.data?.datetime ?? new Date().toJSON(), [timeQuery.data])

    const actualTime = new Date(actualDate).getTime();
    const eventTime = new Date("2023-08-12T21:00:00").getTime();

    return actualTime < eventTime ? <Timeout /> : (
        <div className={ styles.container }>
            <AppRouter />
        </div>
    )
};
