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

const dataAffterMixed = mixData(infoSongs);

let renderData = (query, data) => {
  let dom = document.querySelector(`#${query}`);
  dom.innerHTML = "";

  for (let i = 0; i < data.length; i++) {
    let html = `<li class="splide__slide">
    <div id="${query + i}" class="card">
        <img style="width:175px; height:175px" src="${data[i].img}" alt="">
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
    let music = document.querySelector(`.${query + i}audio`);
    document.querySelector(`#${query + i}`).addEventListener("click", () => {
      playPauseBtn.querySelector("i").innerText = "pause";
      music.play();

      let song = document.querySelector(".song");
      let htmlSong = `<img src="${data[i].img}" alt="">
      <div class="title">
        <p>${data[i].title}</p>
        <h2>${data[i].name}</h2>
      </div>
      <button class="like"></button>
      <i class="material-icons">queue_music</i>`;
      song.innerHTML = htmlSong;
      //next music
      nextBtn.addEventListener("click", () => {
        music+
        console.log(music);
      });
    });
  }
};

// const wrapper = document.querySelector(".wrapper");
const playPauseBtn = document.querySelector(".play-pause");
const nextBtn = document.querySelector(".skip_next");
// const mainAudio = document.querySelector("#main_audio");

// //paused music function
// let pauseMusic = () => {
//   mainAudio.pause();
// };

// playPauseBtn.addEventListener("click", () => {
//   playPauseBtn.querySelector("i").innerText = "play_arrow";
//   pauseMusic();
// });

renderData("list_like", dataAffterMixed.data1);
renderData("list_top50", dataAffterMixed.data2);
renderData("list_new", dataAffterMixed.data3);

// pauseMusic("list_like", dataAffterMixed.data1);
// pauseMusic("list_top50", dataAffterMixed.data2);
// pauseMusic("list_new", dataAffterMixed.data3);
