class GenerateNumber {
    generateNumber(number) {
        const min = Math.pow(10, number - 1);
        const max = Math.pow(10, number) - 1;

        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
}
export default GenerateNumber;