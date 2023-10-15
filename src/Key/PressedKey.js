class PressedKey {
    pressedKey(key, callback) {
        document.addEventListener('keydown', (event) => {
            if (event.key === key) {
                callback(true);
            }
        });
    }
}
export default PressedKey;