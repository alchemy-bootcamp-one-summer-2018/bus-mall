let data = [{
    name: 'bag',
    image: '../../assets/bag.jpg'
}, {
    name: 'banana',
    image: '../../assets/banana.jpg'
}, {
    name: 'bathroom',
    image: '../../assets/bathroom.jpg'
}, {
    name: 'boots',
    image: '../../assets/boots.jpg'
}, {
    name: 'breakfast',
    image: '../../assets/breakfast.jpg'
}, {
    name: 'bubblegum',
    image: '../../assets/bubblegum.jpg'
}, {
    name: 'chair',
    image: '../../assets/chair.jpg'
}, {
    name: 'cthulhu',
    image: '../../assets/cthulhu.jpg'
}, {
    name: 'dog-duck',
    image: '../../assets/dog-duck.jpg'
}, {
    name: 'dragon',
    image: '../../assets/dragon.jpg'
}, {
    name: 'pen',
    image: '../../assets/pen.jpg'
}, {
    name: 'pet-sweet',
    image: '../../assets/pet-sweep.jpg'
}, {
    name: 'scissors',
    image: '../../assets/scissors.jpg'
}, {
    name: 'shark',
    image: '../../assets/shark.jpg'
}, {
    name: 'sweep',
    image: '../../assets/sweep.jpg'
}, {
    name: 'tauntaun',
    image: '../../assets/tauntaun.jpg'
}, {
    name: 'unicorn',
    image: '../../assets/unicorn.jpg'
}, {
    name: 'usb',
    image: '../../assets/usb.gif'
}, {
    name: 'water-can',
    image: '../../assets/water-can.jpg'
}, {
    name: 'wine-glass',
    image: '../../assets/wine-glass.jpg'
}
    

];

export default {
    createProducts: () => {
        return data;
    },
    randomize: () => {
        let threeImages = [];
        for(let i = 0; i < 3; i++) {
            let randomNum = Math.floor(Math.random() * data.length);
        
            let randomImage = data[randomNum];
            threeImages.push(randomImage);
            data.splice(randomNum, 1);
        }
        
        return threeImages;
        
    }
};