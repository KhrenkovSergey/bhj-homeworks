const products = document.querySelectorAll('.product');

const cartProducts = document.querySelector('.cart__products');

products.forEach((product) => {
    const quantityControls = product.querySelector('.product__quantity-controls');
    const quantityValue = product.querySelector('.product__quantity-value');
    let currentQuantity = parseInt(quantityValue.textContent);

    quantityControls.querySelector('.product__quantity-control_inc').addEventListener('click', () => {
        currentQuantity++;
        quantityValue.textContent = currentQuantity;
    });

    quantityControls.querySelector('.product__quantity-control_dec').addEventListener('click', () => {
        if (currentQuantity > 1) {
            currentQuantity--;
            quantityValue.textContent = currentQuantity;
        }
    });

    const addButton = product.querySelector('.product__add');
    addButton.addEventListener('click', () => {
        const productId = product.getAttribute('data-id');
        const productImageSrc = product.querySelector('.product__image').src;

        const existingProduct = cartProducts.querySelector(`.cart__product[data-id="${productId}"]`);
        if (existingProduct) {
            const cartProductCount = existingProduct.querySelector('.cart__product-count');
            cartProductCount.textContent = parseInt(cartProductCount.textContent) + currentQuantity;
        } else {
            const cartProduct = document.createElement('div');
            cartProduct.classList.add('cart__product');
            cartProduct.setAttribute('data-id', productId);

            cartProduct.innerHTML = `
                <img class="cart__product-image" src="${productImageSrc}">
                <div class="cart__product-count">${currentQuantity}</div>
                <div class="cart__product-remove" style="cursor: pointer;">&otimes;</div>
            `;

            cartProducts.appendChild(cartProduct);

            const removeButton = cartProduct.querySelector('.cart__product-remove');
            removeButton.addEventListener('click', () => {
                cartProduct.remove();
            });
        }

        currentQuantity = 1;
        quantityValue.textContent = currentQuantity;
    });
});