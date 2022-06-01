let products = 
    {
    img: "produсts",
    name: "Cotton Skirt",
    count: 2,
    price: 95,
    };

let img = products.img;
let brend = products.name;
let count = products.count;
let price = products.price;



function cartProduct (img,brend,count,price) {
    
    cart = `
    <section class="product-cart">
        <div class="product-cart__img">
            <img src="./img/products/${img}.jpg" alt="">
        </div>
        <div class="product-cart__title">
        ${brend}
        </div>
        <div class="product-cart__count">
            <div class="count-cart">
                <div class="count-cart__box">
                    <input type="number" class="count-cart__input" min="1" max="100" value="${count}">
                </div>
                <div class="count-cart__controls">
                    <button type="button" class="count-cart__up">
                        <img src="./img/cart/icon-cart/Shape-up.svg" alt="Increase">
                    </button>
                    <button type="button" class="count-cart__down">
                        <img src="./img/cart/icon-cart/Shape-down.svg" alt="Decrease">
                    </button>
                </div>
            </div>
        </div>
        <div class="product-cart__price">
        ${count * price}$
        </div>
        <div class="product-cart__controls">
            <button type="button">
                <img src="./img/cart/icon-cart/x.svg" alt="Delete">
            </button>
        </div>
    </section>
    `;
   
    return cart;
}
products = document.querySelector("#products");
products.innerHTML = cartProduct(img,brend,count,price);

// удаление товара из корзины
document.querySelector(".product-cart__controls").addEventListener("click", function(){
    document.querySelector(".product-cart").classList.add("hidden");
})



// настройка количества товара
let plus = document.querySelectorAll('.count-cart__up');
let minus = document.querySelectorAll('.count-cart__down');
let field = document.querySelectorAll('.count-cart__input');


for (let item of plus){
    item.addEventListener('click', function(){ 
        for(let item of field){
           item.value++;
        }
    })
}

for (let item of minus){
    item.addEventListener('click', function(){ 
        for(let item of field){
            if(item.value>0){
                item.value--;
            }else{
                item.value = 0;   
            }
        }
    })
}











// let sumProd = "";
// let totalprice = Number;
// let totalcount = +"";
// let sumprice = +"";
// for(i=0; i<prod.length; i++){

// totalprice[i] = prod[i].count * prod[i].price;   
// sumProd += 
// `  <section id="${i}" class="product-cart">
// <div class="product-cart__img">
//     <img src="./img/products/${prod[i].img}.jpg" alt="${prod[i].name}">
// </div>
// <div class="product-cart__title">
// ${prod[i].name}
// </div>
// <div class="product-cart__count">
//     <div class="count-cart">
//         <div class="count-cart__box">
//             <input type="number" class="count-cart__input" min="1" max="100" value="${prod[i].count}">
//         </div>
//         <div class="count-cart__controls">
//             <button type="button" class="count-cart__up">
//                 <img src="./img/cart/icon-cart/Shape-up.svg" alt="Increase">
//             </button>
//             <button type="button" class="count-cart__down">
//                 <img src="./img/cart/icon-cart/Shape-down.svg" alt="Decrease">
//             </button>
//         </div>
//     </div>
// </div>
// <div class="product-cart__price">
// ${totalprice[i]}$
// </div>
// <div data-button="${i}" class="product-cart__controls">
//    <button type="button">
//        <img src="./img/cart/icon-cart/x.svg" alt="Delete">
//    </button>
// </div>
// </section>`;

// totalcount += prod[i].count;
// sumprice += totalprice[i];

// }
// products.innerHTML = sumProd; 

// // Итого к оплате
// price.innerHTML = `${sumprice} $`;
// // Итого едениц товара
// count.innerHTML = `${totalcount} units`;




// // настройка количества товара
// let plus = document.querySelectorAll('.count-cart__up');
// let minus = document.querySelectorAll('.count-cart__down');
// let field = document.querySelectorAll('.count-cart__input');
// console.log(field);

// for (let item of plus){
//     item.addEventListener('click', function(){ 
//         for(let item of field){
//             item.value++;
//         }
//     })
// }

// for (let item of minus){
//     item.addEventListener('click', function(){ 
//         for(let item of field){
//             if(item.value>0){
//                 item.value--;
//             }else{
//                 item.value = 0;   
//             }
//         }
//     })
// }

