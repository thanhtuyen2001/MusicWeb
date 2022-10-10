
const popupAddPlaylist = document.getElementById('popupAddPlaylist');

popupAddPlaylist.onclick = function(){
    playlistContainer.classList.add('show');
};
function close(){
    playlistContainer.classList.remove('show');
};
//document.getElementById('closeplaylist').onclick = close;
document.getElementById('cancelbtn').onclick = close;





const loginBtn = document.getElementById('loginBtn');
const loginContainer = document.getElementById('loginContainer');
loginBtn.onclick = function(){
    loginContainer.classList.add("show");
};

const signupBtn = document.getElementById('signupBtn');
const signupContainer = document.getElementById('signupContainer');
signupBtn.onclick = function(){
    signupContainer.classList.add("show");
};

const closeform = document.querySelector('.closebtn');
closeform.onclick = function(){
    loginContainer.classList.remove("show");
    signupContainer.classList.remove("show");
};
