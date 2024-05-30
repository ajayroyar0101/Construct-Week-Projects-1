
document.getElementById('searchBar').addEventListener('keyup', function(event) {
  
  console.log('Search term:', event.target.value);
});


document.getElementById('signIn').addEventListener('click', function() {

  alert('Sign-in functionality goes here.');
});

let cartCount = 0;
document.getElementById('cart').addEventListener('click', function() {
  
  alert('Cart functionality goes here.');
});

function addToCart() {
  cartCount++;
  document.getElementById('cart').textContent = `Cart (${cartCount})`;
}
