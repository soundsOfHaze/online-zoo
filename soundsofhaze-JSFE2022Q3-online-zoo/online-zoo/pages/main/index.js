const burger = document.querySelector('.burger');
const popUp = document.querySelector('.popUpContent');
const exit = document.querySelector('.closeX');
const pops = document.querySelector('.pops');
const gg = document.querySelectorAll('.pops');
const prev = document.querySelector('.arrLeft');
const next = document.querySelector('.arrRight');
const cards = document.querySelectorAll('.gg');
const pets = document.querySelector('.images');
const wrapper = document.querySelector('.ggpet');
const carousel = document.querySelector('.carousel');
const kart = document.querySelectorAll('.card');

// kart.forEach((e) => preventDefault(e));
let x = window.getComputedStyle(pets).width;
// console.log(burger);

function openModale(event) {
  popUp.style.display = 'unset';
  pops.style.transform = 'none';
}

function closeD(event) {
  if (event.target === popUp || event.target === exit) {
    popUp.style.display = 'none';
    pops.style.transform = 'translateY(-100%)';
    console.log(event.target);
  }
}

burger.addEventListener('click', openModale);
popUp.addEventListener('click', closeD);
// let b = `translate(-${pets.offsetWidth}px)`;
// let a = `translate(${pets.offsetWidth}px)`;
let direction = 0;
let boxes = document.querySelectorAll('.images');
let clickable;

prev.addEventListener('click', function () {
  let a = `translate(${pets.offsetWidth}px)`;
  wrapper.style.pointerEvents = 'none';
  if (clickable === true) {
    direction = 1;
    carousel.style.justifyContent = 'flex-end';
    wrapper.style.transform = a;
    boxes = document.querySelectorAll('.images');
    console.log(boxes.length);
    // if (boxes.length >= 3) {
    //   wrapper.removeChild(wrapper.lastElementChild);
    // }
  }
});

next.addEventListener('click', function () {
  let b = `translate(-${pets.offsetWidth}px)`;
  wrapper.style.pointerEvents = 'none';
  if (clickable === true) {
    direction = -1;
    carousel.style.justifyContent = 'flex-start';
    wrapper.style.transform = b;
    boxes = document.querySelectorAll('.images');
    console.log(boxes.length);
    // if (boxes.length >= 3) {
    //   wrapper.removeChild(wrapper.firstElementChild);
    // }
  }
});

wrapper.addEventListener('transitionend', function () {
  wrapper.style.pointerEvents = 'unset';
  clickable = true;
  wrapper.style.transition = 'none';
  wrapper.style.transform = 'translate(0)';
  setTimeout(function () {
    wrapper.style.transition = 'all 1s linear';
  });
});

wrapper.addEventListener('transitionstart', function () {
  clickable = false;
  let clone = pets.cloneNode(true);
  if (direction === -1 && boxes.length < 3) {
    wrapper.append(clone);
    if (boxes.length >= 3) {
      wrapper.removeChild(wrapper.firstElementChild);
    }
  } else if (direction === 1 && boxes.length < 3) {
    wrapper.prepend(clone);
    if (boxes.length >= 3) {
      wrapper.removeChild(wrapper.lastElementChild);
    }
  }
});
console.log(pets.offsetWidth);

const testis = document.querySelector('.testimomialContent');
const tInput = document.querySelector('.inputVal');
const test = document.querySelector('.testimonial');
let val = tInput.value;
tInput.addEventListener('input', function () {
  val = tInput.value;
  testis.style.transform = `translate(-${val * (test.offsetWidth + 20)}px)`;
  console.log(testis);
});

const testPop = document.querySelectorAll('.gradWrapper');
const popUpTest = document.querySelector('.popUpContentTest');
const popUpClose = document.querySelector('.popTestimomial');
const exitTestim = document.querySelector('.exitTestim');

function openModaleTest(event) {
  popUpTest.style.display = 'unset';
}

testPop.forEach((e) => e.addEventListener('click', openModaleTest));

popUpTest.addEventListener('click', function closeTestim(event) {
  if (event.target === popUpClose || event.target === exitTestim) {
    popUpTest.style.display = 'none';
  }
  console.log(event.target);
});
