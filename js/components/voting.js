import html from '../html.js';
import RandomImage from './random-images.js';

let template = function() {
    return html`
        <main>
        <p>Hello Voting Area!</p>
        <section class="voting-area"></section>
        </main>
    `;

};



// for(var i = 0; i < names.length; i++) {
//     names[i].addEventListener('click', function() {
//         console.log('clicked');
//     }, false);
// }
// document.getElementById(`'${names[0]}'`).addEventListener('click', function() {
//     console.log('event listener working', names[0]);
// });

export default class VotingArea {
    constructor(props) {
        this.products = props.products;
        this.onClick = props.onClick;
    }

    update(props) {
        this.products = props.products;
        this.clearImages();
        this.renderImages();
    }
    
    clearImages() {
        while(this.votingArea.lastElementChild) {
            this.votingArea.lastElementChild.remove();
        }
    }

    renderImages() {
        for(let i = 0; i < this.products.length; i++) {
            let randomImage = new RandomImage ({
                product: this.products[i],
                onClick: this.onClick
            });
            
            this.votingArea.appendChild(randomImage.render());
        }
    }

    render() {
        let dom = template();
        this.votingArea = dom.querySelector('section.voting-area');
        this.renderImages();


        return dom;
    }
}