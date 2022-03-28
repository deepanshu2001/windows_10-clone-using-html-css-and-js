menu=document.getElementsByClassName('menu')[0];
logo=document.getElementsByClassName('logo')[0];


logo.addEventListener('click',()=>{
    if(menu.style.bottom=="-241px"){
        menu.style.bottom="47px";
    }
    else{
        menu.style.bottom="-241px";
    }
})
