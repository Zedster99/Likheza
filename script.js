document.getElementById('viewmore').addEventListener('click', function() {
    window.location.href = 'products.html'; 
});
function checkProduct() {
    const prodDesc = document.getElementById('topic2');
    const name = document.getElementById('productName');
    const productDesc = document.getElementById('productDesc');
    let num = 0;

    if (num === 0) {
        prodDesc.style.display = 'block';
        name.innerText = 'Tikiw Storage Basket'
    }
};

document.getElementById('product1').addEventListener('click', function () {
    checkProduct();
});