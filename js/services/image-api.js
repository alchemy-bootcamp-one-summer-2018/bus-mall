

let images = [{
    name: 'bag',
    image: '/img/bag.png'
}, {
    name: 'banana',
    image: '/img/banana.png'
}, {
    name: 'bathroom',
    image: '/img/bathroom.png'
}, {
    name: 'boots',
    image: '/img/boots.png'
}, {
    name: 'breakfast',
    image: '/img/breakfast.png'
}];


export default {
    get: function() {
        return images;
    },
    getRandomImages: () => {
        let randomImages = [];

        while(randomImages.length < 3) {
            let index = Math.floor(Math.random() * images.length);
            let image = images[index];
            if(randomImages.includes(image)) continue;
            randomImages.push(image);
        }


        return randomImages;
    },
};