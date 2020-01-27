import navigate from './index';

function menuclick(){
    
    document.querySelectorAll(".s-menu").forEach(side => {
        side.addEventListener("click",e => {
           let value = e.target.textContent.toLowerCase();
           if (value === 'home'){
               homie();
           }
        })
    })
}

function homie(){
    navigate();
}

export default function home(){
    menuclick();
}