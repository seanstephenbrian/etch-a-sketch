const sketchField = document.querySelector('.sketch-field');

let x = prompt('how many cells wide','');

for (i=1; i<=x*x; i++) {

    const cell = document.createElement('div');
    cell.classList.add('cell');

    sketchField.setAttribute('style', `grid-template-columns: repeat(${x}, 1fr); grid-template-rows: repeat(${x}, 1fr);`)

    sketchField.appendChild(cell);

 }