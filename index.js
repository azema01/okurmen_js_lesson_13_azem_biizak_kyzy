document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('#container');

    // function addNewElement(){
    // const NewElement = document.createElement('p');
    // NewElement.innerHTML = 'hello world';

    // container.appenChild(NewElement);
    // }

    // const addNewElement = function () {
    //     const NewElement = document.createElement('p');
    //     NewElement.innerHTML = 'hello world';

    //     container.appenChild(NewElement);
    // }

    // addNewElement();

    // const createElement = (text, callback) => {
    //     const NewElement = document.createElement('p');
    //     NewElement.innerHTML = text;

    //     callback(NewElement);
    // };
    
    // createElement('azema girl', (element) => {
    //     container.appendChild(element);
    // });
    
    const input = document.querySelector('.input');
    const button = document.querySelector('.btn');
    
    input.addEventListener('change' , (e) => {
    //  console.log(e.taget.value);
    console.log(e);
    });
    button.addEventListener('click' ,(e) => {
        // e.target.innerHTML = 'hello';
        input.value = '';
    });
});