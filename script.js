const fetchData = async () => {
    const response = await fetch("https://dummyjson.com/products");
    const data = await response.json();
    data.products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.id = 'card';
        const productImage = document.createElement('img');
        productImage.src = product.images[0];
        const productTitle = document.createElement('h2');
        productTitle.textContent = product.title;
        const productPrice = document.createElement('p');
        productPrice.textContent = product.price;
        const productRating = document.createElement('p');
        productRating.textContent = product.rating;
        productCard.appendChild(productImage);
        productCard.appendChild(productTitle);
        productCard.appendChild(productPrice);
        productCard.appendChild(productRating);
        document.querySelector('#data-div').appendChild(productCard);
    })
}

const searchProduct = async () => {
    const query = document.getElementById('search').value;
    const response = await fetch(`https://dummyjson.com/products/search?q=${query}`);
    const data = await response.json();
    console.log(data.products);
    document.querySelector('#data-div').innerHTML = '';
    data.products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.id = 'card';
        const productImage = document.createElement('img');
        productImage.src = product.images[0];
        const productTitle = document.createElement('h2');
        productTitle.textContent = product.title;
        const productPrice = document.createElement('p');
        productPrice.textContent = product.price;
        const productRating = document.createElement('p');
        productRating.textContent = product.rating;
        productCard.appendChild(productImage);
        productCard.appendChild(productTitle);
        productCard.appendChild(productPrice);
        productCard.appendChild(productRating);
        document.querySelector('#data-div').appendChild(productCard);
    })
}

fetchData();