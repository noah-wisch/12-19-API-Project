let cars = [
    {
        carName: 'BMW X5',
        carSize: 3,
        carCost: 30,
        lotChoice:'BFE',
    },
    {
        carName: 'Honda Accord',
        carSize: 4,
        carCost: 45,
    },
    {
        carName: 'Mazda CX 5',
        carSize: 6,
        carCost: 25,
    },
    {
        carName: 'Acura NSX',
        carSize: 2,
        carCost: 60,
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
                carName: array[i].carName,
                carSize: array[i].carSize,
                carCost: array[i].carCost,
            });
        parent.appendChild(cars);

        // below is taken from Lexi
        let lot1Button = cars.querySelector('.lot1');
        lot1Button.addEventListener('click', function () {
            // updateCars has two parameters
            update(0, cars[i]);
        });

        let lot2Button = cars.querySelector('.lot2');
        lot2Button.addEventListener('click', function () {
            update(1, cars[i]);
        });

        let lot3Button = cars.querySelector('.lot3');
        lot3Button.addEventListener('click', function () {
            update(2, cars[i]);
        });

        let lot4Button = cars.querySelector('.lot4');
        lot4Button.addEventListener('click', function () {
            update(3, cars[i]);
        });
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
            cost: lot.cost,
            carName: lot.car,
        });
    parent.appendChild(lots);
    //console.log(lot);
}

// function spacesFilled(specificLot) {

//     let total = 0;
//     for (let i = 0; i < specificLot.cars.length; i++) {
//         let car = specificLot.cars[i];
//         total = total + cars.carSize; // 'carSize is a property of cars'
//     }
//     return total; // return the sum of all the properties
// }

function update() {
    let parkedCar = {
        carName: cars.carName,
        carSize: cars.carSize,
        carCost: cars.carCost,
        lotChoice: cars.lotChoice,
    }
    
    let request = new XMLHttpRequest();
    request.open('POST', 'https://dry-inlet-45164.herokuapp.com/addCar');
    request.addEventListener('load', function () {
        console.log('Car Sent to Lot');
    });
    request.send(JSON.stringify(parkedCar));
    //setInterval(showLots(), 9000);
}

window.addEventListener('load', init);