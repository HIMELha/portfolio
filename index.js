let menu = document.querySelector("#menu");
let navbar = document.querySelector(".navbar");
let close_nav = document.querySelector("#close-menu");

let tabs = document.querySelectorAll('.tab-btn');
let contents = document.querySelectorAll(".tab-content");

    menu.onclick = () => {
        navbar.classList.add('actives');
    }
    close_nav.onclick = () => {
      navbar.classList.remove('actives');
     }
    
tabs.forEach((tab, index) => {
 
  tab.addEventListener('click', () => {
    tabs.forEach(tab => {tab.classList.remove('active')})
    tab.classList.add('active');
    contents.forEach(content=>{content.classList.remove('active')});
    contents[index].classList.add('active');



  });

});

     