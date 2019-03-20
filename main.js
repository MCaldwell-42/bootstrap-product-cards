const products = [
    {
        title: 'product1',
        description: 'sumsum',
        imageUrl: 'links.com',
        size: '4"x4"',
        weight: '8oz.',
        price1: 'costs',
        price2: 'costs',
        price3: 'costs',
        validUntil: '04/01/2016'
    },
    {
        title: 'product2',
        description: 'sumsum',
        imageUrl: 'links.com',
        size: '4"x4"',
        weight: '8oz.',
        price1: 'costs',
        price2: 'costs',
        price3: 'costs',
        validUntil: '04/01/2016'
    },
    {
        title: 'product3',
        description: 'sumsum',
        imageUrl: 'links.com',
        size: '4"x4"',
        weight: '8oz.',
        price1: 'costs',
        price2: 'costs',
        price3: 'costs',
        validUntil: '04/01/2016'
    },
    {
        title: 'product4',
        description: 'sumsum',
        imageUrl: 'links.com',
        size: '4"x4"',
        weight: '8oz.',
        price1: 'costs',
        price2: 'costs',
        price3: 'costs',
        validUntil: '04/01/2016'
    },
    {
        title: 'product5',
        description: 'sumsum',
        imageUrl: 'links.com',
        size: '4"x4"',
        weight: '8oz.',
        price1: 'costs',
        price2: 'costs',
        price3: 'costs',
        validUntil: '04/01/2016'
    },
];

const printToDom = (divId, textToPrint) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = textToPrint;
};

const ProdBuilder = (cards) => {
    let domString = '';
        // alt. method domString += '<div class="row">';
    cards.forEach((product) => {
        domString += `<div class="col-4 product">`;
        domString += `<h2>${product.title}</h2>`;
        domString +=    `<div class="card">`;
        domString +=        `<img src="..." class="card-img-top" alt="...">`;
       // add card-header class and my titles and what not
        domString +=        `<div class="card-body">`;
        domString +=        `<h5 class="card-title">Card title</h5>`;
        domString +=        `<p class="card-text">Some quick example text to build on the card title and make up the bulk ofcontent.</p>`;
        domString +=        `<a href="#" class="btn btn-primary">Go somewhere</a>`;
        domString +=    `</div>`;
        domString += `</div>`;
        // domString += `<p>${product.description}</p>`;
        // domString += `<p>${product.imageUrl}</p>`;
        // domString += `<p>${product.size}</p>`;
        // domString += `<p>${product.weight}</p>`;
        // domString += `<p>${product.price1}</p>`;
        // domString += `<p>${product.price2}</p>`;
        // domString += `<p>${product.price3}</p>`;
        // domString += `<p>${product.validUntil}</p>`;
        domString += `</div>`;
    })
    // alt method domString += '</div>';
    printToDom('page', domString);
}


const init = () => {
 ProdBuilder(products);
};

init()