
const d = document;
const btnDark = document.querySelector('.darkMode')
    btnDark.addEventListener('click',()=>{
        document.body.classList.toggle('dark-mode');

        if(document.body.className === 'dark-mode'){
            btnDark.innerHTML = `
            <i class="fas fa-moon luna"></i>
            Light Mode
            `
        } else{
            btnDark.innerHTML = `
            <i class="fas fa-sun sol"></i>
            Dark Mode
            `
        }
         //Save LocalStorage
  if (d.body.classList.contains("dark-mode")) {
    localStorage.setItem("dark-mode", "true");
  } else {
    localStorage.setItem("dark-mode", "false");
  }
    });

    

//Obtenemos el modo Actual
if (localStorage.getItem("dark-mode") === "true") {
  document.body.classList.add("dark-mode");
  btnDark.innerHTML = `
    <i class="fas fa-moon luna"></i>
    Light Mode
  `;
} else {
  document.body.classList.remove("dark-mode");
  btnDark.innerHTML = `
    <i class="fas fa-sun sol"></i>
    Dark Mode
  `
}



