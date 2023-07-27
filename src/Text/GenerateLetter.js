class GenerateLetter {
    generateLetter(letter) {
        const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        let word = '';
        for (let i = 0; i < letter; i++) {
            const randomIndex = Math.floor(Math.random() * letters.length);
            word += letters.charAt(randomIndex);
        }

        return word;
    }
}
export default GenerateLetter;