//  Frequently Asked Question Section
jQuery(document).ready(function(){
    const accordionItemHeaders = document.querySelectorAll(".accordion-item-header");
    accordionItemHeaders.forEach(accordionItemHeader => {
        accordionItemHeader.addEventListener("click", event =>{
            console.log("Junaed")
            accordionItemHeader.classList.toggle("active");
            const accordionItemBody = accordionItemHeader.nextElementSibling;
            if(accordionItemHeader.classList.contains("active")){
                accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px";
            }else{
                accordionItemBody.style.maxHeight = 0;
            }
        });
    });
})