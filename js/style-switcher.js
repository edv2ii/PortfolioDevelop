// toggle style switcher

const styleSwitcherToggle = document.querySelector(".style-switcher-toggle")
styleSwitcherToggle.addEventListener("click", () => {
    document.querySelector(".style-switcher").classList.toggle("open");
})

window.addEventListener("scroll", () => {
    if(document.querySelector(".style-switcher").classList.contains("open"))
    {
        document.querySelector(".style-switcher").classList.remove("open")
    }
    
})
// Change color
const alternateStyles = document.querySelectorAll(".alternate-style");
function setActiveStyle(color) {
    alternateStyles.forEach((style) => {
        
        if (color === style.getAttribute("title")) {

            style.removeAttribute("disabled");
        }
        else {
            style.setAttribute("disabled","true");
        }
    })
}

// Theme light and dark 
const dayNight = document.querySelector('.day-night');
dayNight.addEventListener("click", () => {
    dayNight.querySelector("i").classList.toggle("fa-sun");
    document.body.classList.toggle("dark");
})
window.addEventListener("load", () => {
    if (document.body.classList.contains("dark"))
    {
        dayNight.querySelector("i").classList.add("fa-sun");
    }
    else {
        dayNight.querySelector("i").classList.add("fa-moon");
    }
})
// Active list Menu
    // const list = document.querySelectorAll('a');
    //     function activeLink() {
    //         list.forEach((item) =>
    //         item.classList.remove('active'));
    //         this.classList.add('active')
    //     }
    //     list.forEach((item) =>
    //     item.addEventListener('click', activeLink))




        