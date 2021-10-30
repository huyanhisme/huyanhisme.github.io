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

}
