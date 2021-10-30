let search = document.querySelector(".nav_form");

search.onsubmit = (e) => {
  e.preventDefault();

  let songs = search.search.value;
  let artist = search.search.value;

  console.log(songs);
  console.log(artist);
};

let toggleNoti = () => {
  noti();
  renderMsg({
    title: "Notifications",
    options: 'Close',
    content: "No notifications",
    bottom:"View all notifications"
  });
};

let toggleMess = () => {
  mess();
  renderMsg({
    title: "Messages",
    options: `<i class="fal fa-times"></i>`,
    content: "No Messages",
    bottom :'View all messages'
  });
};
let toggleSet = () => {
  set();
  renderSet();
};

let noti = () => {
  document.getElementById("show_dropdown").classList.add("selected");
  document.querySelector(".noti").classList.add("selected");
  document.querySelector(".message").classList.remove("selected");
  document.getElementById("dropdown_set").classList.remove("active");
};

let mess = () => {
  document.getElementById("show_dropdown").classList.add("selected");
  document.querySelector(".noti").classList.remove("selected");
  document.querySelector(".message").classList.add("selected");
  document.getElementById("dropdown_set").classList.remove("active");

};

let set = () => {
  document.getElementById("dropdown_set").classList.toggle("active");
  document.getElementById("show_dropdown").classList.remove("selected");
  document.querySelector(".message").classList.remove("selected");
  document.querySelector(".noti").classList.remove("selected");
};

let close_dropdown = () => {
  document.getElementById("show_dropdown").classList.remove("selected");
  document.querySelector(".noti").classList.remove("selected");
  document.querySelector(".message").classList.remove("selected");
};

let renderMsg = (data) => {
  let content = document.querySelector(".dropdown_click");
  let html = `<div class="top">
    <h2>${data.title}</h2>
    <button onclick="close_dropdown()">${data.options}</button>
    </div>
    <div class="middle">
    <div class="load-circles selected">
        <div class="circle circle-1"></div>
        <div class="circle circle-2"></div>
        <div class="circle circle-3"></div>        
    </div>
    </div>
    <div class="bottom">
        <div class="content">${data.bottom}</div>
        </div>`;
  content.innerHTML = html;

  setTimeout(function () {
    content.innerHTML = `<div class="top">
        <h2>${data.title}</h2>
        <button onclick="close_dropdown()">${data.options}</button>
        </div>
        <div class="middle">
        <div class="content">${data.content}</div>
        </div>
        <div class="bottom">
        <div class="content">${data.bottom}</div>
        </div>`;
  }, 1000);
};
let renderSet = () => {
  let content = document.querySelector(".dropdown_set");
  let html = `
  <div class="set_top">
   <a href="https://soundcloud.com/pages/contact">
   <p>About us</p>
   </a>
   <a href="https://soundcloud.com/terms-of-use">
   <p>Legal</p>
   </a>
   <a href="https://soundcloud.com/pages/copyright">
   <p>Copyright</p>
   </a>
   <a href="/Home/profile.html">
   <p>Profile</p>
   </a>
   </div>
   <div class="set_bottom">
   <a href="../Form/Welcome.html">
   <p>Create new account</p></a>
   <a href="../Form/Signin.html">
   <p>Sign out</p></a>
   </div>`;
  content.innerHTML = html;
};
