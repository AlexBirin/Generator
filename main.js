const block = document.querySelector('.js-block'),
color = document.querySelector('.js-color'),
btn = document.querySelector('.js-btn'),
hex = '0123456789ABCDEF';

console.log(hex[0]);
console.log(hex[15]);

let randomColor ='#';

const gerRandomoColor = () => {
    randomColor ='#';
   //console.log(Math.random());
   //console.log(Math.floor (Math.random()*hex.lenght));
   for (let i=0; i<6; i++){
    //randomColor = randomColor + hex[Math.floor(Math.random()*hex.length)];
    randomColor += hex[Math.floor(Math.random()*hex.length)];
   }
   console.log(randomColor);

   
}

 btn.addEventListener('click', () => {
    gerRandomoColor();
    block.style.backgroundColor = randomColor;
    block.style.boxShadow = `0px  5px 10px 2px ${randomColor}`;
    color.innerHTML = randomColor;
 });