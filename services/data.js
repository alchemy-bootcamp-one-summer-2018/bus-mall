let stored = window.localStorage.getItem('products');
let data;

if(stored && stored !== 'undefined') {
    
    data = JSON.parse(stored);
}
else {
    data = {};
}


export default data;


window.addEventListener('beforeunload', () => {

    let json = JSON.stringify(data);

    window.localStorage.setItem('data', json);

});

// window.resetData = function() {
//     window.localStorage.removeItem('data');
//     data = undefined;
//     window.location.reload();
// };