let infoSongs = [
  {
    name: "Cưới Thôi - Masew x Masiu x B Ray x TAP - Tik Tok",
    img: "https://i1.sndcdn.com/artworks-vpLyYjwh5A1EY9wW-d83Rcw-t200x200.jpg",
    title: "Related tracks",
    audio: "../music/Cưới Thôi.mp3",
  },
  {
    name: "Có Hẹn Với Thanh Xuân - Monstar",
    img: "https://i1.sndcdn.com/artworks-NYF6yrfQVQuVdwyr-1bgBQw-t200x200.jpg",
    title: "Related tracks",
    audio: "../music/Có Hẹn Với Thanh Xuân.mp3",
  },
  {
    name: "Chúng Ta Sau Này - TRI",
    img: "https://i1.sndcdn.com/artworks-bD2mfoy3D6Xwl9oe-HH7WXw-t200x200.jpg",
    title: "Related tracks",
    audio: "../music/Chúng Ta Sau Này.mp3",
  },

  {
    name: "Dịu Dàng Em Đến - ERIK ft NinjaZ",
    img: "https://i1.sndcdn.com/artworks-WW7HaRJtQy5EV6wm-AvKzlA-t200x200.jpg",
    title: "Related tracks",
    audio: "../music/Dịu Dàng Em Đến.mp3",
  },
  {
    name: "[LOVE] Simple Love (Remix) - W/n",
    img: "https://i1.sndcdn.com/artworks-000418031700-717jbb-t200x200.jpg",
    title: "Related tracks",
    audio: "../music/Simple Love .mp3",
  },
  {
    name: "Lời Yêu Ngây Dại",
    img: "https://i1.sndcdn.com/artworks-000580785431-fkn258-t200x200.jpg",
    title: "Related tracks",
    audio: "../music/Lời Yêu Ngây Dại.mp3",
  },
  {
    name: "Nước Mắt Em Lau Bằng Tình Yêu Mới - Da LAB ft. Tóc Tiên (Re-up)",
    img: "https://i1.sndcdn.com/artworks-000597072581-g94t9e-t200x200.jpg",
    title: "Top 50",
    audio: "../music/Nước Mắt Em Lau Bằng Tình Yêu Mới.mp3",
  },
  {
    name: "Dungkhocmotminhemoi vinhungcauchuyendauaihieuduoc",
    img: "https://i1.sndcdn.com/artworks-000607995514-1nz3ud-t200x200.jpg",
    title: "Top 50",
    audio: "../music/Dungkhocmotminhemoi.mp3",
  },
  {
    name: "Hẹn em kiếp sau - Lã ft Duy Phước",
    img: "https://i1.sndcdn.com/artworks-000586579148-o5y870-t200x200.jpg",
    title: "Top 50",
    audio: "../music/Hẹn em kiếp sau.mp3",
  },
  {
    name: "2 + 3 = 5 - CAMMIE ft T.R.I",
    img: "https://i1.sndcdn.com/artworks-000628956949-yt0nex-t200x200.jpg",
    title: "Top 50",
    audio: "../music/2 + 3 = 5.mp3",
  },
  {
    name: "Bae don't cry - KOO FT DREAM",
    img: "https://i1.sndcdn.com/artworks-000303522252-8580ha-t200x200.jpg",
    title: "Top 50",
    audio: "../music/Bae don't cry .mp3",
  },
  {
    name: "Mo Ho - Bui Anh Tuan",
    img: "https://i1.sndcdn.com/artworks-000086456055-fo5rpo-t200x200.jpg",
    title: "Top 50",
    audio: "../music/Mo Ho.mp3",
  },
  {
    name: "Sai Lầm Của Anh - Dũng",
    img: "https://i1.sndcdn.com/artworks-000624637630-n2i28y-t200x200.jpg",
    title: "New & hot",
    audio: "../music/Sai Lầm Của Anh.mp3",
  },
  {
    name: "Đừng chờ anh nữa - Tăng Duy Phúc",
    img: "https://i1.sndcdn.com/avatars-000189537276-kxsj3t-t200x200.jpg",
    title: "New & hot",
    audio: "../music/Đừng chờ anh nữa.mp3",
  },
  {
    name: "Bánh Mì Không - ĐạtG x DuUyên | (Official)",
    img: "https://i1.sndcdn.com/artworks-000651561427-pd8omo-t200x200.jpg",
    title: "New & hot",
    audio: "../music/Bánh Mì Không.mp3",
  },
  {
    name: "OK - BINZ",
    img: "https://i1.sndcdn.com/artworks-000661112818-khk591-t500x500.jpg",
    title: "New & hot",
    audio: "../music/OK.mp3",
  },
  {
    name: "Em Ổn Không Trịnh Thiên Ân .ft Viruss",
    img: "https://i1.sndcdn.com/artworks-000641537524-cb3gt7-t200x200.jpg",
    title: "New & hot",
    audio: "../music/Em Ổn Không.mp3",
  },
  {
    name: "Dao nay em the nao? - Cover",
    img: "https://i1.sndcdn.com/artworks-000514289841-paacoj-t500x500.jpg",
    title: "New & hot",
    audio: "../music/DaoNayAnhTheNao.mp3",
  },
];

