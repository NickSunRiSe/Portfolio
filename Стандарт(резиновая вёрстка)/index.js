//Плеер

let time = document.querySelector(".audio__time");
let btnPlay = document.querySelector(".audio__play");
let btnPause = document.querySelector(".audio__pause");
let btnPrev = document.querySelector(".audio__prev");
let btnNext = document.querySelector(".audio__next");
let track = document.getElementById("audio__track");
var playlist = ["sounds/111.mp3" , "sounds/222.mp3" , "sounds/333.mp3"];
let songNum = 0;
 
btnPlay.addEventListener("click", function () {
  audio.play();
  audioPlay = setInterval(function () {
    let audioTime = Math.round(audio.currentTime);
    let audioLength = Math.round(audio.duration);
    time.style.width = (audioTime * 100) / audioLength + "%";
    if (audioTime == audioLength && songNum < 2) {
      //колличество треков ручное, длинна не срабатывает
      songNum++;
      audio.src = playlist[songNum];
      audio.play();
    } else if (audioTime == audioLength) {
      songNum = 0;
      audio.src = playlist[songNum];
      audio.play();
    }
  }, 10);
});
btnPause.addEventListener("click", function () {
  audio.pause();
  clearInterval(audioPlay);
});
function next_track() {
  if (songNum < 2) {
    songNum++;
  } else if (songNum == 2) {
    songNum = 0;
  }
  audio.src = playlist[songNum];
  audio.play();
}
function prev_track() {
  if (songNum > 0) {
    songNum--;
  } else {
    songNum = 2;
  }
  audio.src = playlist[songNum];
  audio.play();
}

//Слайдер

let slideIndex = 1;
showSlides(slideIndex);

function nextSlide() {
  showSlides((slideIndex += 1));
}

function previousSlide() {
  showSlides((slideIndex -= 1));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slider__item");

  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }

  for (let slide of slides) {
    slide.style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";
}

//Видеоплеер

let video = document.getElementById("video");
let btnPlayvid = document.querySelector(".video__play");
let btnPausevid = document.querySelector(".video__pause");
btnPlayvid.addEventListener("click", function () {
  video.play();
});
btnPausevid.addEventListener("click", function () {
  video.pause();
});

//Лоадер

window.onload = function () {
    document.body.classList.add("loaded_hiding");
    window.setTimeout(function () {
      document.body.classList.add("loaded");
      document.body.classList.remove("loaded_hiding");
    }, 500);
  };