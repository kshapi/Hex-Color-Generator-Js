const generateBtn = document.querySelector('.genBtn');
const copyBtn = document.querySelector('.copyBtn');
const demo = document.querySelector('.color');
const hexCode = document.querySelector('.hex-code');


//Color Generater
const clr = () => {
  //Geerate Color
  const randomColor = '#' + Math.floor(Math.random()*12345678 ).toString(16);
  
  //demo to show user
  demo.style.background = randomColor
  hexCode.innerText = randomColor;
  
  copyBtn.innerText = 'Copy';
};
clr();
generateBtn.addEventListener('click',clr);


//Copy hex Code
const copy = () => {
  //copy hex in clipboard
  navigator.clipboard.writeText(hexCode.innerText);
  
  copyBtn.innerText = 'Copied';
  
};

copyBtn.addEventListener('click',copy);

//Kshapi