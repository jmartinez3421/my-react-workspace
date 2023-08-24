import React from "react";
import { parseMilliseconds } from "@/app/utils/functions/timeUtils";

/**
 * Returns a count-down that updates every second until the target date is reached. If the target date is in the past, it returns 0.
 * @param actualDate
 * @param targetDate
 * @returns {days, hours, minutes, seconds}
 */
const useCountdown = (actualDate: string, targetDate: string) => {
    const countDownDate = new Date(targetDate).getTime();
    let actualTime = new Date(actualDate).getTime();

    const [countDown, setCountDown] = React.useState(
        countDownDate - new Date(actualDate).getTime(),
    );


    React.useEffect(() => {
        // Update the count-down every 1 second
        const interval = setInterval(() => {
            actualTime += 1000;
            const newCountDown = countDownDate - actualTime;

            // Update the states
            setCountDown(newCountDown <= 0 ? 0 : newCountDown);

            // If the count-down is finished, clear the interval
            if (newCountDown < 0) {
                clearInterval(interval);
            }
        }, 1000);

        return () => clearInterval(interval);
    }, [countDownDate]);

    return parseMilliseconds(countDown);
};

export default useCountdown;
