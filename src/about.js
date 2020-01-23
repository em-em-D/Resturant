function menuclick(){
    
    document.querySelectorAll(".s-menu").forEach(side => {
        side.addEventListener("click",e => {
           let value = e.target.textContent.toLowerCase();
           if (value === 'about'){
               about();
           }
        })
    })
}

function about(){
    alert("this is about us")
}

export default function aboutUs(){
    menuclick();
}