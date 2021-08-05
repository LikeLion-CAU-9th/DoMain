const SHOWING_CLASS = "showing";
        const PAGE_CLASS = "cur-page";
        const Slides = document.querySelectorAll(".slide_item");
        const pages = document.querySelectorAll(".page");
        console.log(Slides);
        console.log(pages);
       
        const leftBtn = document.querySelector("#left");
        const rightBtn = document.querySelector("#right");
        let curIndex = 0;

        const moveRslide = () => {
            Slides[curIndex].classList.remove(SHOWING_CLASS);
            pages[curIndex].classList.remove(PAGE_CLASS);
            if (curIndex < Slides.length - 1) {
                curIndex++;
            } else {
                curIndex = 0;
            }
            console.log(curIndex);
            pages[curIndex].classList.add(PAGE_CLASS);
            Slides[curIndex].classList.add(SHOWING_CLASS);
        }

        const moveLslide = () => {
            Slides[curIndex].classList.remove(SHOWING_CLASS);
            pages[curIndex].classList.remove(PAGE_CLASS);
            if (curIndex > 0) {
                curIndex--;
            } else {
                curIndex = Slides.length - 1;
            }
            console.log(curIndex);
            pages[curIndex].classList.add(PAGE_CLASS);
            Slides[curIndex].classList.add(SHOWING_CLASS);
        }

        leftBtn.addEventListener("click",moveLslide);
        rightBtn.addEventListener("click",moveRslide);
    