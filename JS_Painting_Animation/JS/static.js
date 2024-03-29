let defaultColors;
let colors;

    function setup() {
    // Set the canvas size to 1246 x 1280 pixels
    createCanvas(600, 600);
    
    // Default Color Palette 
    defaultColors = [
      color(29, 25, 22),         // Black
      color(204, 159, 66),       // Yellow
      color(182, 187, 193),      // Gray
      color(188, 26, 15),        // Red
      color(221, 212, 203),      // Tan
      color(114, 110, 111),      // Dark Gray
    ];

    // Copy default colors to colors array
    colors = [...defaultColors];

    noStroke();
}

function draw() {
    background(255);
    translate(width / 2, height / 2);

    // Draw black
    fill(colors[0]); // Black color
    push(); // Save the current transformation state
    rotate(-HALF_PI); // Rotate by -90 degrees (in radians)
    let blackVertices = [
        { x: -55, y: -250, label: 'B1' },
        { x: 255, y: -77, label: 'B2' },
        { x: 255, y: -50, label: 'B3' },
        { x: -255, y: -55, label: 'B4' },
        { x: 75, y: -250, label: 'B5' }
    ];
    quad(blackVertices[0].x, blackVertices[0].y, blackVertices[1].x, blackVertices[1].y, blackVertices[2].x, blackVertices[2].y, blackVertices[3].x, blackVertices[3].y);

    //gap filler
    triangle(blackVertices[0].x, blackVertices[0].y,blackVertices[1].x, blackVertices[1].y,blackVertices[4].x, blackVertices[4].y)
    pop(); // Restore the previous transformation state


    //draw yellow
    fill(colors[1]);
    push(); // Save the current transformation state
    rotate(-HALF_PI); // Rotate by -90 degrees (in radians)
    let yellowVertices = [
        { x: -55, y: -250, label: 'Y1' },
        { x: -255, y: -250, label: 'Y2' },
        { x: -153, y: -154, label: 'Y3' },
    ];
    //yellow triangle 
    triangle(yellowVertices[0].x, yellowVertices[0].y,yellowVertices[1].x, yellowVertices[1].y,yellowVertices[2].x, yellowVertices[2].y)
    pop(); // Restore the previous transformation state


    //draw gray
    fill(colors[2]);
    push(); // Save the current transformation state
    rotate(-HALF_PI); // Rotate by -90 degrees (in radians)
    let grayVertices = [
        { x: -50, y: -53, label: 'G1' },
        { x: -255, y: -55, label: 'G2' },
        { x: -259, y: -50, label: 'G3' },
        { x: -259, y: 155, label: 'G4' },

        { x: 255, y: -77, label: 'G5' },
        { x: 75, y: -250, label: 'G6' },
        { x: 255, y: -250, label: 'G7' }

    ];
    //tan triangle 
    quad(grayVertices[0].x, grayVertices[0].y,grayVertices[1].x, grayVertices[1].y,grayVertices[2].x, grayVertices[2].y,grayVertices[3].x, grayVertices[3].y)
    triangle(grayVertices[4].x, grayVertices[4].y,grayVertices[5].x, grayVertices[5].y,grayVertices[6].x, grayVertices[6].y)
    pop(); // Restore the previous transformation state


    // Draw red 
    fill(colors[3]); // Red color
    push(); // Save the current transformation state
    rotate(-HALF_PI); // Rotate by -90 degrees (in radians)
    let redVertices = [
        { x: -50, y: -53, label: 'R1' },
        { x: 255, y: 245, label: 'R2' },
        { x: -259, y: 250, label: 'R3' },
        { x: -259, y: 155, label: 'R4' },
        { x: 255, y: 250, label: 'R5' }
    ];
    quad(redVertices[0].x, redVertices[0].y, redVertices[1].x, redVertices[1].y, redVertices[2].x, redVertices[2].y, redVertices[3].x, redVertices[3].y);

    //gap filler
    triangle(redVertices[1].x, redVertices[1].y,redVertices[2].x, redVertices[2].y,redVertices[4].x, redVertices[4].y)

    //labeling
    pop(); // Restore the previous transformation state

    
    //draw tan
    fill(colors[4]);
    push(); // Save the current transformation state
    rotate(-HALF_PI); // Rotate by -90 degrees (in radians)
    let tanVertices = [
        { x: -255, y: -250, label: 'T1' },
        { x: -153, y: -154, label: 'T2' },
        { x: -259, y: -50, label: 'T3' },
        { x: -259, y: -250, label: 'T4' },

        { x: -50, y: -53, label: 'T5' },
        { x: 255, y: -50, label: 'T6' },
        { x: 255, y: 12, label: 'T7' },
        { x: 137, y: 130, label: 'T8' },

    ];
    //tan triangle 
    quad(tanVertices[0].x, tanVertices[0].y,tanVertices[1].x, tanVertices[1].y,tanVertices[2].x, tanVertices[2].y,tanVertices[3].x, tanVertices[3].y)

    quad(tanVertices[4].x, tanVertices[4].y,tanVertices[5].x, tanVertices[5].y,tanVertices[6].x, tanVertices[6].y,tanVertices[7].x, tanVertices[7].y)
    pop(); // Restore the previous transformation state



    //draw gray
    fill(colors[5]);
    push(); // Save the current transformation state
    rotate(-HALF_PI); // Rotate by -90 degrees (in radians)
    let darkGrayVertices = [
        { x: 255, y: 12, label: 'D1' },
        { x: 137, y: 130, label: 'D2' },
        { x: 255, y: 245, label: 'D3' },
    ];
    //tan triangle 
    triangle(darkGrayVertices[0].x, darkGrayVertices[0].y,darkGrayVertices[1].x, darkGrayVertices[1].y,darkGrayVertices[2].x, darkGrayVertices[2].y)
    pop(); // Restore the previous transformation state
}

