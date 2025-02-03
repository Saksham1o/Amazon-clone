function loadHeader() {
  const header = document.getElementById('header');
  const xhr = new XMLHttpRequest();
  xhr.open('GET', 'header.html');
  xhr.onload = function () {
    if (xhr.status === 200) {
      header.innerHTML = xhr.responseText;
    } else {
      console.error('Error loading header:', xhr.statusText);
    }
  };
  xhr.send();
}

function loadFooter() {
  const footer = document.getElementById('footer');
  const xhr = new XMLHttpRequest();
  xhr.open('GET', 'footer.html');
  xhr.onload = function () {
    if (xhr.status === 200) {
      footer.innerHTML = xhr.responseText;
    } else {
      console.error('Error loading footer:', xhr.statusText);
    }
  };
  xhr.send();
}

window.addEventListener('load', () => {
  loadHeader();
  loadFooter();
});


document.querySelectorAll('.add-to-cart').forEach(button => {
  button.addEventListener('click', function() {
      const productName = this.getAttribute('data-name');
      const productPrice = parseInt(this.getAttribute('data-price')); 
      const productImage = this.getAttribute('data-image');
      const product = {
          name: productName,
          price: productPrice,
          image: productImage
      };
      let cart = JSON.parse(localStorage.getItem('cart')) || [];
      cart.push(product);
      localStorage.setItem('cart', JSON.stringify(cart));
      alert(`${productName} has been added to your cart!`);
  });
});

window.onload = function() {
  const boxesLeft = document.querySelectorAll('.section1 .box1, .section1 .box2, .section1 .box3, .section1 .box4');
  const boxesRight = document.querySelectorAll('.section2 .box1, .section2 .box2, .section2 .box3, .section2 .box4');

  boxesLeft.forEach((box, index) => {
      box.style.animationDelay = `${index * 0.1}s`; // Stagger the animation
      box.classList.add('slide-in-left'); // Add the slide-in-left class
  });

  boxesRight.forEach((box, index) => {
      box.style.animationDelay = `${index * 0.1}s`; // Stagger the animation
      box.classList.add('slide-in-right'); // Add the slide-in-right class
  });
};

