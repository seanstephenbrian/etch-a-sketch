const sketchField = document.querySelector('.sketch-field');
const colorPicker = document.querySelector('#color-picker');
const pixelPicker = document.querySelector('#pixel-picker');
const pixelType = document.querySelector('.pixel-type');
const artTitle = document.querySelector('.art-title');
const artImg = document.querySelector('.art-img');

let pixels = pixelPicker.getAttribute('value');

let color = colorPicker.getAttribute('value');

function createGrid(x) {
    const cell = document.createElement('div');

    cell.classList.add('cell');

    cell.classList.add('rounded-cell');

    sketchField.setAttribute('style', `grid-template-columns: repeat(${x}, 1fr); grid-template-rows: repeat(${x}, 1fr);`);

    sketchField.appendChild(cell);

    colorPicker.addEventListener('input', changeColorPicker);

    pixelPicker.addEventListener('input', changePixelPicker);
}

function addListeners() {

    let mouseDown = false;

    sketchField.addEventListener('mousedown', () => {
        mouseDown = true;
    });

    sketchField.addEventListener('mouseup', () => {
        mouseDown = false;
    });

    const cells = document.querySelectorAll('.cell');

    cells.forEach(cell => {
        cell.addEventListener('mouseover', () => {
            if (mouseDown) {
                cell.setAttribute('style', `background-color: ${color};`);
            }
        });
    });

    cells.forEach(cell => {
        cell.addEventListener('mouseout', () => {
            if (mouseDown) {
                cell.setAttribute('style', `background-color: ${color};`);
            }
        });
    });

    cells.forEach(cell => {
        cell.addEventListener('click', () => {
            cell.setAttribute('style', `background-color: ${color};`);
        });
    });

};

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
    addListeners();
}

function pickArt() {
    let x = Math.floor(Math.random() * 11);
    if (x === 1) {
        artTitle.innerHTML = 'Georges Seurat, <span style="font-style: italic;">A Sunday Afternoon on the Island of La Grande Jatte</span>, 1884-1886, oil on canvas.';
        artImg.setAttribute('src','img/seurat.jpg');
    } else if (x === 2) {
        artTitle.innerHTML = '';
        artImg.setAttribute('src','');
    } else if (x === 3) {
        artTitle.innerHTML = '';
        artImg.setAttribute('src','');
    } else if (x === 4) {
        artTitle.innerHTML = '';
        artImg.setAttribute('src','');
    } else if (x === 5) {
        artTitle.innerHTML = '';
        artImg.setAttribute('src','');
    } else if (x === 6) {
        artTitle.innerHTML = '';
        artImg.setAttribute('src','');
    } else if (x === 7) {
        artTitle.innerHTML = '';
        artImg.setAttribute('src','');
    } else if (x === 8) {
        artTitle.innerHTML = '';
        artImg.setAttribute('src','');
    } else if (x === 9) {
        artTitle.innerHTML = '';
        artImg.setAttribute('src','');
    } else if (x === 10) {
        artTitle.innerHTML = '';
        artImg.setAttribute('src','');
    }
}

pickArt();

for (i=1; i<=pixels*pixels; i++) {
    createGrid(pixels);
}

addListeners();

function changePixelType() {
    const cells = document.querySelectorAll('.cell');
    cells.forEach(cell => {
        cell.classList.toggle('rounded-cell');
    });
}

pixelType.addEventListener('click', () => {
    changePixelType();
});