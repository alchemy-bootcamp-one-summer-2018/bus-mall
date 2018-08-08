# BusMall Pages and Layout

Time to update the BusMall site to be split into multiple web pages, and to design the layout of the individual pages. 

This is going to entail:

* Create a new "results" html page and associated app components
* Create a new "products" html page and associated app components
* Using CSS Grid, Flexbox and other CSS layout techniques to have a responsive, attractive:
    * Header with Navigation
    * index.html page (Product Voting)
    * results.html (Results Page)
* Storing the product data in localStorage so the two pages can share data.

## Adding Additional Pages

Each app (interactive) page is going to need three files:

* Html page: `index.html`, `results.html`, `products.html`
* Entry point: `index.js`, `results.js`, `products.js`
* Top-level app component: `app.js`, `results-app.js`, `products-app.js`

Within each "app" component, you can resuse children and/or have components used only on that page.

You should use a common `Header` component (`header.js`) and `Footer` components (`footer.js`) in all apps

## Design Layout

Each page needs to be designed using CSS Grid, Flexbox and/or other layout techiques.

The navigation should be responsive, with horizontally distributed links in wider devices
and vertically stacked in narrower devices.

### `index.html` (voting) page

The main parts of this page are:

* Image Voting
* ResultsList (not the chart)

* At widest:
  * The Voting section and the ResultsList should be shown _side-by-side_
  * The Voting section should show the iamges _side_by_side_
* More narrow:
  * The Voting section and the ResultsList should be shown _stacked vertically_
  * The Voting section should show the iamges _side_by_side_
* Narrowest:
  * The Voting section and the ResultsList should be shown _stacked vertically_
  * The Voting section should show the iamges _stacked vertically_
  
### `results.html` (charts) page

* ResultChart
* ResultsList (not the chart)
* Methodology (A loremipsum with research technique

* At widest:
  * ResultChart, ResultsList stacked on the left
  * Methodology on the right
* Narrower:
  * ResultChart and ResultsList stacked
  * Methodology stacked under
  
### `products.html` (products) page

Shows a image list of all products. Show reuse ProductImage component from `index.html`

* ProductList

* Product Images should tile
* BONUS STRETCH: Make them get smaller as the device gets narrower

## Data

You will need to use `data.js` to share `products` between all pages
