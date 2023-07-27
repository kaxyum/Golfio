class RemoveSprite {
    removeSprite(sprite, sprites) {
        const index = sprites.indexOf(sprite);
        if (index !== -1) {
            sprites.splice(index, 1);
        }
    }
}
export default RemoveSprite;