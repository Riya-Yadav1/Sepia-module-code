// const canvas = document.querySelector("canvas");
// const ctx = canvas.getContext("2d");

// canvas.width = window.innerWidth;
// canvas.height = window.innerHeight;

// ctx.fillStyle = "black";
// ctx.fillRect(0, 0, canvas.width, canvas.height);

// ctx.lineJoin = "round";
// ctx.lineCap = "round";
// ctx.lineWidth = 100;

// ctx.globalCompositeOperation = "destination-out";  // This erases the black canvas to reveal the video

// let isDrawing = false;
// let lastX = 0;
// let lastY = 0;

// function draw(e) {
//     if (!isDrawing) return;
//     ctx.beginPath();
//     ctx.moveTo(lastX, lastY);
//     ctx.lineTo(e.offsetX, e.offsetY);
//     ctx.stroke();
//     [lastX, lastY] = [e.offsetX, e.offsetY];
// }

// canvas.addEventListener("mousedown", (e) => {
//     isDrawing = true;
//     lastX = e.offsetX;
//     lastY = e.offsetY;
// });
// canvas.addEventListener("mouseup", () => (isDrawing = false));
// canvas.addEventListener("mouseout", () => (isDrawing = false));
// canvas.addEventListener("mousemove", draw);

const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

// Set canvas dimensions to the size of the window
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Fill the canvas with black initially
ctx.fillStyle = "black";
ctx.fillRect(0, 0, canvas.width, canvas.height);

// Set up drawing styles
ctx.globalCompositeOperation = "destination-out";  // Make areas transparent

// Function to draw a transparent circle at the mouse position
function drawCircle(x, y) {
    ctx.beginPath();
    ctx.arc(x, y, 50, 0, Math.PI * 2); // Circle of radius 50
    ctx.fill(); // Fill the circle (making it transparent due to destination-out)
}

// Event listener to draw circles at the mouse position
canvas.addEventListener("mousemove", (e) => {
    drawCircle(e.offsetX, e.offsetY); // Draw circle at the mouse position
});

// Instead of resetting the canvas to fully black, you can partially restore black at intervals
function restoreBlackOverlay() {
    ctx.fillStyle = "rgba(0, 0, 0, 0.03)";  // Partial transparency, gradually darkens the canvas
    ctx.fillRect(0, 0, canvas.width, canvas.height);
}

// Restore part of the black canvas every 100 milliseconds to prevent full video exposure
setInterval(() => {
    restoreBlackOverlay();
}, 100);
