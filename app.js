const header = document.getElementById("header");
const buttons = document.querySelectorAll('.next')
let currentStep = 1;
console.log(buttons);

const renderHeader = () => {
    header.innerHTML = ''
  for (let i = 0; i < 3; i++) {
    
    // ---------
    const stackStep = document.createElement("div");
    stackStep.classList.add("stack-step");

    // ---------
    const blueCircleBtn = document.createElement("span");
    blueCircleBtn.classList.add("blue-circle-btn");
    if (currentStep === i+1 || currentStep >= i+1) blueCircleBtn.style.backgroundColor='#15afff'
    
    // ---------
    const number = document.createElement("div");
    number.classList.add("number");
    number.innerText = i + 1;

    if (currentStep === i+1 || currentStep >= i+1) number.style.display='none'
    
    // ---------
    const icon = document.createElement("div");
    icon.classList.add("icon");
    icon.innerHTML = '<i class="fa fa-check" aria-hidden="true"></i>';
    icon.style.display='none'
    icon.style.marginTop='3px'
    if (currentStep === i+1 || currentStep >= i+1) icon.style.display='block'
    blueCircleBtn.appendChild(number);
    blueCircleBtn.appendChild(icon);

    // ---------
    const step = document.createElement("span");
    step.textContent = "step";
    step.style.color='#606567'
    if (currentStep === i+1 ||currentStep >= i+1) step.style.color='#ffff'
    // ---------
    const squareShape = document.createElement("div");
    squareShape.classList.add("square-shape");
    squareShape.innerText = i + 1;

    // ---------
    const dashLine = document.createElement("div");
    dashLine.classList.add("dash-line");

    // ---------
    stackStep.appendChild(blueCircleBtn);
    stackStep.appendChild(step);
    stackStep.appendChild(squareShape);
    if (i !== 2) stackStep.appendChild(dashLine);
    
    // ---------
    header.appendChild(stackStep);  
  }
};

buttons[0].addEventListener('click' , ()=>{
    currentStep++
    console.log(currentStep);
    renderHeader();
})
renderHeader();
