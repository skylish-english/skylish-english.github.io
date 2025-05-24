var colors = [
  [255, 255, 255],   // white
  [173, 216, 230],   // light blue
  [135, 206, 250],   // light sky blue
  [60, 140, 178],    // medium blue (#3C8CB2)
  [44, 83, 117],     // dark blue (#2C5375)
  [0, 0, 139]        // dark navy blue
];

var step = 0;
var colorIndices = [0, 1, 2, 3];
var gradientSpeed = 0.002;

function updateGradient() {
  if (typeof $ === 'undefined') return;

  var c0_0 = colors[colorIndices[0]];
  var c0_1 = colors[colorIndices[1]];
  var c1_0 = colors[colorIndices[2]];
  var c1_1 = colors[colorIndices[3]];

  var istep = 1 - step;
  var r1 = Math.round(istep * c0_0[0] + step * c0_1[0]);
  var g1 = Math.round(istep * c0_0[1] + step * c0_1[1]);
  var b1 = Math.round(istep * c0_0[2] + step * c0_1[2]);
  var color1 = "rgb(" + r1 + "," + g1 + "," + b1 + ")";

  var r2 = Math.round(istep * c1_0[0] + step * c1_1[0]);
  var g2 = Math.round(istep * c1_0[1] + step * c1_1[1]);
  var b2 = Math.round(istep * c1_0[2] + step * c1_1[2]);
  var color2 = "rgb(" + r2 + "," + g2 + "," + b2 + ")";

  $('.gradient').css({
    background: "linear-gradient(to right, " + color1 + ", " + color2 + ")",
    color: "#000000"
  });

  step += gradientSpeed;
  if (step >= 1) {
    step %= 1;
    colorIndices[0] = colorIndices[1];
    colorIndices[2] = colorIndices[3];

    do {
      colorIndices[1] = (colorIndices[1] + Math.floor(1 + Math.random() * (colors.length - 1))) % colors.length;
    } while (colorIndices[1] === colorIndices[0]);

    do {
      colorIndices[3] = (colorIndices[3] + Math.floor(1 + Math.random() * (colors.length - 1))) % colors.length;
    } while (colorIndices[3] === colorIndices[2]);
  }
}

setInterval(updateGradient, 10);
