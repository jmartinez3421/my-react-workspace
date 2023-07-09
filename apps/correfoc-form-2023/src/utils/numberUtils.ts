export const getRandomNumbers = () => {
    const bigNumber = 85;

    // Generate three random numbers
    const number1 = Math.floor(Math.random() * (100 - bigNumber));
    const number2 = Math.floor(Math.random() * (100 - bigNumber - number1));
    const number3 = 100 - bigNumber - number1 - number2;

    return { bigNumber, number1, number2, number3 };
}
