/**
 * Returns the time received in milliseconds in days, hours, minutes and seconds.
 * If the time received is 0 or NaN, it returns 0.
 * @param countDown
 * @returns {days, hours, minutes, seconds}
 */
export const parseMilliseconds = (countDown: number): {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
} => {
  if (countDown <= 0 || Number.isNaN(countDown)) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }
  // calculate time left
  const days = Math.floor(countDown / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (countDown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((countDown % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((countDown % (1000 * 60)) / 1000);

  return { days, hours, minutes, seconds };
};

/**
 * Returns the timezone of the user in the format of the IANA time zone database.
 * @returns {string}
 */
export const getUserTimezone = () => Intl.DateTimeFormat().resolvedOptions().timeZone;
