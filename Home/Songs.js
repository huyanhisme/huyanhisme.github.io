let infoSongs = [
  {
    name: "Dao nay em the nao? - Cover",
    img: "https://i1.sndcdn.com/artworks-000514289841-paacoj-t500x500.jpg",
    title: "Related tracks",
  },
  {
    name: "OK - BINZ",
    img: "https://i1.sndcdn.com/artworks-000661112818-khk591-t500x500.jpg",
    title: "Related tracks",
  },
  {
    name: "Lời Yêu Ngây Dại",
    img: "https://i1.sndcdn.com/artworks-000580785431-fkn258-t200x200.jpg",
    title: "Related tracks",
  },
  {
    name: "Em Ổn Không Trịnh Thiên Ân .ft Viruss",
    img: "https://i1.sndcdn.com/artworks-000641537524-cb3gt7-t200x200.jpg",
    title: "Related tracks",
  },
  {
    name: "Lời Yêu Ngây Dại - KHA",
    img: "https://i1.sndcdn.com/artworks-000580785431-fkn258-t200x200.jpg",
    title: "Related tracks",
  },
  {
    name: "Bánh Mì Không - ĐạtG x DuUyên | (Official)",
    img: "https://i1.sndcdn.com/artworks-000651561427-pd8omo-t200x200.jpg",
    title: "Related tracks",
  },
  {
    name: "[LOVE] 4. Sai Gon Simple Love (Remix) - Raz",
    img: "https://i1.sndcdn.com/artworks-000418031700-717jbb-t200x200.jpg",
    title: "Related tracks",
  },
  {
    name: "Nước Mắt Em Lau Bằng Tình Yêu Mới - Da LAB ft. Tóc Tiên (Re-up)",
    img: "https://i1.sndcdn.com/artworks-000597072581-g94t9e-t200x200.jpg",
    title: "Related tracks",
  },
  {
    name : "Dungkhocmotminhemoi vinhungcauchuyendauaihieuduoc",
    img:"https://i1.sndcdn.com/artworks-000607995514-1nz3ud-t200x200.jpg",
    title: "Top 50"
  },
  {
    name : "Hẹn em kiếp sau - Lã ft Duy Phước",
    img:"https://i1.sndcdn.com/artworks-000586579148-o5y870-t200x200.jpg",
    title: "Top 50"
  },
  {
    name : "2 + 3 = 5 - CAMMIE ft T.R.I",
    img:"https://i1.sndcdn.com/artworks-000628956949-yt0nex-t200x200.jpg",
    title: "Top 50"
  },
  {
    name : "Bae don't cry - KOO FT DREAM",
    img:"https://i1.sndcdn.com/artworks-000303522252-8580ha-t200x200.jpg",
    title: "Top 50"
  },
  {
    name : "Mo Ho - Bui Anh Tuan",
    img:"https://i1.sndcdn.com/artworks-000086456055-fo5rpo-t200x200.jpg",
    title: "Top 50"
  },
  {
    name : "Sai Lầm Của Anh - Dũng",
    img:"https://i1.sndcdn.com/artworks-000624637630-n2i28y-t200x200.jpg",
    title: "Top 50"
  },
  {
    name : "Đừng chờ anh nữa - Tăng Duy Phúc",
    img:"https://i1.sndcdn.com/avatars-000189537276-kxsj3t-t200x200.jpg",
    title: "Top 50"
  },
  {
    name : "HÀNH LANG CŨ (HẠ NHỚ THU SANG)",
    img:"https://i1.sndcdn.com/artworks-000639385633-u663e8-t200x200.jpg",
    title: "Top 50"
  },

];

let songs_row1 = document.querySelector("#list_like");
let songs_row2 = document.querySelector("#list_top");
let songs_row3 = document.querySelector("#list_new");

let so_bai_hat = 4;

let SongsRender = Math.ceil(infoSongs.length / so_bai_hat);

for (let j = 0; j < SongsRender; j++) {
  let temp = new Array();

  temp = infoSongs.splice(0, so_bai_hat);

  for (let i = 0; i < temp.length; i++) {
    let html = ` <li class="songs splide__slide">
    <img src="${temp[i].img}" alt="">
    <h4>${temp[i].name}
    </h4>
    <p>${temp[i].title}</p>
</li>`;

    switch (j + 1) {
      case 1:
        songs_row1.innerHTML += html;

        break;
      case 2:
        songs_row2.innerHTML += html;
        break;
      case 3:
        songs_row3.innerHTML += html;
        break;
    }
  }
}
