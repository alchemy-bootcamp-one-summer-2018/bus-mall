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
        this.voteDisplay = props.voteDisplay;
    }


    render() {
        let dom = template();
        let votingArea = dom.querySelector('section.voting-area');
        let randomImage = new RandomImage ({
        
        });
        
        votingArea.appendChild(randomImage.render());

        return dom;
    }
}