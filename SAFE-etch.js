const sketchField = document.querySelector('.sketch-field');
const colorPicker = document.querySelector('#color-picker');
const pixelPicker = document.querySelector('#pixel-picker');

let pixels = 10;

for (i=1; i<=pixels*pixels; i++) {
    

    const cell = document.createElement('div');
    cell.classList.add('cell');

    sketchField.setAttribute('style', `grid-template-columns: repeat(${pixels}, 1fr); grid-template-rows: repeat(${pixels}, 1fr);`)

    sketchField.appendChild(cell);

    let color = colorPicker.getAttribute('value');

    function changeColorPicker(event) {
        color = event.target.value;
    }

    colorPicker.addEventListener('input', changeColorPicker);




    //function changePixelPicker(event) {
    //    console.log('pixel picker changed');
    //    pixels = event.target.value;
    //    i = 1;
    //}

    //pixelPicker.addEventListener('input', changePixelPicker);






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

