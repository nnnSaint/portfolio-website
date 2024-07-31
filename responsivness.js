function navmenu() {
  const toggle = document.querySelector(".responsive-nav");
  const menu = document.querySelector(".nav-bar");
  const menuclose = document.querySelector(".responsive-close");
  toggle.addEventListener("click", function () { //activates function based on action (click)
    menu.classList.add("active"); // makes drop down menu appear
    
  });
  menuclose.addEventListener("click", function () { 
    menu.classList.remove("active"); // closes drop down menu
  });
}
