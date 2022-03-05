let products = [];

let selectedIndex = -1;

function addProduct() {
    let productName = document.getElementById("product-name").value;
    let productPrice = document.getElementById("product-price").value;
    let productColor = document.getElementById("product-color").value;

    document.getElementById("product-name").value = "";
    document.getElementById("product-price").value = "";
    document.getElementById("product-color").value = "";

    let newProduct = {
        name: productName,
        price: productPrice,
        color: productColor
    };

    if (selectedIndex >= 0){
        products[selectedIndex] = newProduct;
        selectedIndex = -1
    }else {
        products.push(newProduct)
    }

    drawPage()
}

function deleteProduct(index) {
products.splice(index, 1);
    drawPage()
}

function drawPage() {
let result = "";
    for (let i = 0; i < products.length; i++){
        result +=
            "<div class='col-4 mt-3'>" +
            "<div class='card'>" +
            "<div class='card-header'><h3>"+ products[i].name +"</h3></div>" +
            "<div class='card-body'>" +
            "<p>Price: <b>"+ products[i].price +"</b></p>" +
            "<p>Color: <b>"+ products[i].color +"</b></p>" +
            "</div>" +
            "<div class='card-footer d-flex justify-content-between align-items-center'>" +
            "<button type='button' class='btn btn-success' onclick='editProduct("+ i +")'>Edit</button>" +
            "<button type='button' class='btn btn-danger' onclick='deleteProduct("+ i +")'>Delete</button>" +
            "</div>" +
            "</div>" +
            "</div>"
    }
    document.getElementById("result").innerHTML = result;
}
function editProduct(index) {

    document.getElementById("product-name").value = products[index].name;
    document.getElementById("product-price").value = products[index].price;
    document.getElementById("product-color").value = products[index].color;

    selectedIndex = index;
}