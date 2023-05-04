const container = document.querySelector('.sketchbox');

for (i = 0; i < 256; i++) {
  let content = document.createElement('div');
  container.appendChild(content);
  content.classList.add('pixel');
  
  content.addEventListener('mouseover', function(e) {
    e.target.style.background = 'blue';
  });
}
