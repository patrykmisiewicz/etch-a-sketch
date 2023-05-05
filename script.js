const container = document.querySelector('.sketchbox');

const btn = document.querySelector('.pixels');

// colors variables

const colorRed = document.querySelector('.colorRed');
const colorGreen = document.querySelector('.colorGreen');
const colorBlue = document.querySelector('.colorBlue');
const colorCustom = document.querySelector('.colorCustom');
const colorRandom = document.querySelector('.random');

const clear = document.querySelector('.clear');

let color = 'white';

const maxSize = 600;

// custom grid size function

btn.addEventListener('click', function(e) {
    let i = prompt("Set grid size: ");
    if (i > 100) {
      alert("Maxium size is 100!");
    } else if (1 <= i) {
    makeGrid(i);
  } else {
    alert("You need to enter a number!")
  }
});

// RED color button

colorRed.addEventListener('click', function() {
    color =  'red';
    return;
});

// GREEN color button

colorGreen.addEventListener('click', function() {
    color =  'green';
    return;
});

// BLUE color button

colorBlue.addEventListener('click', function() {
    color =  'blue';
    return;
});

// CUSTOM color button

colorCustom.addEventListener('click', function() {
  color =  prompt("Set color: ");
  color = color.toLowerCase();
  return;
});

// RAINBOW color button

function getRandomColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  const a = Math.random().toFixed(2); // set the alpha value between 0 and 1 with 2 decimal places
  return `rgba(${r}, ${g}, ${b}, ${a})`;
};

colorRandom.addEventListener('click', function () {
  color = 'random';
});



function makeGrid(i) {
    container.innerHTML = "";
  
    const pixelWidth = Math.floor((maxSize - (i-1)*2)/i);
    const rowHeight = pixelWidth * i + (i-1)*2;
  
    for (let j = 0; j < i; j++) {                    // Row function
      const row = document.createElement('div');
      row.style.display = 'flex';
      row.style.height = `${pixelWidth}px`;
      container.appendChild(row);
  
      for (let k = 0; k < i; k++) {                  // Pixel function
        const pixel = document.createElement('div');
        pixel.style.width = `${pixelWidth}px`;
        pixel.style.height = `${pixelWidth}px`;
        pixel.style.border = '1px solid black';
        pixel.style.background = 'white'
        row.appendChild(pixel);
  
        pixel.addEventListener('mouseover', function(e) {
          if (color === 'random') {
            e.target.style.background = getRandomColor();
          } else {
            e.target.style.background = color;
          }
        });

        clear.addEventListener('click', function() { // Clear function
          pixel.style.background = 'white';
        });

      }
    }
    container.style.height = `${rowHeight}px`;
  };
  

makeGrid(16)