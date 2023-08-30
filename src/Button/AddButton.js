class AddButton {
    addButton(width, height, top, left, backgroundColor, borderRadius) {
        return new Promise((resolve) => {
            const button = document.createElement('button');
            button.style.width = width;
            button.style.height = height;
            button.style.top = top;
            button.style.left = left;
            button.style.backgroundColor = backgroundColor;
            button.style.borderRadius = borderRadius;

            button.addEventListener('click', () => {
                resolve(true);
            });

            const container = document.getElementById('container');
            container.appendChild(button);
        });
    }
}
export default AddButton;