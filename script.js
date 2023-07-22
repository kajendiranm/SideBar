document.addEventListener('DOMContentLoaded',()=>{
    const sideNav=document.querySelector('.side-nav');
    const btnNav=document.querySelector('#btnNav');
    const overlay=document.querySelector('.nav-overlay');

    btnNav.addEventListener('click',()=>{
        sideNav.classList.add('open');
    });
    overlay.addEventListener('click',()=>{
        sideNav.classList.remove('open');
    });
    
});