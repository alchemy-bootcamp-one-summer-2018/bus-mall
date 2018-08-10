import html from '/js/html.js';

let template = function() {
    return html`
        <a class="logo-container" href="/index.html" title="Bus Mall">
            <img src="/assets/bus-logo.png" width="180">
            <h1 class="head-title">Bus Mall</h1>
        </a>
        
        <nav>
            <ul>
                <li>
                    <a href="/index.html" title="Home">Home</a>
                </li>
                <li>
                    <a href="/pages/products.html" title="Product Gallery">Product Gallery</a>
                </li>
                <li>
                    <a href="/pages/results.html" title="Survey Results">Survey Results</a>
                </li>
                <li>
                    <a href="/pages/about.html" title="Our story">Our Story</a>
                </li>
            </ul>
        </nav>
        
        <p class="core-info">
            <br> 12345 Main St
            <br> Portland, OR 97220
            <br> 12:02am - 11:58pm
            <br> (800) BUS - MALL
            <br>
            <a style="color: rgba(66, 134, 244, 1);" href="https://www.youtube.com/watch?v=i9SSOWORzw4">totallylegitlinktobuystuff@aol.com</a> </p>

   `;
};

// make class="active" for whichever page the header is loaded on

export default class Header {

    render() {
        let dom = template();
        return dom;
    }
}