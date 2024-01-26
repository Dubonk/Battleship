const addToBody = function () {
    const header = document.createElement('div');
    header.setAttribute('id', 'header');

    const pageTitle = document.createElement('h1');
    pageTitle.setAttribute('id', 'pageTitle');
    pageTitle.textContent = 'Battleship';

    header.appendChild(pageTitle)

    document.body.appendChild(header);
}
export { addToBody };