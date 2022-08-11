const sketchField = document.querySelector('.sketch-field');
const colorPicker = document.querySelector('#color-picker');
const pixelPicker = document.querySelector('#pixel-picker');


let pixels = 10;

let color = colorPicker.getAttribute('value');

function createGrid(x) {
    const cell = document.createElement('div');

    cell.classList.add('cell');

    sketchField.setAttribute('style', `grid-template-columns: repeat(${x}, 1fr); grid-template-rows: repeat(${x}, 1fr);`);

    sketchField.appendChild(cell);

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

    colorPicker.addEventListener('input', changeColorPicker);

    pixelPicker.addEventListener('input', changePixelPicker);

}

function changeColorPicker(event) {
    color = event.target.value;
}

function changePixelPicker(event) {
    pixels = event.target.value;
    i = 1;
    sketchField.innerHTML = '';
    for (i=1; i<=pixels*pixels; i++) {
        createGrid(pixels);
    }
}

for (i=1; i<=pixels*pixels; i++) {
    createGrid(pixels);
}





    
    

    

    












    

    

 

