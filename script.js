const navBtns = document.body.querySelectorAll(".tableNav a");
const headerImg = document.body.querySelector(".imgHeader ")
/****Rwd****/
/*****Slider header *****/


const slideListHeader = [{
        img: "img/imgNavDesktop1b.jpg",
        textH1: "Praca Zespołowa",
        arrayTxtSpan: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Ipsa corporis aut accusantium nihil illum fugiat dolorum nam id modi sit!"
    },
    {
        img: "img/imgNavDesktop2b.jpg",
        textH1: "Myślenie Kreatywne",
        arrayTxtSpan: "Porem ipsum dolor sit amet consectetur adipisicing elit.Ipsa corporis aut accusantium nihil illum fugiat dolorum nam id modi sit!",
    },
    {
        img: "img/imgNavDesktop3b.jpg",
        textH1: "Burza Mózgów",
        arrayTxtSpan: "Zorem ipsum dolor sit amet consectetur adipisicing elit.Ipsa corporis aut accusantium nihil illum fugiat dolorum nam id modi sit!",
    }
];
/**** var to Header slider add letter ******/
const image = document.querySelector('img.slider');
const h1 = document.querySelector('h1.slider');
const spnText = document.querySelector('span.slider');
let active = 0;
let activeLetter = 0;
let activeText = 0;
const timeSlide = 5000;
let indexTxt = 0;
const timeLetter = 20;
/**** Write on Img Header *****/
const addLetter = () => {
    activeLetter++;
    spnText.textContent += slideListHeader[activeText].arrayTxtSpan[activeLetter - 1];

    if (activeLetter === slideListHeader[activeText].arrayTxtSpan.length) {
        clearInterval(indexInterval)

        activeText++;
        if (activeText === 3) {
            activeText = 0;
        }
        return setTimeout(() => {
            activeLetter = 0;
            spnText.textContent = '';
            addLetter();
            active++;

            if (active === slideListHeader.length) {
                active = 0;
            }
            image.src = slideListHeader[active].img;
            h1.textContent = slideListHeader[active].textH1;
        }, timeSlide)
    };
    setTimeout(addLetter, timeLetter)
}
addLetter();
/***** Slider ******/
const changeSlide = () => {
    active++;
    if (active === slideListHeader.length) {
        active = 0;
    }
    image.src = slideListHeader[active].img;
    h1.textContent = slideListHeader[active].textH1;

    spnText.textContent = '';
}

let indexInterval = setInterval(changeSlide, timeSlide);

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