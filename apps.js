"use strict";

const bgMain = document.querySelector(".background__main");

const bgAnimation = function () {
  const content = `<div class="row">
    <div>
      <i class="fal fa-cloud-meatball"></i>
      <i class="fal fa-french-fries"></i>
      <i class="fal fa-utensil-fork"></i>
      <i class="fal fa-popcorn"></i>
      <i class="fal fa-utensils-alt"></i>
      <i class="fal fa-cheeseburger"></i>
      <i class="fal fa-turkey"></i>
      <i class="fal fa-taco"></i>
      <i class="fal fa-soup"></i>
      <i class="fal fa-pizza-slice"></i>
      <i class="fal fa-pizza"></i>
      <i class="fal fa-meat"></i>
      <i class="fal fa-hotdog"></i>
      <i class="fal fa-fish-cooked"></i>
      <i class="fal fa-egg-fried"></i>
      <i class="fal fa-drumstick"></i>
      <i class="fal fa-cheese-swiss"></i>
      <i class="fal fa-corn"></i>
      <i class="fal fa-bacon"></i>
      <i class="fal fa-bread-slice"></i>
      <i class="fal fa-salad"></i>
      <i class="fal fa-pepper-hot"></i>
      <i class="fal fa-pumpkin"></i>
      <i class="fal fa-croissant"></i>
    </div>
    <div>
      <i class="fal fa-cloud-meatball"></i>
      <i class="fal fa-french-fries"></i>
      <i class="fal fa-utensil-fork"></i>
      <i class="fal fa-popcorn"></i>
      <i class="fal fa-utensils-alt"></i>
      <i class="fal fa-cheeseburger"></i>
      <i class="fal fa-turkey"></i>
      <i class="fal fa-taco"></i>
      <i class="fal fa-soup"></i>
      <i class="fal fa-pizza-slice"></i>
      <i class="fal fa-pizza"></i>
      <i class="fal fa-meat"></i>
      <i class="fal fa-hotdog"></i>
      <i class="fal fa-fish-cooked"></i>
      <i class="fal fa-egg-fried"></i>
      <i class="fal fa-drumstick"></i>
      <i class="fal fa-cheese-swiss"></i>
      <i class="fal fa-corn"></i>
      <i class="fal fa-bacon"></i>
      <i class="fal fa-bread-slice"></i>
      <i class="fal fa-salad"></i>
      <i class="fal fa-pepper-hot"></i>
      <i class="fal fa-pumpkin"></i>
      <i class="fal fa-croissant"></i>
    </div>
  </div>`;

  bgMain.innerHTML = "";
  for (let i = 0; i < 22; i++) {
    bgMain.insertAdjacentHTML("afterbegin", content);
  }
};

bgAnimation();
