let user_content = document.querySelector(".user_content");

let data_user = [
    {
        ava:"https://i1.sndcdn.com/avatars-000510724806-2fk9up-t50x50.jpg",
        name:"KHA",
        follower:"57.6K",
        tracks:"63"
    },
    {
        ava:"https://i1.sndcdn.com/avatars-eOjaPj9hnJMUrzqG-NWIYMA-t50x50.jpg",
        name:"ngtanh",
        follower:"153",
        tracks:"32"
    },
    {
        ava:"https://i1.sndcdn.com/avatars-ey1hNlWn9Swhe0wv-xMWOBg-t50x50.jpg",
        name:"Hawys",
        follower:"8,956",
        tracks:"37"
    },
]


let user_1 = document.querySelector(".user_1");
let user_2 = document.querySelector(".user_2");
let user_3 = document.querySelector(".user_3");


for (let i = 0; i < data_user.length; i++) {
  let html_user_content = `
  <div class="user_ava">
  <img src="${data_user[i].ava}" alt="">
  </div>
  <div class="user_info">
      <p>${data_user[i].name}</p>
      <div class="status_user">
          <p>${data_user[i].follower}</p>
          <p>${data_user[i].tracks}</p>
          <button class="btn_follow">Follow</button>
      </div>
  </div>`;

  switch (i +1) {
      case 1:
        user_1.innerHTML = html_user_content
          break;
     case 2:
         user_2.innerHTML = html_user_content
         break;
    case 3:
        user_3.innerHTML = html_user_content
        break;
   
  }

};

let data_user_song =[
    {
        ava :"https://i1.sndcdn.com/avatars-000235408275-l02io7-t50x50.jpg",
        user:"Viễn Glacial",
        name:"Những Bức Tranh Màu - OST Là ANH - Cao Long ft Thái Vũ",
        play:"270K",
        favorite:"2.223",
        repeat:"39",
        comments:"22",
    },
    {
        ava :"https://i1.sndcdn.com/artworks-000641537524-cb3gt7-t50x50.jpg",
        user:"Trịnh Thiên Ân",
        name:"Em Ổn Không Trịnh Thiên Ân .ft Viruss",
        play:"1.53M",
        favorite:"9.344",
        repeat:"339",
        comments:"462"
    },
    {
        ava :"https://i1.sndcdn.com/artworks-000661112818-khk591-t50x50.jpg",
        user:"Binz Da Poet ✪",
        name:"BINZ - OK (Official Audio)",
        play:"8.77M",
        favorite:"67K",
        repeat:"2.564",
        comments:"857"
    },
]

let artist_song = document.querySelector(".song_sidebar");

for (let i = 0; i < data_user_song.length; i++) {
    let html_artist_song = `
    <div class="song_row">
    <img src="${data_user_song[i].ava}" alt="">
                            <div class="title">
                                <p>${data_user_song[i].user}</p>
                                <h2>${data_user_song[i].name}</h2>
                                <div class="about_song">
                                    <p><span class="material-icons">
                                            play_arrow
                                        </span> ${data_user_song[i].play}</p>
                                    <p><span class="material-icons">
                                            favorite
                                        </span> ${data_user_song[i].favorite}</p>
                                    <p><span class="material-icons">
                                            repeat
                                        </span> ${data_user_song[i].repeat}</p>
                                    <p></span><span class="material-icons">
                                            chat_bubble
                                        </span>  ${data_user_song[i].comments}</p>
                                </div>
                            </div>
                            </div>`;
    artist_song.innerHTML += html_artist_song
}

