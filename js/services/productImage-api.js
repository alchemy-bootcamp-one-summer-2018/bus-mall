

// let usedImages = {};
// let usedImagesCount = 0;


let imageData = [{
    name: 'bag',
    image:'../images/bag.jpg'

}, {
    name: 'banana',
    image:'../images/banana.jpg'
}, {
    name:'bathroom',
    image:'../images/bathroom.jpg',

}, { name:'boots',
    image:'../images/boots.jpg',

}, { name:'breakfast',
    image:'../images/breakfast.jpg',

}, { name:'bubblegum',
    image:'../images/bubblegum.jpg',

}, { name:'cthulhur',
    image:'../images/cthulhur.jpg',

}, { name:'dog-duck',
    image:'../images/dog-duck.jpg',

}, { name:'dragon',
    image:'../images/dragon.jpg',

}, { name:'pen',
    image:'../images/pen.jpg',

}, { name:'pet-sweep',
    image:'../images/pet-sweep.jpg',

}, { name:'scissors',
    image:'../images/scissors.jpg',

}, { name:'shark',
    image:'shark.jpg',

}, { name:'sweep',
    image:'sweep.jpg',

}, { name:'tauntuan',
    image:'tauntuan.jpg',

}, { name:'unicorn',
    image:'unicorn.jpg',

}, { name:'usb',
    image:'usb.jpg',

}, { name:'water-can',
    image:'water-can.jpg',

}, { name:'wine-glass',
    image:'win-glass.jpg',
    
}, { name:'wireframe',
    image:'wireframe.jpg',
    
}];
    
    

export default {

    getRandomImages: function() {

        for(let i = 0; i < 3; i++) {
            let randomNum = Math.floor(Math.random() * (imageData.length));
        
            let randomImage = imageData[randomNum];
            console.log('randomImage: ', randomImage);
        }
        
        //randomImages.slice;
    },

 

}; 



   

   





    


//need to loop through images

//need to send out 3 random that don't repeat

//need to get into the product image file


