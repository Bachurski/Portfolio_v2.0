const navBtns = document.body.querySelectorAll(".tableNav a");
const headerImg = document.body.querySelector(".imgHeader ")
/****Rwd****/
/*****Slider header *****/


const slideListHeader = [{
        img: "img/imgNavDesktop1b.jpg",
        textH1: "Praca Zespołowa",
    },
    {
        img: "img/imgNavDesktop2b.jpg",
        textH1: "Myślenie Kreatywne",
    },
    {
        img: "img/imgNavDesktop3b.jpg",
        textH1: "Burza Mózgów",
    }
];

const arrayTxtSpan = ["Lorem ipsum dolor sit amet consectetur adipisicing elit.Ipsa corporis aut accusantium nihil illum fugiat dolorum nam id modi sit!", "Porem ipsum dolor sit amet consectetur adipisicing elit.Ipsa corporis aut accusantium nihil illum fugiat dolorum nam id modi sit!", "Zorem ipsum dolor sit amet consectetur adipisicing elit.Ipsa corporis aut accusantium nihil illum fugiat dolorum nam id modi sit!"]
const image = document.querySelector('img.slider');
const h1 = document.querySelector('h1.slider');
const spnText = document.querySelector('span.slider');
let active = 0;
let activeLetter = 0;
let activeText = 0;
const timeSlide = 5000;
let indexTxt = 0;
const timeLetter = 20;
const addLetter = () => {
    spnText.textContent += arrayTxtSpan[activeText][activeLetter];
    activeLetter++;
    if (activeLetter === arrayTxtSpan[activeText].length) {
        if (changeSlide) {
            activeText++
        };
        if (activeText === arrayTxtSpan.length) {
            activeText = 0;
        }
        return setTimeout(() => {
            activeLetter = 0;
            spnText.textContent = '';
            addLetter();
        }, timeSlide - (arrayTxtSpan[activeText].length * timeLetter) - 74);

    }
    setTimeout(addLetter, timeLetter)
}
setTimeout(addLetter(), timeSlide);
const changeSlide = () => {
    active++;
    if (active === slideListHeader.length) {
        active = 0;
    }
    image.src = slideListHeader[active].img;
    h1.textContent = slideListHeader[active].textH1;
    spnText.textContent = ''
}
setInterval(changeSlide, timeSlide);





navBtns.forEach(navBtn => {
    const noRefresh = (e) => {
        e.preventDefault();
    }
    navBtn.addEventListener("click", noRefresh)
});

/****Projekty******/
const projektDivy = document.body.querySelectorAll(".containerDiv div");

for (let i = 0; i < projektDivy.length; i++) {
    if (i) {
        projektDivy.forEach(div => {
            div.classList.add('activeDiv');
        });
    }
}
/*** Text on Img Header *******/





/******Projekty showdiv *****/

// window.addEventListener("scroll", function () {
//     if (projektyDivy.offsetHeight = window.innerHeight) {}
// })