
function toDOM(html) {
    var template = document.createElement('template');
    template.innerHTML = html;
    return template.content;
}

export default function html(strings, ...values) {
    let htmlString = String.raw(strings, ...values);
    return toDOM(htmlString);
}