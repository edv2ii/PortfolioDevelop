// typin animation 
var typed = new Typed(".typing",{
    strings:["Web Designer", "Web Developer","Graphic Designer"],
    typeSpeed: 100,
    BackSpeed: 60,
    loop:true
})

//click navMenu active
const nav =document.querySelector(".nav")
const navList = nav.querySelectorAll("li")
const aboutBtn = document.getElementById("about-btn")

totalNavList = navList.length
const allSection = document.querySelectorAll(".section"),
totalSection = allSection.length;

const aboutme = () => {
    const homesection = document.querySelector('.home'),
    aboutsection = document.querySelector('.about'),
    aboutlist = document.querySelector('#aboutlist'),
    homelist = document.querySelector('#homelist')

    homesection.classList.remove('active')
    homesection.classList.add('back-section')
    homelist.classList.remove('active')
    aboutlist.classList.add('active')
    aboutsection.classList.add('active')
}


    for (let i =0; i<totalNavList;i++)
    {
        const a = navList[i].querySelector("a");
        a.addEventListener("click", function() {
            for (let i=0;i<totalSection;i++) {
                allSection[i].classList.remove("back-section")
            }
            for (let j=0;j<totalNavList;j++) {
                if (navList[j].querySelector("a").classList.contains("active")) {
                    allSection[j].classList.add("back-section")
                }
                navList[j].querySelector("a").classList.remove("active");
                
            }
           this.classList.add("active")
           showSection(this);
           if(window.innerWidth < 1200) {
               asideSection();
           }
        })

    }
  
    function showSection(element){
        for (let i=0;i<totalSection;i++) {
            allSection[i].classList.remove("active")
        }
        const target = element.getAttribute("href").split("#")[1]
        document.querySelector("#" + target).classList.add("active")
        
        
    }

    const navTogglerBtn = document.querySelector(".nav-toggler"),
    aside = document.querySelector(".aside");
    navTogglerBtn.addEventListener("click", () => {
        asideSection()
    })
    function asideSection() {
        aside.classList.toggle("open");
        navTogglerBtn.classList.toggle("open")
        for(let i=0; i<totalSection; i++) {
            allSection[i].classList.toggle("open")
        }
    }

