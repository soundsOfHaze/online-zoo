const butts = document.querySelectorAll('.am');
const prices = document.querySelectorAll('.priceDon');
const input = document.querySelector('.anotherAm');
const burger = document.querySelector('.burger');
const popUp = document.querySelector('.popUpContent');
const exit = document.querySelector('.closeX');
const pops = document.querySelector('.pops');
const gg = document.querySelectorAll('.pops');
console.log(butts);

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

prices.forEach((e) => {
  if (e.closest('.am')) {
    e.addEventListener('click', function () {
      input.value = e.textContent.substring(1);
      console.log(e.textContent.substring(1));
    });
  }
});

// butts.forEach((e) => {
//   e.addEventListener('click', function () {
//     if (e.closest('.priceDon')) {
//       prices.forEach((el) => {
//         el.addEventListener('click', function () {
//           input.value = el.textContent.substring(1);
//           console.log(el.textContent.substring(1));
//         });
//       });
//     }
//   });
// });

console.log(input);