let nextPlaySong = 0;
let repeatPlaySong = 2;

function mixData(data) {
  let result1 = [];
  let result2 = [];
  let result3 = [];

  let mixArr = [];
  for (let i = 0; i < data.length; i++) {
    mixArr.push(i);
  }

  // const shuffledArray = mixArr.sort((a, b) => 0.5 - Math.random());
  for (let i = 0; i < Math.round(mixArr.length / 3); i++) {
    result1.push(data[mixArr[i]]);
  }
  for (
    let i = Math.round(mixArr.length / 3);
    i < Math.round(mixArr.length / 3) * 2;
    i++
  ) {
    result2.push(data[mixArr[i]]);
  }
  for (
    let i = Math.round(mixArr.length / 3) * 2;
    i < Math.round(mixArr.length / 3) * 3;
    i++
  ) {
    result3.push(data[mixArr[i]]);
  }

  const result = {
    data1: result1,
    data2: result2,
    data3: result3,
  };
  return result;
}

const au = document.getElementById("main_audio");
const dataAffterMixed = mixData(infoSongs);

let renderData = (query, data) => {
  let dom = document.querySelector(`#${query}`);
  dom.innerHTML = "";

  for (let i = 0; i < data.length; i++) {
    let html = `<li class="splide__slide">
    <div id="${query + i}" class="card">
        <img class="border_img" style="width:175px; height:175px" src="${data[i].img}" alt="">
        <audio class="${query + i}audio" id="main_audio" src="${
      data[i].audio
    }"></audio>
    </div>
    <h2>${data[i].name}</h2>
    <p>${data[i].title}</p>
    </li>`;
    dom.innerHTML += html;
  }

  //play music function
  for (let i = 0; i < data.length; i++) {
    document.querySelector(`#${query + i}`).addEventListener("click", () => {
      nextPlaySong = i;
      au.src = data[i].audio;
      playPauseBtn.querySelector("i").innerText = "paused";
      au.play();

      let song = document.querySelector(".song");
      let htmlSong = `<img src="${data[i].img}" alt="">
      <div class="title">
      <p>${data[i].title}</p>
      <h2>${data[i].name}</h2>
      </div>
      <button class="like"></button>
      <i class="material-icons">queue_music</i>`;
      song.innerHTML = htmlSong;
    });
  }
};

const playPauseBtn = document.querySelector(".play-pause");
const nextBtn = document.querySelector(".skip_next");
const prevBtn = document.querySelector(".skip_prev");
const randomBtn = document.querySelector(".random");
const repeatBtn = document.querySelector(".repeat");
const progressArea = document.querySelector(".progress_area");
const progressBar = document.querySelector(".progress_bar");

//pause music function
playPauseBtn.addEventListener("click", () => {
  if (au.duration > 0 && !au.paused) {
    au.pause();
    playPauseBtn.querySelector("i").innerText = "play_arrow";
  } else {
    au.play();
    playPauseBtn.querySelector("i").innerText = "paused";
  }
});

//next music function
nextBtn.addEventListener("click", () => {
  nextPlaySong++;
  au.src = infoSongs[nextPlaySong].audio;
  au.play();
});

