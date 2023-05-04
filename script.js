const container = document.querySelector('.sketchbox');

const btn = document.querySelector('.pixels');

const maxSize = 432;

btn.addEventListener('click', function (e) {
    let i = prompt("Set grid size: ");
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
    grid(i);
});

function grid(i) {
    for (let j = 0; j < i * i; j++) {
        let content = document.createElement('div');
        container.appendChild(content);
        content.classList.add('pixel');
        const pixelWidth = Math.floor((maxSize - (i-1)*2)/i);
        content.style.width = `${pixelWidth}px`;
        content.style.height = `${pixelWidth}px`
        content.addEventListener('mouseover', function(e) {
            e.target.style.background = 'blue';
        });
    }
}

grid(16)