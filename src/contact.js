import navigate from './index';

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
    document.querySelector("body").style.background="none"
    document.querySelector("#content").innerHTML=`
    <img src="../img/r.jpg" width="900" hieght="850">
    <div id="contact">
        <ul class="ba">
        <form action="#">

   <li> <label for="fname">First Name</label><br>
    <input type="text" id="fname" name="firstname" placeholder="Your name.."></li>

   <li> <label for="lname">Last Name</label><br>
    <input type="text" id="lname" name="lastname" placeholder="Your last name.."><li>

   <li> <label for="country">Country</label><br>
    <select id="country" name="country">
      <option value="australia">Africa</option>
      <option value="canada">Asia</option>
      <option value="usa">Europe</option>
      <option value="usa">North-America</option>
      <option value="usa">South-America</option>
      <option value="usa">Antatica</option>
      <option value="usa">Australia</option>
    </select></li>

    <li><label for="subject">Note</label><br>
    <textarea id="subject" name="subject" placeholder="Write something.." style="height:150px "></textarea></li>

  <li><input type="submit" value="Submit"></li>

  </form>
        
        
        </ul>
    </div>
    `
}

export default function contactUs(){
    menuclick();
}