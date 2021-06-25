const body = document.querySelector("body");
const navbar = document.querySelector(".navbar");
const menuBtn = document.querySelector(".menu-btn");
const cancelBtn = document.querySelector(".cancel-btn");
const bodyTag = document.getElementsByTagName("header");

var clicked = false;
function myFunction() {
    let subNav = document.querySelector(".sub-nav");
    if (clicked) {
        document.getElementById("plusBtn").innerText = "+";
        subNav.style.position = "absolute";
        subNav.style.visibility = "hidden";
        subNav.style.transitionDelay = "1s";
        subNav.style.display = "none";
        document.getElementById("plusBtn").style.top = "40%";
        document.getElementById("plusBtn").style.right = "-105px";
        clicked = false;
    } else {
        document.getElementById("plusBtn").innerText = "-";
        subNav.style.position = "relative";
        subNav.style.visibility = "visible";
        subNav.style.transitionDelay = "1s";
        subNav.style.display = "block";
        document.getElementById("plusBtn").style.top = "20px";
        document.getElementById("plusBtn").style.right = "-80px";
        clicked = true;
    }
}
menuBtn.onclick = () => {
    navbar.classList.add("show");
    menuBtn.classList.add("hide");
    body.classList.add("disabled");
    document.getElementById("plusBtn").style.display = "block";
}
cancelBtn.onclick = () => {
    body.classList.remove("disabled");
    navbar.classList.remove("show");
    menuBtn.classList.remove("hide");
    document.getElementById("plusBtn").style.display = "none";
}
bodyTag.onclick = () => {
    console.log("Allah Mohan")
}
window.onscroll = () => {
    this.scrollY > 20 ? navbar.classList.add("sticky") : navbar.classList.remove("sticky");
}
//  Frequently Asked Question Section
jQuery(document).ready(function () {
    const accordionItemHeaders = document.querySelectorAll(".accordion-item-header");
    accordionItemHeaders.forEach(accordionItemHeader => {
        accordionItemHeader.addEventListener("click", event => {
            accordionItemHeader.classList.toggle("active");
            const accordionItemBody = accordionItemHeader.nextElementSibling;
            if (accordionItemHeader.classList.contains("active")) {
                accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px";
            } else {
                accordionItemBody.style.maxHeight = 0;
            }
        });
    });
})



function showModel (){
    const walletWrapper = document.querySelector('.connect-wallet-wrapper');
    walletWrapper.style.display = "block";
}


function hideModel(){
    const walletWrapper = document.querySelector('.connect-wallet-wrapper');
    walletWrapper.style.display = "none";
}



document.querySelector(".contact-form").addEventListener("submit",submitForm);

function submitForm(e){
    e.preventDefault();

    let name = document.querySelector(".user-name").value;
    let email = document.querySelector(".user-email").value;
    let message = document.querySelector(".user-message").value;
    document.querySelector(".contact-form").reset();
    sendEmail(name, email, message);
}


// send Email Info
function sendEmail(name, email, message){
    var Body='Name: '+name+'<br>Email: '+email+'<br>Message: '+message;
    Email.send({
        SecureToken:"fbf31702-bb7f-4a4e-9c1c-4ccf17ee777f",
            To: 'Alexuskend@gmail.com',
            From: `${email}`,
            Subject: "You got a message from "+name+" in VeChainThor website",
            Body: Body
        }).then(
        message =>{
            //console.log (message);
            if(message=='OK'){
            alert('Your mail has been send. Thank you for connecting.');
            }
            else{
                console.error (message);
                alert('There is error at sending message. ')
                
            }

        }
    );
}