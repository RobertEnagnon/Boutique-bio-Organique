// GLObal
var products = [];
var cartItems = [];
var cart_n = document.getElementById('cart_n');

// DIVS
var fruitDiv = document.getElementById('fruitDiv');
var juiceDiv = document.getElementById('juiceDiv');
var saladDiv = document.getElementById('saladDiv');

// INFROMATION

var FRUIT = [
    {name:'Pomme', price: 2},
    {name: 'Ananas', price:3},
    {name: 'Avocat', price:1},
    {name: 'Orange', price:1.5},
    {name: 'Banane', price:2.5},
    {name: 'Tomate', price:1},
    {name: 'Orange', price:1.3},
];
var JUICE = [
    {name:'Jus de Pomme', price: 5},
    {name: 'Jus de Goyave', price:4},
    {name: 'Jus d\'Orange', price:3},
    {name: 'Jus #4', price:1},
    {name: 'Jus #5', price:1},
];
var SALAD = [
    {name:'Salad #1', price: 5},
    {name: 'Salad #2', price:6},
    {name: 'Salad #3', price:3},
    {name: 'Salad #4', price:4},
    {name: 'Salad #5', price:1},
];

// HTML
function HTMLfruitProduct(con) {
    let URL = `../img/fruits/fruit (${con}).jpg`;
    let btn = `btnFruit${con}`;

    return `
        <div class="col-md-4 col-sm-6">
            <div class="card mb-4 shadow-sm">
                <img class="card-img-top" style="height: 16rem;" src="${URL}" alt="card image cap" />
                <div class="card-body">
                    <i style="color: orange;" class="fa fa-star"></i>
                    <i style="color: orange;" class="fa fa-star"></i>
                    <i style="color: orange;" class="fa fa-star"></i>
                    <i style="color: orange;" class="fa fa-star"></i>
                    <i style="color: orange;" class="fa fa-star"></i>
                    
                    <p class="card-text">${FRUIT[con-1].name}</p>
                    <p class="card-text">Price: $${FRUIT[con-1].price}.00</p>
                    <div class="d-flex justify-content-between align-items-center">
                        <div class="btn-group">
                            <button type="button" onclick="cart2('${FRUIT[con-1].name}','${FRUIT[con-1].price}',
                                '${URL}','${con}','${btn}')"
                            class="btn btn-sm btn-outline-secondary">
                            <a href="/cart" style="color: inherit;">Payer</a>
                            </button>
                            <button type="button" onclick="cart('${FRUIT[con-1].name}','${FRUIT[con-1].price}',
                            '${URL}','${con}','${btn}')" id="btnFruit${con}"
                            class="btn btn-sm btn-outline-secondary">Ajouter au Panier</button>
                        </div>
                        <small class="text-muted">Livraison gratuite</small>
                    </div>
                </div>
            </div>
        </div>
    `;
}

function HTMLjuiceProduct(con) {
    let URL = `../img/juices/jus (${con}).jpg`;
    let btn = `btnJuice${con}`;

    return `
        <div class="col-md-4 col-sm-6">
            <div class="card mb-4 shadow-sm">
                <img class="card-img-top" style="height: 16rem;" src="${URL}" alt="card image cap" />
                <div class="card-body">
                    <i style="color: orange;" class="fa fa-star"></i>
                    <i style="color: orange;" class="fa fa-star"></i>
                    <i style="color: orange;" class="fa fa-star"></i>
                    <i style="color: orange;" class="fa fa-star"></i>
                    <i style="color: orange;" class="fa fa-star"></i>
                    
                    <p class="card-text">${JUICE[con-1].name}</p>
                    <p class="card-text">Price: $${JUICE[con-1].price}.00</p>
                    <div class="d-flex justify-content-between align-items-center">
                        <div class="btn-group">
                            <button type="button" onclick="cart2('${JUICE[con-1].name}','${JUICE[con-1].price}',
                                '${URL}','${con}','${btn}')"
                            class="btn btn-sm btn-outline-secondary">
                            <a href="/cart" style="color: inherit;">Payer</a>
                            </button>
                            <button type="button" onclick="cart('${JUICE[con-1].name}','${JUICE[con-1].price}',
                            '${URL}','${con}','${btn}')"  id="btnJuice${con}"
                            class="btn btn-sm btn-outline-secondary">Ajouter au Panier</button>
                        </div>
                        <small class="text-muted">Livraison gratuite</small>
                    </div>
                </div>
            </div>
        </div>
    `;
}

