// import data from './.js';

// let images = data.images;

// if(!images) {
//     data.images = createImages();
//     images = data.images;
// }

export default function createImages() {

    let data = [{

        name: 'bag',
        image:'../images/bag.jpg'

    }, {
        name: 'banana',
        image: '../images/banana.jpg'
    }, {
        name:'bathroom',
        color: '../images/bathroom.jpg',

    }, { name:'boots',
        color: 'boots.jpg',

    }, { name:'breakfast',
        color: 'breakfast.jpg',

    }, { name:'bubblegum',
        color: 'bubblegum.jpg',

    }, { name:'cthulhur',
        color: 'cthulhur.jpg',

    }, { name:'dog-duck',
        color: 'dog-duck.jpg',

    }, { name:'dragon',
        color: 'dragon.jpg',

    }, { name:'pen',
        color: 'pen.jpg',

    }, { name:'pet-sweep',
        color: 'pet-sweep.jpg',

    }, { name:'scissors',
        color: 'scissors.jpg',

    }, { name:'shark',
        color: 'shark.jpg',

    }, { name:'sweep',
        color: 'sweep.jpg',

    }, { name:'tauntuan',
        color: 'tauntuan.jpg',

    }, { name:'unicorn',
        color: 'unicorn.jpg',

    }, { name:'usb',
        color: 'usb.jpg',

    }, { name:'water-can',
        color: 'water-can.jpg',

    }, { name:'wine-glass',
        color: 'win-glass.jpg',
    
    }, { name:'wireframe',
        color: 'wireframe.jpg',
    
    }];

    for(let i = 0; i < data.length; i++) {
        addKey(data[i]);
    }

    return data;
}




