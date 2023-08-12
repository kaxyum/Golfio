class PlaySound {
    playSound(path, loop) {
        const audio = new Audio(path);
        audio.loop = loop;
        audio.play();
    }
}
export default PlaySound;