const button = document.getElementById('myButton');
const paragraph = document.getElementById('myParagraph');

function handleClick() {
    paragraph.textContent = 'The button was clicked!';
}

button.addEventListener('click', handleClick);
