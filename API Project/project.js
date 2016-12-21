let cars = [
    {
        name: 'BMW X5',
        size: 3,
        cash: 30,
    },
    {
        name: 'Honda Accord',
        size: 4,
        cash: 45,
    },
    {
        name: 'Mazda CRX',
        size: 6,
        cash: 25,
    },
    {
        name: 'Acura NSX',
        size: 2,
        cash: 60,
    },
]

function init() {
    popCars(cars);
    getLots();
    //button.addEventListener('click', )
}

function getLots() {
    let request = new XMLHttpRequest();
    request.open('GET', 'https://dry-inlet-45164.herokuapp.com/lot');
    request.addEventListener('load', function () {
        let response = JSON.parse(request.responseText);
        for (let i = 0; i < response.length; i++) {
            showLots(response[i]);
        }
    });
    request.send();
}

function popCars(array) {
    let parent = document.querySelector('#cars');

    for (let i = 0; i < array.length; i++) {
        let cars = document.createElement('li');

        cars.innerHTML = Mustache.render(
            document.querySelector('#carList').innerHTML,
            {
                name: array[i].name,
                size: array[i].size,
                cash: array[i].cash,
            });
        parent.appendChild(cars);
    }
}

function showLots(lot) {
    let parent = document.querySelector('#lots');
    let lots = document.createElement('li');

    lots.innerHTML = Mustache.render(
        document.querySelector('#lotList').innerHTML,
        {
            lotName: lot.id,
            cap: lot.capacity,
            filled: lot.addCar,
            cost: lot.cost,
        });
    parent.appendChild(lots);
    //console.log(lot);
}

function spacesFilled(specificLot) {

    let total = 0;
    for (let i = 0; i < specificLot.cars.length; i++) {
        let car = specificLot.cars[i];
        total = total + cars.size; // 'size is a property of cars'
    }
    return total; // return the sum of all the properties
}

function update() { // NEEDS TO BE SET UP
    let request = new XMLHttpRequest();
    request.open('POST', 'https://dry-inlet-45164.herokuapp.com/addCar');
    request.addEventListener('load', function () {
        console.log('Car Sent to Lot');
    });
    request.send(JSON.stringify('placeholder'));
    //setInterval(showLots(), 9000);
}

window.addEventListener('load', init);