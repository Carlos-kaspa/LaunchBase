const modalOverlay = document.querySelector('.modal-overlay');
const cards = document.querySelectorAll('.card');

for(let card of cards){

    card.addEventListener("click", function(){

        let videoID = card.id /* ou card.getAttribute('id');*/

        modalOverlay.querySelector('iframe').src = `https://youtube.com/embed/${videoID}`
       
        modalOverlay.classList.add('active')


    })
    
}

const closeButton = document.querySelectorAll('.close-button');

for(let button of closeButton){

    button.addEventListener("click",function(){

        modalOverlay.classList.remove('active')

        modalOverlay.querySelector('iframe').src = ''

    })
}

