const sketchField = document.querySelector('.sketch-field');
const colorPicker = document.querySelector('#color-picker');

let x = prompt('how many cells wide','');

for (i=1; i<=x*x; i++) {

    const cell = document.createElement('div');
    cell.classList.add('cell');

    sketchField.setAttribute('style', `grid-template-columns: repeat(${x}, 1fr); grid-template-rows: repeat(${x}, 1fr);`)

    sketchField.appendChild(cell);

    let color = colorPicker.getAttribute('value');

    function changeColorPicker(event) {
        color = event.target.value;
    }

    colorPicker.addEventListener('input', changeColorPicker);

    let mouseDown = false;
    
    sketchField.addEventListener('mousedown', () => {
        mouseDown = true;
    });

    sketchField.addEventListener('mouseup', () => {
        mouseDown = false;
    });

    cell.addEventListener('click', () => {
        cell.setAttribute('style', `background-color: ${color};`);
    });

    cell.addEventListener('mouseover', () => {
        if (mouseDown) {
            cell.setAttribute('style', `background-color: ${color};`);
        }
    });

    cell.addEventListener('mouseout', () => {
        if (mouseDown) {
            cell.setAttribute('style', `background-color: ${color};`);
        }
    });

    

 }

