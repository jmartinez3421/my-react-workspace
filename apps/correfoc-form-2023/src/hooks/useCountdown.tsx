import React from "react";

/**
 * Returns the time received in milliseconds in days, hours, minutes and seconds.
 * If the time received is 0 or NaN, it returns 0.
 * @param countDown
 * @returns {days, hours, minutes, seconds}
 */
const getReturnValues = (countDown: number) => {
    if (countDown <= 0 || Number.isNaN(countDown)) {
        return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }
    // calculate time left
    const days = Math.floor(countDown / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
        (countDown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
    );
    const minutes = Math.floor((countDown % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((countDown % (1000 * 60)) / 1000);

    return { days, hours, minutes, seconds };
};

/**
 * Returns a count-down that updates every second until the target date is reached. If the target date is in the past, it returns 0.
 * @param actualDate
 * @param targetDate
 * @returns {days, hours, minutes, seconds}
 */
export const useCountdown = (actualDate: string, targetDate: string) => {
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

    return getReturnValues(countDown);
};
