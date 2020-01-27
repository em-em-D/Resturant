import navigate from './index';

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
    navigate();
    document.querySelector("body").style.background="none"
    document.querySelector("#content").innerHTML=`
            <div class="about"> 
                                <p>The Fresh Difference.</p>
            We're not your typical restaurant. At WEBPACK, spice and seasonings are tasted throughout our chicken, not just on the outside.
            We offer a variety of chicken recipes: traditional hand-breaded, citrus grilled & extra crunchy.
            For pairings, we don't just serve sodas and tea, we serve Horchata and Mango. Our sides are prepared in the kitchen, not a factory.
            Our warm, delicious food is brought directly to your table and served with real plates and silverware.
            It's care and craft you can taste in every bite.
                <br>
                          <p>Our Flavorful Chicken: Made from Scratch. Loved by All.<p>
            Traditional hand-breaded or citrus grilled, we always start with fresh,
            all-natural chicken. Every piece of our famous traditional chicken is seasoned and prepared by hand for a golden,
             crispy, one-of-a-kind texture and taste. We also have the world's best recipe for grilled chicken,
            marinated to the bone and seasoned with a savory blend of citrus and herbs.
         </div>
         <div class="abt-img"><img src="../img/2reg.jpg" width="290" height="150"></div>
    `;
}

export default function aboutUs(){
    menuclick();
}