// GLOBAL
var products = JSON.parse(localStorage.getItem('cart'));
var cartItems = [];
var cart_n = document.getElementById('cart_n');
var table = document.getElementById('table');
var total = 0;

// HTML
function tableHTML(i) {
    return `
        <tr>
            <th scope="row">${i+1}</th>
            <th><img style="width:90px;" src="${products[i].url}" /></th>
            <th>${products[i].name}</th>
            <th>1</th>
            <th>${products[i].price}</th>
        </tr>
    
    `;
}

// CLEAN
function clean() {
    localStorage.clear();
    for (let i = 0; i < products.length; i++) {
        table.innerHTML += tableHTML(i);
        total = total + parseInt(products[i].price);
        
    }
    total =0;
    table.innerHTML = `
        <tr>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
        </tr>
    `;
    cart_n.innerHTML = ``;
    document.getElementById('btnBuy').style.display = "none";
    document.getElementById('btnClean').style.display = "none";
}

(()=>{
    for (let i = 0; i < products.length; i++) {
        table.innerHTML += tableHTML(i);
        total = total + parseInt(products[i].price);
    }
    table.innerHTML += `
        <tr>
            <th scope="col"></th>
            <th scope="col"></th>
            <th scope="col"></th>
            <th scope="col"></th>
            <th scope="col">Total: $${total}.00</th>
        </tr>
        <tr>
            <th scope="col"></th>
            <th scope="col"></th>
            <th scope="col"></th>
            <th scope="col">
                <button id="btnClear" onclick="clean()" class="btn text-white btn-warning">
                    Vider le Panier
                </button>
            </th>
            <th scope="col">
                <form id="form1" action="/cart" method="post" autocomplete="off">
                    <input type="hidden" name="total" value="${total}" />
                    <input type="hidden" name="_id" value="" />
                    <button id="submitbtn" class="btn btn-success">Payer</button>
                </form>
            </th>
        </tr>
    `;
    products = JSON.parse(localStorage.getItem('cart'));
    cart_n.innerHTML = `[${products.length}] `;
})();

var form = document.getElementById('form1');
document.getElementById('submitbtn').addEventListener('click',()=>{
    localStorage.clear();
    setTimeout(()=>{
        sub();
    }, 5000);
});

function sub() {
    setTimeout(()=>{
        form.submit();
    },5000);
}