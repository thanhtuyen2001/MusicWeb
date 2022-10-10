const heart = document.querySelector('.heart');
document.getElementById("heartbtn").onclick = function(){
   if(heart.classList.contains('fas')){
    heart.classList.remove('fas');
    heart.classList.add('far');

   }
   else{
    heart.classList.remove('far');
    heart.classList.add('fas');
   }
}