// function for open and close navbar

function openCloseNavBar(){
 let bar = document.getElementById('bar')
 let navbar = document.querySelector('.part-two')
 if(!localStorage.getItem('position')){
    localStorage.setItem('position','close')
 }
 let position;
 if(bar&&navbar){
    bar.addEventListener('click',()=>{
        if(localStorage.getItem('position')==='close'){
            navbar.style.right ='0'
            position = 'open'
        }else{
            navbar.style.right='-100%'
            position='close'
        }
        localStorage.setItem('position',position)
    })

    window.addEventListener('click',e=>{
        e.stopPropagation()
        if((!navbar.contains(e.target))&&(!bar.contains(e.target))){
               navbar.style.right='-100%'
            position='close'
            localStorage.setItem('position',position)
        }
    })
 }
}
openCloseNavBar()