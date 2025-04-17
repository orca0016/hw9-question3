const header = document.getElementById("header");
const buttons = document.querySelectorAll(".next");
const slider = document.getElementById("slider");
let currentStep = 1;

const renderHeader = () => {
  header.innerHTML = "";
  for (let i = 0; i < 3; i++) {
    // ---------
    const stackStep = document.createElement("div");
    stackStep.classList.add("stack-step");

    // ---------
    const blueCircleBtn = document.createElement("span");
    blueCircleBtn.classList.add("blue-circle-btn");
    if (currentStep >= i + 2) blueCircleBtn.style.backgroundColor = "#15afff";

    // ---------
    const number = document.createElement("div");
    number.classList.add("number");
    number.innerText = i + 1;

    if (currentStep >= i + 2) number.style.display = "none";

    // ---------
    const icon = document.createElement("div");
    icon.classList.add("icon");
    icon.innerHTML = '<i class="fa fa-check" aria-hidden="true"></i>';
    icon.style.display = "none";
    icon.style.marginTop = "3px";
    if (currentStep === i + 2 || currentStep >= i + 2)
      icon.style.display = "block";
    blueCircleBtn.appendChild(number);
    blueCircleBtn.appendChild(icon);

    // ---------
    const step = document.createElement("span");
    step.textContent = "step";
    step.style.color = "#606567";
    if (currentStep === i + 2 || currentStep >= i + 2)
      step.style.color = "#ffff";
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

const renderSlide = () => {
  slider.innerHTML = "";
  for (let i = 0; i < 4; i++) {
    const box = document.createElement("div");
    box.classList.add("box");
    const content = document.createElement("div");
    content.innerHTML = `<p>steps ${i + 1}</p>
      <h3>${i+1}</h3>
    `;
    if (i===3) content.innerHTML = `<p>final</p>
      <h3>${i+1}</h3>
    `;
    content.classList.add("content");
    box.appendChild(content);

    const nextButton = document.createElement("button");
    nextButton.innerText = "Next";
    nextButton.classList.add("next");
    nextButton.addEventListener("click", () => {
      handleSlidePage("next");
    });
    if (i === 3) nextButton.style.display = "none";
    box.appendChild(nextButton);

    const prevButton = document.createElement("button");
    prevButton.innerText = "Previous";
    prevButton.classList.add("previous");
    if (i === 0 || i === 3) prevButton.style.display = "none";
    prevButton.addEventListener("click", () => {
      handleSlidePage("prev");
    });
    box.appendChild(prevButton);

    const resetButton = document.createElement("button");
    resetButton.innerText = "Reset";
    resetButton.classList.add("reset");
    if (i !== 3) resetButton.style.display = "none";
    resetButton.addEventListener("click", () => {
      handleSlidePage("reset");
    });
    box.appendChild(resetButton);

    slider.appendChild(box);
  }
};
const handleSlidePage = (operation) => {
  if (operation === "next") {
    slideAnimation(currentStep);
    currentStep++;
    renderHeader();
  } else if (operation === "prev") {
    currentStep--;
    renderHeader();
    slideAnimation(currentStep - 1);
  } else {
    currentStep = 1;
    renderHeader();
    slideAnimation(currentStep - 1);
  }
};
const slideAnimation = (step) => {
  slider.style.transform = `translateX(-${100 * step}%)`;
};

renderHeader();
renderSlide();