function HTMLsaladProduct(con) {
    let URL = `../img/salads/salade (${con}).jpg`;
    let btn = `btnSalad${con}`;

    return `
        <div class="col-md-4 col-sm-6">
            <div class="card mb-4 shadow-sm">
                <img class="card-img-top" style="height: 16rem;" src="${URL}" alt="card image cap" />
                <div class="card-body">
                    <i style="color: orange;" class="fa fa-star"></i> 
                    <i style="color: orange;" class="fa fa-star"></i>
                    <i style="color: orange;" class="fa fa-star"></i>
                    <i style="color: orange;" class="fa fa-star"></i>
                    <i style="color: orange;" class="fa fa-star"></i>
                    
                    <p class="card-text">${SALAD[con-1].name}</p>
                    <p class="card-text">Price: $${SALAD[con-1].price}.00</p>
                    <div class="d-flex justify-content-between align-items-center">
                        <div class="btn-group">
                            <button type="button" onclick="cart2('${SALAD[con-1].name}','${SALAD[con-1].price}',
                                '${URL}','${con}','${btn}')"
                            class="btn btn-sm btn-outline-secondary">
                            <a href="/cart" style="color: inherit;">Payer</a>
                            </button>
                            <button type="button" onclick="cart('${SALAD[con-1].name}','${SALAD[con-1].price}',
                            '${URL}','${con}','${btn}')" id="btnSalad${con}"
                            class="btn btn-sm btn-outline-secondary">Ajouter au Panier</button>
                        </div>
                        <small class="text-muted">Livraison gratuite</small>
                    </div>
                </div>
            </div>
        </div>
    `;
}

// ANIMATION
function animation() {
    const toast = swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer:1000
    });
    toast({
        type: 'success',
        title: 'Ajouté au Panier'
    });
}

// CART FUNCTIONS
function cart(name, price, url,con,btncart) {
    var item = {
        name:name,
        price:price,
        url:url
    };
    cartItems.push(item);
    let storage = JSON.parse(localStorage.getItem('cart'));
    if (storage == null) {
        products.push(item);
        localStorage.setItem('cart', JSON.stringify(products));
    } else {
        products = JSON.parse(localStorage.getItem('cart'));
        products.push(item);
        localStorage.setItem('cart',JSON.stringify(products));
    }
    products = JSON.parse(localStorage.getItem('cart'));
    cart_n.innerHTML = `[${products.length}]`;
    document.getElementById(btncart).style.display = 'none';
    animation();
}

function cart2(name,price,url,con,btncart) {
    var item = {
        name:name,
        price:price,
        url:url
    };
    cartItems.push(item);
    let storage = JSON.parse(localStorage.getItem('cart'));
    if (storage == null) {
        products.push(item);
        localStorage.setItem('cart', JSON.stringify(products));
    } else {
        products = JSON.parse(localStorage.getItem('cart'));
        products.push(item);
        localStorage.setItem('cart',JSON.stringify(products));
    }
    products = JSON.parse(localStorage.getItem('cart'));
    cart_n.innerHTML = `[${products.length}]`;
    document.getElementById(btncart).style.display = 'none';
}


(()=>{
    for (let i = 1; i <= 6; i++) {
      fruitDiv.innerHTML += `${HTMLfruitProduct(i)}`;
        
    }
    for (let i = 1; i <= 3; i++) {
        juiceDiv.innerHTML += `${HTMLjuiceProduct(i)}`;
        saladDiv.innerHTML += `${HTMLsaladProduct(i)}`;
    }
    if (localStorage.getItem('cart') == null) {
        
    } else {
        products = JSON.parse(localStorage.getItem('cart'));
        cart_n.innerHTML = `[${products.length}]`
    }
})();