function init() {
    let search = document.querySelector('#search');
    search.addEventListener('click', searchMovies);
}

function searchMovies() {
    let searchBox = document.querySelector('#entry');
    let keyword = searchBox.value;

    let url = 'https://api.themoviedb.org/3/search/movie?api_key=31350063b13fb0b35d7f345da14d179b&query=' + keyword;

    let request = new XMLHttpRequest();
    request.open('GET', url);
    request.addEventListener('load', function () {
        let response = JSON.parse(request.responseText);
        let results = response.results[0];

        for (let i = 0; i < response.results.length; i++) {
            let movie = response.results[i];
            moviesResults(movie);
        }
        console.log('response');
    });
    request.send();
}

function moviesResults() {
    let parent = document.querySelector('#moviesList')

    let movie = document.createElement('li');
    movie.textContent = 'movie';
    parent.appendChild(movie);
}

window.addEventListener('load', init);