const navBtns = document.body.querySelectorAll(".tableNav a");
const headerImg = document.body.querySelector(".imgHeader ")
/****Rwd****/
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
const spnText = document.querySelector('.textSpan');
const txt = "Lorem ipsum dolor sit amet consectetur adipisicing elit.Ipsa corporis aut accusantium nihil illum fugiat dolorum nam id modi sit!";
let indexTxt = 0;
const time = 20;

const addLetter = () => {
    spnText.textContent += txt[indexTxt];
    indexTxt++;
    if (indexTxt === txt.length)
        clearInterval(indexTyping);
}
const indexTyping = setInterval(addLetter, time);