//prev music function
prevBtn.addEventListener("click", () => {
  nextPlaySong--;
  au.src = infoSongs[nextPlaySong].audio;
  au.play();
});

//random music function
randomBtn.addEventListener("click", () => {
  randomSong = Math.floor(Math.random(infoSongs) * 16);
  au.src = infoSongs[randomSong].audio;
  au.play();
  console.log(au);
  randomBtn.style.backgroundImage =
    "url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCI+PHBhdGggZmlsbD0iI2Y1MCIgZD0iTTEzLjU4NiAxN2wtOC04SDNWN2gzLjQxNGw4IDhIMTd2MmgtMy40MTR6TTMgMTVoMi41ODZsMi4yMDctMi4yMDcgMS40MTQgMS40MTQtMi41MDEgMi41MDEtLjI5My4yOTJIM3YtMnptMTQtNmgtMi41ODZsLTIuMjA3IDIuMjA3LTEuNDE0LTEuNDE0TDEzLjU4NiA3SDE3djJ6bTQgN2wtNCAzdi02bDQgM3ptMC04bC00IDNWNWw0IDN6Ii8+PC9zdmc+Cg==)";
});

//repeat music function
repeatBtn.addEventListener("click", () => {
  if (repeatPlaySong > 0) {
    au.play();
    repeatPlaySong--;
  } else {
    au.pause();
  }
});

//update   progress bar function
au.addEventListener("timeupdate", (e) => {
  const currentTime = e.target.currentTime;
  const duration = e.target.duration;
  let progressWidth = (currentTime / duration) * 100;
  progressBar.style.width = `${progressWidth}%`;

  let musicCurrentTime = document.querySelector(".currentTime");
  let musicDuration = document.querySelector(".duration");

  au.addEventListener("loadeddata", () => {
    let audioDuration = au.duration;
    let totalMin = Math.floor(audioDuration / 60);
    let totalSec = Math.floor(audioDuration % 60);
    if (totalSec < 10) {
      totalSec = `0${totalSec}`;
    }
    musicDuration.innerText = `${totalMin}:${totalSec}`;
  });

  let currentMin = Math.floor(currentTime / 60);
  let currentSec = Math.floor(currentTime % 60, 2);
  if (currentSec < 10) {
    currentSec = `0${currentSec}`;
  }
  musicCurrentTime.innerText = `${currentMin}:${currentSec}`;

  if (currentTime == duration) {
    nextPlaySong++;
    au.src = infoSongs[nextPlaySong].audio;
    au.play();

    for (let i = 0; i < infoSongs.length; i++) {
      let song = document.querySelector(".song");
      let htmlSong = `<img src="${infoSongs[i].img}" alt="">
      <div class="title">
      <p>${infoSongs[i].title}</p>
      <h2>${infoSongs[i].name}</h2>
      </div>
      <button class="like"></button>
      <i class="material-icons">queue_music</i>`;
      song.innerHTML = htmlSong;
    }
  }
});

progressArea.addEventListener("click", (e) => {
  let progressWidthValue = progressArea.clientWidth;
  let clickedOffSetx = e.offsetX;
  let songDuration = au.duration;

  au.currentTime = (clickedOffSetx / progressWidthValue) * songDuration;
});

renderData("list_like", dataAffterMixed.data1);
renderData("list_top50", dataAffterMixed.data2);
renderData("list_new", dataAffterMixed.data3);


let searching = document.querySelector(".nav_form")

// searching.onsubmit = function (e) {
//   e.preventDefault();

//   let searchInput = searching.search.value;

//   for(let i = 0; i < infoSongs.length; i++){
//     if(searchInput === infoSongs[i].name ){
      
//     }
//   }
// };

fetch("https://shazam.p.rapidapi.com/songs/list-artist-top-tracks?id=40008598&locale=en-US", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "shazam.p.rapidapi.com",
		"x-rapidapi-key": "0fcf4beeddmsh8fb66d56ab426c2p10c565jsnc79497f5023e"
	}
})
.then(response => {
	console.log(response);
})
.catch(err => {
	console.error(err);
});