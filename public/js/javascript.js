
let allTrash = document.querySelectorAll('.delete-item-cart');
let allItem = document.querySelectorAll('.cart-item');

for (let i=0; i<allTrash.length; i++) {
    allTrash[i].addEventListener('click', () => {
        allItem[i].remove();
        let countItem = document.querySelectorAll('.cart-item');
        document.querySelector('.cart-count-item').innerHTML = countItem.length;
        document.querySelector('#cart-total').innerHTML = countItem.length;
    });
}

