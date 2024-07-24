const popup = document.getElementById('popup');
const openbtn = document.getElementById('settings-btn');
const clsbtn = document.getElementById('settings-close-btn');


popup.addEventListener('click', closePopup);
openbtn.addEventListener('click', openPopup);


function openPopup(e){
    popup.style.display = "flex";
}
function closePopup(e){
    if ((e.target == popup) || (e.target == clsbtn)){
        popup.style.display = "none";
    }
}



