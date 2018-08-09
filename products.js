const products = [
    {
        name:'bag',
        image:'bag.jpg',
        viewCount: 0,
        voteCount: 0
    }, 
    {
        name:'banana',
        image:'banana.jpg',
        viewCount: 0,
        voteCount: 0
    }, 
    {
        name:'bathroom',
        image:'bathroom.jpg',
        viewCount: 0,
        voteCount: 0
    }, 
    {
        name:'boots',
        image:'boots.jpg',
        viewCount: 0,
        voteCount: 0
    }, 
    {
        name:'breakfast',
        image:'breakfast.jpg',
        viewCount: 0,
        voteCount: 0
    }, 
    {
        name:'bubblegum',
        image:'bubblegum.jpg',
        viewCount: 0,
        voteCount: 0
    }, 
    {
        name:'chair',
        image:'chair.jpg',
        viewCount: 0,
        voteCount: 0
    }, 
    {
        name:'cthulhu',
        image:'cthulu.jpg',
        viewCount: 0,
        voteCount: 0
    }, 
    {
        name:'dog-duck',
        image:'dog-duck.jpg',
        viewCount: 0,
        voteCount: 0
    }, 
    {
        name:'dragon',
        image:'dragon.jpg',
        viewCount: 0,
        voteCount: 0
    }, 
    {
        name:'pen',
        image:'pen.jpg',
        viewCount: 0,
        voteCount: 0
    }, 
    {
        name:'bag',
        image:'bag.jpg',
        viewCount: 0,
        voteCount: 0
    }, 
    {
        name:'pet-sweep',
        image:'pet-sweep.jpg',
        viewCount: 0,
        voteCount: 0
    }, 
    {
        name:'scissors',
        image:'scissors.jpg',
        viewCount: 0,
        voteCount: 0
    }, 
    {
        name:'shark',
        image:'shark.jpg',
        viewCount: 0,
        voteCount: 0
    }, 
    {
        name:'sweep',
        image:'sweep.jpg',
        viewCount: 0,
        voteCount: 0
    }, 
    {
        name:'tauntaun',
        image:'tauntaun.jpg',
        viewCount: 0,
        voteCount: 0
    }, 
    {
        name:'unicorn',
        image:'unicorn.jpg',
        viewCount: 0,
        voteCount: 0
    }, 
    {
        name:'usb',
        image:'usb.gif',
        viewCount: 0,
        voteCount: 0
    }, 
    {
        name:'water-can',
        image:'water-can.jpg',
        viewCount: 0,
        voteCount: 0
    }, 
    {
        name:'wine-glass',
        image:'wine-glass.jpg',
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

