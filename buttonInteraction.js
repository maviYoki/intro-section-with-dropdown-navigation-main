const buttonNav = document.querySelectorAll('.dropdown__button');
const dropdownMenu = document.querySelectorAll('.dropdown-content');

for (let i = 0; i < buttonNav.length; i++) {
   function toggleDropdown() {
      dropdownMenu[i].classList.toggle('block');
   }
   buttonNav[i].addEventListener('click', toggleDropdown);
}
