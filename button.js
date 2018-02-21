var animateButton = function(e){

    e.preventDefault;

    e.target.classList.remove('animate');
    
    setTimeout(function(){
        e.target.classList.remove('animate');
    },700);
};

var bubbleButtons = document.getElementsByClassName("bubbly-button");

for(var i = 0; i < bubbleButtons.length; i++) {
    bubbleButtons[i].addEventListener('click', animateButton, false);
}