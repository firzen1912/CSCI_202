function resetColors() {
  // Reset colors to default
  colors = [...defaultColors];
  updateColorInputs();
}

function randomColor() {
  for (let i = 0; i < colors.length; i++) {
    colors[i] = color(random(255), random(255), random(255));
  }
  updateColorInputs();
}

// Function to manually update colors based on user input
function updateColors() {
  colors[0] = color(document.getElementById('blackColorInput').value);
  colors[1] = color(document.getElementById('yellowColorInput').value);
  colors[2] = color(document.getElementById('grayColorInput').value);
  colors[3] = color(document.getElementById('redColorInput').value);
  colors[4] = color(document.getElementById('tanColorInput').value);
  colors[5] = color(document.getElementById('darkGrayColorInput').value);
  updateColorInputs();
}

// Helper function to update color inputs
function updateColorInputs() {
  document.getElementById('blackColorInput').value = rgbToHex(colors[0].levels);
  document.getElementById('yellowColorInput').value = rgbToHex(colors[1].levels);
  document.getElementById('grayColorInput').value = rgbToHex(colors[2].levels);
  document.getElementById('redColorInput').value = rgbToHex(colors[3].levels);
  document.getElementById('tanColorInput').value = rgbToHex(colors[4].levels);
  document.getElementById('darkGrayColorInput').value = rgbToHex(colors[5].levels);
}

// Helper function to convert RGB values to hex
function rgbToHex(rgb) {
  return "#" + componentToHex(rgb[0]) + componentToHex(rgb[1]) + componentToHex(rgb[2]);
}

function componentToHex(c) {
  var hex = c.toString(16);
  return hex.length == 1 ? "0" + hex : hex;
}
