export default function imageLoading() {
    let images = [
        {
            name: 'bag.jpg',
            src: '<img id="bag" src="./assets/bag.jpg" alt="It is a bag, what did you expect?" style="width:100%" style="max-height: 500px">',
            count: 0,
            selected: 0,
            id: 'bag'
        },
        {
            name: 'banana.jpg',
            src: '<img id="banana" src="./assets/banana.jpg" alt="It\'s a banana. Hopefully you eat it." style="width:100%" style="max-height: 500px">',
            count: 0,
            selected: 0,
            id: 'banana'
        },
        {
            name: 'bathroom.jpg',
            src: '<img id="bathroom" src="./assets/bathroom.jpg" alt="It\'s a bathroom, whaddaya want?" style="width:100%" style="max-height: 500px">',
            count: 0,
            selected: 0,
            id: 'bathroom'
        },
        {
            name: 'boots.jpg',
            src: '<img id="boots" src="./assets/boots.jpg" alt="It\'s a pair of boots, what did you expect?" style="width:100%" style="max-height: 500px">',
            count: 0,
            selected: 0,
            id: 'boots'
        },
        {
            name: 'breakfast.jpg',
            src: '<img id="breakfast" src="./assets/breakfast.jpg" alt="It\'s food, what did you expect?" style="width:100%" style="max-height: 500px">',
            count: 0,
            selected: 0,
            id: 'breakfast'
        },
        {
            name: 'bubblegum.jpg',
            src: '<img id="bubblegum" src="./assets/bubblegum.jpg" alt="It\'s bubblegum - the thing you can\'t walk and chew." style="width:100%" style="max-height: 500px">',
            count: 0,
            selected: 0,
            id: 'bubblegum'
        },
        {
            name: 'chair.jpg',
            src: '<img id="chair" src="./assets/chair.jpg" alt="It\'s a chair. You sit on it." style="width:100%" style="max-height: 500px">',
            count: 0,
            selected: 0,
            id: 'chair'
        },
        {
            name: 'cthulhu.jpg',
            src: '<img id="cthulhu" src="./assets/cthulhu.jpg" alt="It\'s a horror from the unknown beyond!" style="width:100%" style="max-height: 500px">',
            count: 0,
            selected: 0,
            id: 'cthulhu'
        },
        {
            name: 'dog-duck.jpg',
            src: '<img id="dog-duck" src="./assets/dog-duck.jpg" alt="It\'s a freak of nature." style="width:100%" style="max-height: 500px">',
            count: 0,
            selected: 0,
            id: 'dog-duck'
        },
        {
            name: 'dragon.jpg',
            src: '<img id="dragon" src="./assets/dragon.jpg" alt="It\'s a dragon! You are crunchy and good with ketchup!" style="width:100%" style="max-height: 500px">',
            count: 0,
            selected: 0,
            id: 'dragon'
        },
        {
            name: 'pen.jpg',
            src: '<img id="pen" src="./assets/pen.jpg" alt="It\'s a pen. Sell. Me. This... pen." style="width:100%" style="max-height: 500px">',
            count: 0,
            selected: 0,
            id: 'pen'
        },
        {
            name: 'pet-sweep.jpg',
            src: '<img id="pet-sweep" src="./assets/pet-sweep.jpg" alt="It\'s a... something... what did you expect?" style="width:100%" style="max-height: 500px">',
            count: 0,
            selected: 0,
            id: 'pet-sweep'
        },
        {
            name: 'scissors.jpg',
            src: '<img id="scissors" src="./assets/scissors.jpg" alt="It\'s a pair of scissors, nothing special." style="width:100%" style="max-height: 500px">',
            count: 0,
            selected: 0,
            id: 'scissors'
        },
        {
            name: 'shark.jpg',
            src: '<img id="shark" src="./assets/shark.jpg" alt="It\'s a shark! Rawr!" style="width:100%" style="max-height: 500px">',
            count: 0,
            selected: 0,
            id: 'shark'
        },
        {
            name: 'sweep.jpg',
            src: '<img id="sweep" src="./assets/sweep.png" alt="It\'s a baby wearing a stupid suit." style="width:100%" style="max-height: 500px">',
            count: 0,
            selected: 0,
            id: 'sweep'
        },
        {
            name: 'tauntaun.jpg',
            src: '<img id="tauntaun" src="./assets/tauntaun.jpg" alt="It\'s a Tauntaun! Tauntaun! Say that 3 times fast..." style="width:100%" style="max-height: 500px">',
            count: 0,
            selected: 0,
            id: 'tauntaun'
        },
        {
            name: 'unicorn.jpg',
            src: '<img id="unicorn" src="./assets/unicorn.jpg" alt="It\'s a Unicorn, Nothing to see here..." style="width:100%" style="max-height: 500px">',
            count: 0,
            selected: 0,
            id: 'unicorn'
        },
        {
            name: 'usb.gif',
            src: '<img id="usb" src="./assets/usb.gif" alt="It\'s a USB stick, what did you expect?" style="width:100%" style="max-height: 500px" style="max-height: 500px">',
            count: 0,
            selected: 0,
            id: 'usb'
        },
        {
            name: 'water-can.jpg',
            src: '<img id="water-can" src="./assets/water-can.jpg" alt="It\'s a water can, what did you expect?" style="width:100%" style="max-height: 500px">',
            count: 0,
            selected: 0,
            id: 'water-can'
        },
        {
            name: 'wine-glass.jpg',
            src: '<img id="wine-glass" src="./assets/wine-glass.jpg" alt="It\'s a wine glass, what did you expect?" style="width:100%" style="max-height: 500px">',
            count: 0,
            selected: 0,
            id: 'wine-glass'
        },
    ];

    // Need to keep track of previous images used; can use randomImageSet?
    let randomImageSet = [];
    let duplicateRemoved = images.slice();
    let imagesDisplayed = []; // Need to figure out how to update this rather than use separate variable

    function randomizeImages(images, min, max) {
        return Math.floor(
            (
                ((Math.random() * (max - min + 1)) + min)
            )
        );
    }

    for(let i = 0; i < 3; i++) {
        let index = randomizeImages(duplicateRemoved, 0, (duplicateRemoved.length - 1));
        randomImageSet.push(duplicateRemoved[index]);
        imagesDisplayed.push(duplicateRemoved[index]);
        // Lets me match the image chosen vs. the parent set, and refer to the parent
        // So, I have a way to grab and update the persisting image data count. Cleaner way to do this?
        let result = images.find(image => image.id === duplicateRemoved[index].id);
        result.count += 1;
        console.log(result.count);
        // Remove the exact image from the working image set, so no duplicates are displayed
        duplicateRemoved.splice(index, 1);
    }

    return randomImageSet;
}