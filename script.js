
//for menu bar

let content = document.getElementById('content')

function menu(){
    content.classList.toggle('show');
}
//for focus

function focusView() {
    document.getElementById("middle").scrollIntoView({
        behavior: "smooth"
    });

}
//for cart

var products = [
    {
        id: 0,
        image: 'img/img1.png',
        title: 'womens day special',
        price: 500
    },
    {
        id: 1,
        image: 'img/img2.png',
        title: 'Mothers day special',
        price: 250
    },
    {
        id: 2,
        image: 'img/img3.png',
        title: 'Rockstar special',
        price: 250
    },
    {
        id: 3,
        image: 'img/img4.png',
        title: 'Lovers day special',
        price: 250
    },
    {
        id: 4,
        image: 'img/img5.png',
        title: 'Gifts for friend',
        price: 250
    },
];

// Correct usage of Set and spread operator to get unique categories
const categories = [...new Set(products.map((item) => item))];

let i = 0;
document.getElementById('main').innerHTML = categories.map((title) => {
    // Filter products by category
    const productsInCategory = products.filter((item) => item === title);
    
    return productsInCategory.map((product) => {
        const { image, title, price } = product;

        return `
            <div class="pro1">
                <img class='img' src="${image}">
                <div class="list">
                    <p>₹${price}</p>
                    <p>${title}</p>
                    <button onclick="addToCart(${i++})">+</button>
                </div>
            </div>
        `;
    }).join('');
}).join('');


var cart = [];

function addToCart(a) {
    cart.push({...categories[a]});
    displayCart();
}
// for delete
function deleteItem(index) {
    cart.splice(index, 1);
    displayCart();
}

function displayCart() {
    let j = 0;
    let total=0;
    if (cart.length == 0) {
        document.getElementById('empty').innerHTML = "Your cart is empty";
        document.getElementById('total').innerHTML = "₹ "+0+".00";
    } 
    else {
        document.getElementById('empty').innerHTML = cart.map((items) => {
            var {image, title, price} = items;
            total = total+price;
            document.getElementById('total').innerHTML = "₹ "+total+".00";

            return `
                <div class="cartProduct">
                    <img src=${image}>
                    <p>${title}</p>
                    <p>${price}.00</p>
                    <i class='fa-solid fa-trash' onclick='deleteItem(${j++})'></i>
                </div>
            `;
        }).join('');
    }
}
function showcart(){
    document.getElementById('cart').classList.toggle('cartshow');
    content.classList.remove('show')
}
function removecart(){
    document.getElementById('cart').classList.toggle('cartshow');

}


