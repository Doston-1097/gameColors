const cols = document.querySelectorAll(".col-2");
let counter = 0;
const score = document.getElementById("score");
const scoreFor = document.getElementById("scoreFor");
const finish = document.getElementById("finish");
const line = document.getElementById("line");
let timer = 10;
let maxtime = 10;
let showTime = document.getElementById("timer")

let btnClick, reload
const start = () => {
    function getRandom() {
        return Math.floor(Math.random() * 25);
    }

    const lineW = () => {
        let w = (100 / maxtime) * timer;

        line.style.width = `${w}%`
        if (w<=75)line.style.backgroundColor="yellow";
        if (w<=30)line.style.backgroundColor="red";
    }


    setInterval(() => {
        lineW()
    }, 1000);


    const colors = () => {
        setTimeout(()=>{
            setInterval(() => {
                color();
            }, 300);
            setInterval(()=>{
                color2();
            },200)
        },500)

        setInterval(() => {
            timerr()
        }, 1000)
        const timerr = () => {

            if (timer < 0) {
                return
            }
            showTime.innerHTML = `You have : ${timer} seconds`;
            if (timer <= 0) {
                finish.classList.remove("d-none")
                const over = document.querySelector("#over");
                over.src = "./over.mp3";
                over.play()
            }

            timer--;
        }
    };

    const color = () => {
        cols[getRandom()].classList.add("bg-success");

    };


    const color2 = () => {
        cols[getRandom()].classList.remove("bg-success");

    };

    colors();
    btnClick = (e) => {
        if (cols[e - 1].classList.contains("bg-success")){
            const song = document.querySelector("#song");
            song.src = "./song1.mp3";
            song.play();
            cols[e - 1].classList.remove("bg-success");
            counter++;
        }
        else{
            const error = document.querySelector("#error");
            error.src = "./beep-03.mp3";
            error.play();
            setTimeout(()=>{
                cols[e-1].classList.add("bg-danger")
            },5)
            setTimeout(()=>{
                cols[e-1].classList.remove("bg-danger")
            },100)

        }
        score.innerHTML =`score : ${counter}`;
        scoreFor.innerHTML = counter;
    }
    reload = () => {
        window.location.reload(true);
    }

}
