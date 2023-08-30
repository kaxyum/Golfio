class PressedKey {
    pressedKey(key, callback) {
        document.addEventListener('keydown', (event) => {
            if (event.key === key) {
                callback(true);
            }
        });
    }

    generateNumber(number) {
        const min = Math.pow(10, longueur - 1);
        const max = Math.pow(10, longueur) - 1;

        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    generateLetter(letter) {
        const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        let mot = '';
        for (let i = 0; i < longueur; i++) {
            const randomIndex = Math.floor(Math.random() * caracteres.length);
            mot += caracteres.charAt(randomIndex);
        }

        return mot;
    }
}
export default PressedKey;