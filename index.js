// add an event listener for the click event on the input#input element in index.html
const input = document.getElementById('input');
function addingEventListener() {
    input.addEventListener('click', () => alert('I was clicked!'));
}
