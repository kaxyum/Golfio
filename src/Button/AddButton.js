class AddButton {
    addButton(width, height, top, left, backgroundColor, borderRadius, borderColor) {
        return new Promise((resolve) => {
            const button = document.createElement('button');
            button.style.width = width;
            button.style.height = height;
            button.style.position = 'absolute';
            button.style.top = top;
            button.style.left = left;
            button.style.backgroundColor = backgroundColor;
            button.style.borderRadius = borderRadius;
            button.style.border = borderColor;

            button.addEventListener('click', () => {
                resolve(true);
            });

            const container = document.getElementById('container');
            container.style.position = 'relative';
            container.appendChild(button);
        });
    }
}
export default AddButton;