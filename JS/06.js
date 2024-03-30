
const button = document.getElementById('clickButton');
const clickCount = document.getElementById('clickCount');


let count = 0;


button.addEventListener('click', () => {
 
  count++;


  clickCount.textContent = 'Número de Cliques: ' + count;
});
