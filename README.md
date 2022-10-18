# etch-a-sketch
"Etch-a-sketch"-inspired interactive drawing tool

Live version: https://seanstephenbrian.github.io/etch-a-sketch/

This was one of my first JavaScript projects for the Odin Project. The assignment was to create an etch-a-sketch-like tool, demonstrating proficiency with JavaScript DOM manipulation and employing slightly more involved CSS styling. I took the prompt in a slightly different direction by creating an interface for the user to recreate pointillist or otherwise "pixelated" paintings and other significant works of art from throughout art history.

The left side of the page displays a work of art; by clicking the button below the image, the user is able to cycle through a selection of 10 images. The caption (above the image) is also updated when the user clicks the button. A straightforward JS function accomplishes this by incrementing a variable for the current image index each time the button is clicked, then updating the image title text and art image src simultaneously. This functionality exists apart from the sketch field: the user can advance from one art image to the next without erasing their current sketch.

The right side of the page is the sketch field itself, which is rendered by a couple JS functions that manipulate the DOM. Taking the user's pixel size selection (a number between 1 and 75; let's call it 'x'), exactly x * x number of cell <code>div</code>s are added to the DOM within the sketch field container, then CSS grid is used to order these cells in a square of x rows by x columns. Overall, it is a fairly standard etch-a-sketch field with a few fun features: using a slider, the user can change the number of pixels in the grid (updating this selection erases the user's sketch, because the sketch grid needs to be re-rendered with the new number of pixels), and a color picker input allows the user to choose the color of their dots (changing this value does not erase the sketch as the grid does not need to be re-rendered). There is also a button to allow the user to change between round or square pixels; clicking this button triggers a JS function which iterates through the entire sketch field grid and toggles a 'rounded-cell' class on each individual cell <code>div</code>.

After advancing further in the Odin Project curriculum, I revisited the project to clean up the code slightly and add explanatory comments to the JavaScript.

Example sketches:

<img src="https://raw.githubusercontent.com/seanstephenbrian/etch-a-sketch/main/img/screenshot-1.png" alt="Example sketch of Chuck Close's Philip Glass portrait">

<img src="https://raw.githubusercontent.com/seanstephenbrian/etch-a-sketch/main/img/screenshot-2.png" alt="Example sketch of Van Gogh's self-portrait">