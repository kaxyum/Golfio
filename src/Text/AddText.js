let textArray = [];
class AddText {
    addText(left, top, fontfamily, fontsize, text)
    {
        const textContainer = document.createElement('div');
        textContainer.style.position = 'absolute';
        textContainer.style.fontFamily = fontfamily;
        textContainer.style.left = left;
        textContainer.style.top = top;
        textContainer.style.fontSize = fontsize;
        textContainer.id = textArray.length;
        textArray.push(textContainer);
        document.body.appendChild(textContainer);
    
        textContainer.innerHTML = text;
    }
}
export default AddText;