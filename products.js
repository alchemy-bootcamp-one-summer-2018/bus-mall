const products = [
    {
        name:'bag',
        url:'bag.jpg',
        viewCount: 0,
        voteCount: 0
    }, 
    {
        name:'banana',
        url:'banana.jpg',
        viewCount: 0,
        voteCount: 0
    }, 
    {
        name:'bathroom',
        url:'bathroom.jpg',
        viewCount: 0,
        voteCount: 0
    }, 
    {
        name:'boots',
        url:'boots.jpg',
        viewCount: 0,
        voteCount: 0
    }, 
    {
        name:'breakfast',
        url:'breakfast.jpg',
        viewCount: 0,
        voteCount: 0
    }, 
    {
        name:'bubblegum',
        url:'bubblegum.jpg',
        viewCount: 0,
        voteCount: 0
    }, 
    {
        name:'chair',
        url:'chair.jpg',
        viewCount: 0,
        voteCount: 0
    }, 
    {
        name:'cthulhu',
        url:'cthulu.jpg',
        viewCount: 0,
        voteCount: 0
    }, 
    {
        name:'dog-duck',
        url:'dog-duck.jpg',
        viewCount: 0,
        voteCount: 0
    }, 
    {
        name:'dragon',
        url:'dragon.jpg',
        viewCount: 0,
        voteCount: 0
    }, 
    {
        name:'pen',
        url:'pen.jpg',
        viewCount: 0,
        voteCount: 0
    }, 
    {
        name:'bag',
        url:'bag.jpg',
        viewCount: 0,
        voteCount: 0
    }, 
    {
        name:'pet-sweep',
        url:'pet-sweep.jpg',
        viewCount: 0,
        voteCount: 0
    }, 
    {
        name:'scissors',
        url:'scissors.jpg',
        viewCount: 0,
        voteCount: 0
    }, 
    {
        name:'shark',
        url:'shark.jpg',
        viewCount: 0,
        voteCount: 0
    }, 
    {
        name:'sweep',
        url:'sweep.jpg',
        viewCount: 0,
        voteCount: 0
    }, 
    {
        name:'tauntaun',
        url:'tauntaun.jpg',
        viewCount: 0,
        voteCount: 0
    }, 
    {
        name:'unicorn',
        url:'unicorn.jpg',
        viewCount: 0,
        voteCount: 0
    }, 
    {
        name:'usb',
        url:'usb.gif',
        viewCount: 0,
        voteCount: 0
    }, 
    {
        name:'water-can',
        url:'water-can.jpg',
        viewCount: 0,
        voteCount: 0
    }, 
    {
        name:'wine-glass',
        url:'wine-glass.jpg',
        viewCount: 0,
        voteCount: 0
    }
];

export default {
    get: () => products,
    getRandomProducts: () => {
        const randomProducts = [];

        while(randomProducts.length < 3) {
            const index = Math.floor(Math.random() * 21);
            const product = products[index];
            if(randomProducts.includes(product)) continue;
            randomProducts.push(product);
        }

        randomProducts.forEach(product => product.views ++);
        console.log(randomProducts);
        return randomProducts;
    }
     
};

