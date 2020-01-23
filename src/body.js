function menuclick(){
    
    document.querySelectorAll(".s-menu").forEach(side => {
        side.addEventListener("click",e => {
           let value = e.target.textContent.toLowerCase();
           if (value === 'book reservation'){
               reservation();
           }
        })
    })
}

function reservation(){
    alert("this is reservation")
}

export default function reserve(){
    menuclick();
}