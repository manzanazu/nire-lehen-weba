document.getElementById('googleButton').addEventListener('click', function () {
    if (movies.length === 0) return;
    const randomIndex = Math.floor(Math.random() * movies.length);
    const randomMovie = movies[randomIndex];
    window.open(randomMovie.link, '_blank');
  });