function hamburgerMenu(){
    var element = document.getElementById('sidemenu');
    element.style.display = 'block';

}

function myLoadFunction(){
    var element = document.getElementById('popup');
    element.addEventListener('click', hamburgerMenu);
}

document.addEventListener('DOMContentLoaded', myLoadFunction);