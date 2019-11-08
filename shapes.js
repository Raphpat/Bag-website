//Make seperate code for IE


//Starting variables
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var colour = "#369b9e";
var bagX = 150;
var bagY = 250;
var backgroundColour = "#e9edde";
var textColour = "#111111";
var text = "Your text here";

/**
 * A function that draws a line on a canvas
 * @param x1: starting x position
 * @param y1: starting y position
 * @param x2: ending x position
 * @param y2: starting y position
 */
function drawLine(x1, y1, x2, y2) {
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.closePath();
    ctx.stroke();
}
/**
 * A function that draws a quadrilateral on a canvas
 * @param x1: starting x position
 * @param y1: starting y position
 * @param x2: next x position
 * @param y2: next y position
 * @param x3: next x position
 * @param y3: next y position
 * @param x4: last x position
 * @param y4: last y position
 */
function drawQuadrilateral(x1, y1, x2, y2, x3, y3, x4, y4) {
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.lineTo(x3, y3);
    ctx.lineTo(x4, y4);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
}
/**
 * A function that draws an ellipse on a canvas
 * @param x: central x position
 * @param y: central y position
 * @param w: width of the ellipse
 * @param h: height of the ellipse
 * @param orientation: orientation of the ellipse in degrees
 * @param startAngle: angle at which the ellipse starts being drawn, in degrees
 * @param endAngle: angle at which the ellipse ends being drawn, in degrees
 */
function drawEllipse(x, y, w, h, orientation, startAngle, endAngle) {
    ctx.beginPath();
    ctx.ellipse(x, y, w / 2, h / 2, orientation * Math.PI / 180, startAngle * Math.PI / 180, endAngle * Math.PI / 180);
    ctx.fill();
    ctx.stroke();
}
/**
 * Draws the bag given the position and the colour.
 * @param bagX: central X coordinate
 * @param bagY: central Y coordinate
 * @param colour: bag colour, hex string
 **/
function drawBag(bagX, bagY, colour) {
    //Setting the colours
    ctx.fillStyle = colour;
    ctx.strokeStyle = "#000000";
    //Background rectangle
    ctx.fillRect(bagX - 77, bagY - 176, 167, 250);
    //3 lines
    drawLine(bagX - 43, bagY - 177, bagX - 50, bagY - 71);
    drawLine(bagX - 43, bagY - 177, bagX - 29, bagY - 90);
    drawLine(bagX + 58, bagY - 178, bagX + 49, bagY - 71);
    //Ellipse 
    drawEllipse(bagX + 90, bagY - 52, 23, 250, 0, 0, 360);
    //Filled arcs
    drawEllipse(bagX - 76, bagY - 52, 23, 250, 0, 90, 270);
    drawEllipse(bagX - 60, bagY - 176, 33, 9, 0, 180, 360);
    drawEllipse(bagX + 75, bagY - 176, 33, 9, 0, 180, 360);
    drawEllipse(bagX + 6, bagY + 71, 169, 25, 0, 0, 172);
    drawEllipse(bagX, bagY - 73, 100, 10, 0, 0, 180);
    //Empty arc
    ctx.fillStyle = backgroundColour;
    drawEllipse(bagX + 11, bagY - 90, 79, 10, 0, 0, 180);
    //White quadrilateral
    ctx.strokeStyle = backgroundColour;
    drawQuadrilateral(bagX - 43, bagY - 180, bagX - 28, bagY - 89, bagX + 49, bagY - 90, bagX + 57, bagY - 177);
}
/**
 * Draws the bag and the text onto the canvas
 **/
function drawCanvas() {
    //Erase previous canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    //Draw the bag
    drawBag(bagX, bagY, colour);
    //Draw the text that prompts to pick a colour for the bag and the text
    ctx.fillStyle = "#071a3d";
    ctx.textAlign = "center";
    ctx.font = "120% Trebuchet MS";
    ctx.fillText("Pick Bag Colour", 500, 150);
    ctx.fillText("Pick Logo Colour", 500, 350);
    //Draw the text onto the bag
    ctx.fillStyle = textColour;
    ctx.font = "9.6%";
    ctx.fillText(text, bagX-5, bagY);
}
/**
 * Sets the colour of the bag and redraws the canvas
 * @param newColour: hex string of the new colour
 **/
function setBagColour(newColour) {
    colour = newColour;
    drawCanvas();
}
/**
 * Sets the colour of the text on the bag and redraws the canvas
 * @param newColour: hex string of the new colour
 **/
function setTextColour(newColour) {
    textColour = newColour;
    drawCanvas();
}
/**
 * Sets the text shown on the bag and redraws the canvas
 **/
function submitForm() {
    var inputForm = document.getElementById("bagTextInput");
    text = inputForm.value;
    inputForm.value = "";
    inputForm.focus();
    drawCanvas();
}
/**
 *
 **/
function getBagStats() {
    var bagColourName = " ";
    var textColourName = " ";
    //Set a name for bag colour
    if (colour === "#369b9e") {
        bagColourName = "turquoise";
    } else if (colour === "#111111") {
        bagColourName = "black";
    } else if (colour === "#006938") {
        bagColourName = "dark green";
    } else if (colour === "#ba1200") {
        bagColourName = "dark red";
    } else if (colour === "#a0a08d") {
        bagColourName = "grey";
    } else {
        bagColourName = "white";
    }
    //Set a name for text colour
    if (textColour === "#369b9e") {
        textColourName = "turquoise";
    } else if (textColour === "#111111") {
        textColourName = "black";
    } else if (textColour === "#006938") {
        textColourName = "dark green";
    } else if (textColour === "#ba1200") {
        textColourName = "dark red";
    } else if (textColour === "#a0a08d") {
        textColourName = "grey";
    } else {
        textColourName = "white";
    }
    return (" Your bags will be " + bagColourName  + " and the text is " + textColourName + " and reads '" + text + "'.");
}

drawCanvas();