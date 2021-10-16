let search = document.querySelector('.nav_form')

search.onsubmit = (e)=> {
    e.preventDefault();

    let songs = search.search.value;
    let artist = search.search.value;

    console.log(songs);
    console.log(artist);
}



let dropdown_click = `
<div class="top">
<h2></h2>
<p>Settings</p>
</div>
<div class="middle">
<div class="load-circles">
    <div class="circle circle-1"></div>
    <div class="circle circle-2"></div>
    <div class="circle circle-3"></div>        
</div>
<div class="content">No notifications</div>
</div>`

let toggleNoti = ()=>{
    document.getElementById('show_dropdown').classList.toggle('selected');;
    document.querySelector('.noti').classList.toggle('selected');

    let content = document.querySelector('.dropdown_click');
    content.innerHTML = dropdown_click
}

let toggleMess= ()=>{
    let active = document.getElementById('show_dropdown');
    active.classList.toggle('selected');
    let bg_mess = document.querySelector('.message')
    bg_mess.classList.toggle('selected');
  
}
let toggleSet = ()=>{
    let active = document.getElementById('show_dropdown');
    active.classList.toggle('selected');
    let bg_set = document.querySelector('.setting')
    bg_set.classList.toggle('selected');
}


