function init() {
    getDonuts();
    let createBtn = document.querySelector('#new-donut');
    createBtn.addEventListener('click', function() {
        makeNewDonutType();
    });
}
function getDonuts() {
    let request = new XMLHttpRequest();
    request.open('GET', 'http://192.168.1.29:4567/donut-types');
    request.addEventListener('load', function () {
        console.log('we heard back, bruh.')
        let response = JSON.parse(request.responseText);

        for (let i = 0; i < response.length; i++) {
            showDo(response[i]);
        }
    });
    request.send();
}

function makeNewDonutType() {
    let donutType = {
        name: document.querySelector('#name').value,
        description:document.querySelector('#description').value,
        count:0,
    };
    
    let request = new XMLHttpRequest();
    request.open('POST', 'http://192.168.1.29:4567/donut-types');
    request.addEventListener('load', function() {
        console.log('NEW DONUTS');
    });
    request.send(JSON.stringify(donutType));
}

function showDo(donut) {
    let newDonut = document.createElement('li');
    newDonut.textContent = donut.name;

    let donutTitle = document.createElement('h2');
    donutTitle.textContent = donut.name;
    newDonut.appendChild(donutTitle);

    let donutDescription = document.createElement('p');
    donutDescription.textContent = donut.description;
    newDonut.appendChild(donutDescription);

    let donutCount = document.createElement('p');
    donutTitle.textContent = donut.count;
    newDonut.appendChild(donutCount);

    let parent = document.querySelector('#donuts');
    parent.appendChild(newDonut);
}

window.addEventListener('load', init);