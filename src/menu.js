function menuclick(){
    
    document.querySelectorAll(".s-menu").forEach(side => {
        side.addEventListener("click",e => {
           let value = e.target.textContent.toLowerCase();
           if (value === 'menu'){
               menu();
           }
        })
    })
}
function menu(){
   alert("this is showing")
    
}
export default function main(){
    menuclick();
}