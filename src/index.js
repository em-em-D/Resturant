import './style.scss';
import main from './menu';
import reserve from './body';
import aboutUs from './about';
import contactUs from './contact';

function listner(){
    document.querySelector("#mainbox").addEventListener("click", e => {
      e.preventDefault()
      openFunction();
    })
}

function close(){
    document.querySelector(".closebutton").addEventListener("click", e =>{
        e.preventDefault()
        closeFunction();
    } )
}
 
function openFunction(){
    document.getElementById("menu").style.display="block";
    document.getElementById("menu").style.width="500px";
    document.getElementById("mainbox").style.marginLeft="600px";
    document.getElementById("mainbox").innerHTML="Click on cross Element and close"
    document.getElementById("mainbox").style.color="yellow";
}
function closeFunction(){
    document.getElementById("menu").style.display="none";
    document.getElementById("menu").style.width="0px";
    document.getElementById("mainbox").style.marginLeft="0px";
    document.getElementById("mainbox").innerHTML="&#9776; Hope you where satisfied"
}
function navbar(){
    let nav = document.querySelector('#content');
    nav.innerHTML = `
           <div id="mainbox"> &#9776; Check out our menu</div>
            <div id="menu" class="side-menu" >
            <a href ="#" class="s-menu">Home</a>
            <a href ="#" class="s-menu">Menu</a>
            <a href ="#" class="s-menu">Book Reservation</a>
            <a href ="#" class="s-menu">About</a>
            <a href ="#" class="s-menu">Contact-us</a>
            <a href ="#" class="closebutton" > &times;</a>
            </div>
           `;

}


function display(){
    navbar();
    listner();
    close();
    main();
    reserve();
    aboutUs();
    contactUs();
}

display();
