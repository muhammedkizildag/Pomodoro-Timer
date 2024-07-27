const popup_ = document.getElementById('popup');
const openbtn = document.getElementById('settings-btn');
const clsbtn = document.getElementById('settings-close-btn');





function openPopup(e){
    popup_.style.display = "flex";
}
function closePopup(e){
    if ((e.target == popup_) || (e.target == clsbtn)){
        popup_.style.display = "none";
    }
}

export function popup(){
    popup_.addEventListener('click', closePopup);
    openbtn.addEventListener('click', openPopup);
}

