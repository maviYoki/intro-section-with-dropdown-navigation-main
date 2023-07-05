const dropdownButtonList = document.querySelectorAll('.dropdown__button');
const dropdownMenuList = document.querySelectorAll('.dropdown-content');
const animationArrowList = document.querySelectorAll('.arrow-icon');
const colorButtonList = document.querySelectorAll('.dropdown__button');

dropdownButtonList.forEach((button, i) => {
   button.addEventListener('click', () => {
      const elementArray = [
         dropdownMenuList[i],
         animationArrowList[i],
         colorButtonList[i],
      ];

      elementArray.forEach(e => e.classList.toggle('open'));
   });
});
