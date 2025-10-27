
document.addEventListener('DOMContentLoaded', function(){

    const menuIcon = document.getElementById('menu');
    const menuContainer = document.getElementById('mobile-menu')
    menuIcon.addEventListener('click', function(){
        menuContainer.classList.toggle('active');
    })
})