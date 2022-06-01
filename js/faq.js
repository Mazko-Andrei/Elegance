
let faqtitle = document.querySelectorAll('[data-name="accordeon-title"]');

faqtitle.forEach(function(item){

    item.addEventListener("click", function(){
        sub = item.getElementsByClassName("subscription__answer");
        // показать текст
        for (let i of sub) {    
        i.classList.toggle("anim");
        i.classList.remove("hidden");
        // смена иконки плюс/крестик
            if(!i.classList.contains('anim')){
            i.classList.add("hidden");
            item.style.backgroundColor = "#e1f4fc"; // смена фона
            span = item.getElementsByClassName("material-symbols-outlined"); 
            for (let y of span){
                y.style=`transform: rotate(0deg);`;
            }   
            }else {
            // i.classList.toggle("anim");
            item.style.backgroundColor = "white"; // смена фона
            span = item.getElementsByClassName("material-symbols-outlined"); 
            for (let y of span){
                y.style=`
                transform: rotate(135deg) scale(1.5, 1.5);
                `;
            }
            }
        }
    
    })
})


