let textArray = [];
class RemoveText {
    removeText(text)
    {
        for (let i = 0; i < textArray.length; i++) {
            if (textArray[i].innerHTML === text) {
                document.body.removeChild(textArray[i]);
                textArray.splice(i, 1);
            }
        }
    }
}
export default RemoveText;