function menuclick(){
    
    document.querySelectorAll(".s-menu").forEach(side => {
        side.addEventListener("click",e => {
           let value = e.target.textContent.toLowerCase();
           if (value === 'contact-us'){
               contact();
           }
        })
    })
}

function contact(){
    alert("this is our contact form!")
}

export default function contactUs(){
    menuclick();
}