const container = document.querySelector('.sketchbox');

const btn = document.querySelector('.pixels');

const colorRed = document.querySelector('.colorRed');
const colorGreen = document.querySelector('.colorGreen');
const colorBlue = document.querySelector('.colorBlue');
const colorCustom = document.querySelector('.colorCustom');


const maxSize = 600;

let color = 'white';



btn.addEventListener('click', function(e) {
    let i = prompt("Set grid size: ");
    grid(i);
});

colorRed.addEventListener('click', function() {
    color =  'red';
    return;
});

colorGreen.addEventListener('click', function() {
    color =  'green';
    return;
});


colorBlue.addEventListener('click', function() {
    color =  'blue';
    return;
});

colorCustom.addEventListener('click', function() {
    color =  prompt("Set color: ");
    return;
});

function grid(i) {
    container.innerHTML = "";
  
    const pixelWidth = Math.floor((maxSize - (i-1)*2)/i);
    const rowHeight = pixelWidth * i + (i-1)*2;
  
    for (let j = 0; j < i; j++) {
      const row = document.createElement("div");
      row.style.display = "flex";
      row.style.height = `${pixelWidth}px`;
      container.appendChild(row);
  
      for (let k = 0; k < i; k++) {
        const pixel = document.createElement("div");
        pixel.style.width = `${pixelWidth}px`;
        pixel.style.height = `${pixelWidth}px`;
        pixel.style.border = "1px solid black";
        row.appendChild(pixel);
  
        pixel.addEventListener('mouseover', function(e) {
          e.target.style.background = color;
        });
      }
    }
  
    container.style.height = `${rowHeight}px`;
  }
  

grid(16)