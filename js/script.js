const navButton = document.querySelector("#nav-icon1");
const mobileNav = document.querySelector(".mobile-menu");
const body = document.body;


// Клик по кнопке
navButton.addEventListener("click", function(event){
    event.stopPropagation();
    toggleMobileNav();
})
// // Клик по окну за пределами навигации
window.addEventListener("click", function(){
    if(body.classList.contains('no-scroll')){
        toggleMobileNav();
    }
})
// Останавливаем клик внутри открытой мобильной навигации
mobileNav.addEventListener('click', function(event){
    event.stopImmediatePropagation();
})


function toggleMobileNav(){
    body.classList.toggle("no-scroll");
    navButton.classList.toggle("open");
    mobileNav.classList.toggle("mobile-nav-active");
}



//  Показывать полный текст post (BLOG)

const posts = document.querySelectorAll('[data-post]');

posts.forEach(function(item){
    item.addEventListener("mouseover", function(){
        item.style = `text-shadow: 2px 2px 2px rgba(247, 36, 100, 0.5);`;
        icon = item.getElementsByClassName("material-symbols-outlined");
        for(let ic of icon)
        ic.style = `transform: rotate(90deg);`;
    })

    item.addEventListener("mouseout", function(){
        item.style = `text-shadow: none;`;
        icon = item.getElementsByClassName("material-symbols-outlined");
        for(let ic of icon)
        ic.style = `transform: none`;
    })

    item.addEventListener("click", function(){
        const spanText = document.querySelector('#' + this.dataset.post);
        spanText.classList.toggle("hidden");

        if(!spanText.classList.contains('hidden')){
                item.addEventListener("mouseover", function(){
                item.style = `text-shadow: 2px 2px 2px rgba(247, 36, 100, 0.5);`;
                iconClose = item.getElementsByClassName("material-symbols-outlined");
                for(let icC of iconClose)
                icC.style = `transform: rotate(-90deg);`;
            })
        }else {  
                item.addEventListener("mouseover", function(){
                item.style = `text-shadow: 2px 2px 2px rgba(247, 36, 100, 0.5);`;
                icon = item.getElementsByClassName("material-symbols-outlined");
                for(let ic of icon)
                ic.style = `transform: rotate(90deg);`;
            })
        }   

    })
})


// opacity

const postCard = document.querySelectorAll(".post");

    postCard.forEach(function(item){
        item.addEventListener("click", function(){
            this.classList.toggle("opacity");
        })
    })

// Contact us

const contBut = document.querySelector("[data-contact-us]");

contBut.addEventListener("click", function(){
    modalWindow = document.querySelector("[data-modal]");
    modalWindow.classList.remove("hidden");
    modalCard = modalWindow.querySelector(".modal-card");
    modalCard.classList.add("modal-card_active");
    body.classList.add('no-scroll-modal');
    // Закрытие окна по клюку на блок
    modalWindow.addEventListener("click", function(){
        modalWindow.classList.add("hidden");
        body.classList.remove('no-scroll-modal');
    })
    // запрет закрытия окна по клику на само окно
    modalCard.addEventListener("click", function(event){
        event.stopPropagation();
    })
})

const modalButton = document.querySelector(".modal-button");

modalButton.addEventListener("click", function(){
    modalWindow.classList.add("hidden");
    body.classList.remove('no-scroll-modal');
})

// ////////////////////////////////////////////////////////////////////////////////////////////////CART


