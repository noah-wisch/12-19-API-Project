
function init() {
    popCars();
}

function placeholder() {
    let request = new XMLHttpRequest();
    request.open('GET', 'URL');
    request.addEventListener('load', function () {
        let response = JSON.parse(request.responseText);
        console.log(response);

        for (let i = 0; i < array.length; i++) {
            popCars(response[i]);
        }
    });
    request.send();
}

function popCars() {
    let array = [
        {
            name: 'BMW X5',
            size: 3,
            cash: '$30',
        },

        {
            name: 'Honda Accord',
            size: 4,
            cash: '$45',
        },

        {
            name: 'Mazda CRX',
            size: 6,
            cash: '$25',
        },

        {
            name: 'Acura NSX',
            size: 2,
            cash: '$60',
        },
    ]

    let grandParent = document.querySelector('#cars');

    let parent = document.createElement('li');
    parent.appendChild(grandParent)

    let carName = document.createElement('p')
    parent.appendChild(carName)

    let carSize = document.createElement('p')
    parent.appendChild(carSize)

    let carCash = document.createElement('p')
    parent.appendChild(carCash)
    console.log(popCars);
}

window.addEventListener('load', init);