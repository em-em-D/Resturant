import navigate from './index';

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
    navigate();
    document.querySelector("body").style.background="none"
    document.querySelector("#content").innerHTML=`

            <img src="../img/reg.jpg" width="950" height="1050">
            <div class="menu-items"> 
                <ol>
                    <li>Spagetti = $40</li>
                    <li>Buger = $15</li>
                    <li>Shawarma = $10</li>
                    <li>Fried-Chicken = $20</li>
                    <li>Noodles = $80</li> 
                    <li>Pizza = $50</li> 
                    <li>Burritos = $100</li> 
                    <li>French-toast = $120</li>
                </ol>
                <button class="button"> Order now</button>
            </div>
            
        
   
    `;
}
export default function main(){
    menuclick();
}