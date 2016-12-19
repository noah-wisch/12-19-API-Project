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
    // movie.textContent = 'movie';
    parent.appendChild(movie);

    let title = document.createElement('p');
    movie.appendChild(title);

    let poster = document.createElement('img');
    poster.src = 'https://image.tmdb.org/t/p/w185_and_h278_bestv2' + movie.poster_path;
    movie.appendChild(poster);
    console.log(movie.poster_path);
}

window.addEventListener('load', init);