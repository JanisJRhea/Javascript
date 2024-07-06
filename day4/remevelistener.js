const button = document.getElementById('myButton');
const paragraph = document.getElementById('myParagraph');
const removeButton = document.getElementById('removeButton');

function handleClick() {
    paragraph.textContent = 'The button was clicked!';
}

button.addEventListener('click', handleClick);


function removeClickListener() {
    button.removeEventListener('click', handleClick);
    paragraph.textContent = 'Event listener removed';
}

removeButton.addEventListener('click', removeClickListener);
