// set up DOM variables:
const sketchField = document.querySelector('.sketch-field');
const colorPicker = document.querySelector('#color-picker');
const pixelPicker = document.querySelector('#pixel-picker');
const pixelType = document.querySelector('.pixel-type');
const artTitle = document.querySelector('.art-title');
const artImg = document.querySelector('.art-img');
const newMasterpiece = document.querySelector('.new-masterpiece');

// add listener to trigger changeColorPicker function when colorPicker input value changes:
colorPicker.addEventListener('input', changeColorPicker);

// add listener to trigger changePixelPicker function when pixelPicker input value changes:
pixelPicker.addEventListener('input', changePixelPicker);

// store initial value of pixel picker in 'pixels' variable:
let pixels = pixelPicker.getAttribute('value');

// store initial value of color picker in 'color' variable:
let color = colorPicker.getAttribute('value');

// trigger pickArt function when user clicks newMasterpiece button:
newMasterpiece.addEventListener('click', () => {
    changeArt();
});

// create a single cell div within the sketch grid:
function createGridCell(x) {
    const cell = document.createElement('div');

    cell.classList.add('cell');

    cell.classList.add('rounded-cell');

    sketchField.appendChild(cell);
}

// render the sketch field by creating the selected number of cell divs and styling them in a square css grid:
function renderGrid(pixels) {
    for (i=1; i<=pixels*pixels; i++) {
        createGridCell();
    }
    sketchField.setAttribute('style', `grid-template-columns: repeat(${pixels}, 1fr); grid-template-rows: repeat(${pixels}, 1fr);`);
    
    addListeners();
}

// render the initial sketch grid:
renderGrid(pixels);

// add the listeners necessary for decent click/drag behavior in the sketch field:
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

// set the 'color' variable to the current colorPicker input value:
function changeColorPicker(event) {
    color = event.target.value;
}

// set the 'pixels' variable to the current pixelPicker input value and re-render the grid whenever the pixel selection changes:
function changePixelPicker(event) {
    pixels = event.target.value;
    i = 1;
    sketchField.innerHTML = '';
    renderGrid(pixels);
}

// set counter for the art display to its initial value:
let x = 0;

// change the art, advancing through a selection of 10 images:
function changeArt() {
    x += 1;
    if (x === 1) {
        artTitle.innerHTML = 'Georges Seurat, <span style="font-style: italic;">A Sunday Afternoon on the Island of La Grande Jatte</span>, 1884-86, oil on canvas.';
        artImg.setAttribute('src','img/seurat.jpg');
    } else if (x === 2) {
        artTitle.innerHTML = 'Paul Signac, <span style="font-style: italic;">Place des Lices, St. Tropez</span>, 1893, oil on canvas.';
        artImg.setAttribute('src','img/signac.jpg');
    } else if (x === 3) {
        artTitle.innerHTML = `Mosaics, Basilica di Sant'Apollinare Nuovo, Ravenna, Italy, 6th century CE.`;
        artImg.setAttribute('src','img/ravenna.jpg');
    } else if (x === 4) {
        artTitle.innerHTML = `Vincent van Gogh, <span style="font-style: italic;">Self-Portrait</span>, 1887, oil on artist's board.`;
        artImg.setAttribute('src','img/van-gogh.jpg');
    } else if (x === 5) {
        artTitle.innerHTML = 'Mosaic of Triton, Terme dei Cisiarii, Ostia Antica, Italy, 2nd century CE.';
        artImg.setAttribute('src','img/ostia.jpg');
    } else if (x === 6) {
        artTitle.innerHTML = 'Chuck Close, <span style="font-style: italic;">Phil White</span>, 2002, relief print with embossing.';
        artImg.setAttribute('src','img/close.jpg');
    } else if (x === 7) {
        artTitle.innerHTML = `Paul Signac, <span style="font-style: italic;">La Corne d'Or. Matin</span>, 1907, oil on canvas.`;
        artImg.setAttribute('src','img/signac-2.jpg');
    } else if (x === 8) {
        artTitle.innerHTML = 'Damien Hirst, <span style="font-style: italic;">Gritti (H5-1)</span>, 2018, Diasec-mounted giclée print on aluminium.';
        artImg.setAttribute('src','img/hirst.jpg');
    } else if (x === 9) {
        artTitle.innerHTML = 'Piet Mondrian, <span style="font-style: italic;">Broadway Boogie Woogie</span>, 1942-43, oil on canvas.';
        artImg.setAttribute('src','img/mondrian.jpg');
    } else if (x === 10) {
        artTitle.innerHTML = 'Georges Seurat, <span style="font-style: italic;">Gray Weather, Grande Jatte</span>, 1886-88, oil on canvas.';
        artImg.setAttribute('src','img/seurat-2.jpg');
        x = 0;
    }
}

// set the initial art image:
changeArt();

// toggle between rounded and square cell styling for the sketch grid:
function changePixelType() {
    const cells = document.querySelectorAll('.cell');
    cells.forEach(cell => {
        cell.classList.toggle('rounded-cell');
    });
}

// add click listener on the pixelType button to trigger the changePixelType function:
pixelType.addEventListener('click', () => {
    changePixelType();
});