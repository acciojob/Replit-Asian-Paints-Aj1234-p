const gridContainer = document.querySelector('#grid-container');
const container = document.querySelector('.container');
const inputId  = document.querySelector('#block_id');
const inputColor = document.querySelector('#colour_id');
const itemContainer = document.querySelectorAll('.item');
const changeColourButton = document.querySelector('#change-button');
const resetColourButton = document.querySelector('#Reset');

changeColourButton.addEventListener('click',(e)=>{
  let id = `grid-item-${parseInt(inputId.value)}`;
  let color = inputColor.value; 
  itemContainer.forEach(el=>{
    if(el.id===id) el.style.backgroundColor = `${color}`;
    else el.style.backgroundColor = 'transparent';
  });
})

resetColourButton.addEventListener('click',(e)=>{
  itemContainer.forEach(el =>el.style.backgroundColor = 'transparent');
})