document.getElementById('back').addEventListener('click', function() {
    window.location.href = 'index.html';
})
let num = 0;
function checkProduct() {
    const prodDesc = document.getElementById('topic2');
    const name = document.getElementById('productName');
    const productDesc = document.getElementById('productDesc');
    const pic = document.getElementById('productphoto');
    if (num === 0) {
        prodDesc.style.display = 'flex';
        name.innerText = 'Tikiw Storage Chest'
        productDesc.innerText = 'The Tikiw Storage Chest is a beautifully crafted piece that can serve as a basket, storage hamper, or decorative item. Made from natural tikiw fibers, it is not only functional but also adds a touch of elegance to any space. With strong leather straps and a handle, this storage chest combines traditional and modern styles, making it perfect for everyday use or as a charming display piece in your home.';
        pic.src = 'images/tiki-storage-chest.jpg';
    } else if (num === 1) {
        prodDesc.style.display = 'flex';
        name.innerText = 'EcoWeave Tikiw Storage Basket'
        productDesc.innerText = "The EcoWeave Tikiw Storage Baskets are unique organizers made from natural tikiw fibers, a sustainable and eco-friendly material known for its durability and aesthetic appeal. The baskets have a rich texture that fits well with any home style, whether it's cozy and rustic or sleek and modern. They are great for organizing everything from toys to linens or simply as decorative accents. Featuring a natural finish and sturdy black handles, these baskets are practical and stylish.";
        pic.src = 'images/tiki-storage-basket.jpg';
    }  else if (num === 2) {
        prodDesc.style.display = 'flex';
        name.innerText = 'Tikiw Terra Placemat'
        productDesc.innerText = "The Tikiw Terra Placemat is made from tikiw fibers and beautifully combines sustainability with style. Its tightly woven design gives it a long-lasting quality while providing a smooth surface that protects your dining table from scratches and stains. With its handcrafted design, this placemat enhances your dining experience and fits perfectly with rustic, bohemian, or modern home styles. It adds a touch of nature-inspired charm to every meal.";
        pic.src = 'images/carpet.jpg';
    }  else if (num === 3) {
        prodDesc.style.display = 'flex';
        name.innerText = 'Tikiw Haven Basket'
        productDesc.innerText = "A sturdy, handwoven basket crafted from durable tikiw plant fibers, this piece is lightweight and perfect for organizing items at home or in the office. Every detail of the piece is adorned with a natural, homely charm that is sure to brighten up any space. As each basket has been locally crafted, patterns are different, and so is quality. Eco-friendly and sustainable, the Tikiw Haven Basket would please anyone who is keen on style and the environment.";
        pic.src = 'images/basket.jpg';
    }  else if (num === 4) {
        prodDesc.style.display = 'flex';
        name.innerText = 'Tikiw Eco Tote Bag'
        productDesc.innerText = "This Tikiw Eco Tote Bag is made from tough tikiw fibers. Handcrafted, these shopping bags are stylish yet sustainable and offer enough room for grocery, daily essentials, or beach gear. These bags, having intricate patterns of weaving, combine utility with the essence of timelessness. Choose Tikiw Eco Tote and support local artisans towards a greener, plastic-free lifestyle.";
        pic.src = 'images/totebag.jpg';
    } else if (num === 5) {
        prodDesc.style.display = 'flex';
        name.innerText = 'Tikiw Flexi Rope'
        productDesc.innerText = "This is a rope made of high-quality tikiw plant fibers that are braided tightly, giving it good strength, making it suitable for usage in making and decorative purposes for very heavy work. It's also lightweight and eco-friendly and thus presents a sustainable substitute to synthetic ropes. For all practical and creative purposes, the Tikiw Flex Rope represents an ideal balance of toughness and care for the environment.";
        pic.src = 'images/ropee.jpg';
};};


const jump = document.getElementById('jump');

document.getElementById('product1').addEventListener('click', function () {
    num = 0;
    checkProduct();
    jump.scrollIntoView({ behavior: 'smooth' });
});

document.getElementById('product2').addEventListener('click', function () {
    num = 1;
    checkProduct();
    jump.scrollIntoView({ behavior: 'smooth' });
});

document.getElementById('product3').addEventListener('click', function () {
    num = 2;
    checkProduct();
    jump.scrollIntoView({ behavior: 'smooth' });
});

document.getElementById('product4').addEventListener('click', function () {
    num = 3;
    checkProduct();
    jump.scrollIntoView({ behavior: 'smooth' });
});

document.getElementById('product5').addEventListener('click', function () {
    num = 4;
    checkProduct();
    jump.scrollIntoView({ behavior: 'smooth' });
});

document.getElementById('product6').addEventListener('click', function () {
    num = 5;
    checkProduct();
    jump.scrollIntoView({ behavior: 'smooth' });
});