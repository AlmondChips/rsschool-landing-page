const [btnLeft, btnRight] = document.querySelectorAll(".slider button");
try {
  [btnLeft, btnRight].forEach((btn) =>
    btn.addEventListener("click", moveSlider),
  );
} catch (error) {}

const getSliderNodes = () => document.querySelectorAll(".slider-item");

const slide = (direction) => [
  { transform: `translateX(${direction === "right" ? "" : "-"}100%)` },
];
const timing = {
  duration: 300,
  iterations: 1,
};

/**
 * @param {Event} event
 */
async function moveSlider(event) {
  const target = event.currentTarget;
  target.removeEventListener("click", moveSlider);
  const sliderItems = getSliderNodes();
  const parent = sliderItems[0].parentNode;

  const direction = target.classList[1].split("arrow-")[1];

  sliderItems.forEach((item) => {
    item.animate(slide(direction), timing).finished.then(() => {
      replaceItems(direction, sliderItems, parent);
      updateIndicator();
      target.addEventListener("click", moveSlider);
    });
  });
}

function updateIndicator() {
  const indicators = document.querySelectorAll(".choice-container .selector");
  const currentIndexIndicator = getSliderNodes()[1].classList[1];

  indicators.forEach((item, index) => {
    item.classList.remove("selected");
    if (index === currentIndexIndicator - 1) item.classList.add("selected");
  });
}

function replaceItems(direction, sliderItems, parent) {
  const lastIndex = sliderItems.length - 1;
  if (direction === "right") {
    const lastNode = sliderItems[lastIndex];
    parent.insertBefore(lastNode, sliderItems[0]);
  } else {
    const firstNode = sliderItems[0];
    parent.appendChild(firstNode);
  }
}
