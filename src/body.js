import navigate from './index';

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
    navigate();
    document.querySelector("body").style.background="none"
    document.querySelector("#content").innerHTML=`
    <img src="../img/2reg.jpg" alt="reservation" width="900" height="900">
    <div id="reservation">
    <ul class="ba">
          <li>  <form action="#">
            <label for="fname">First Name</label><br>
            <input type="text" id="fname" name="firstname" placeholder="Your name.."></li><br>

           <li> <label for="lname">Last Name</label><br>
            <input type="text" id="lname" name="lastname" placeholder="Your last name.."></li><br>

          <li><input type="date" name="reservation"></li><br>
            <input type="submit" value="Book">
           </form>
  </ul>
    </div>
    
    `
}

export default function reserve(){
    menuclick();
}