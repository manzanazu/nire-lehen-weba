// GENERO
const applyButton = document.getElementById("applyButton");

//-------------------------------------------------------------------------
// SLIDER
const slider = document.getElementById("lengthSlider");
const output = document.getElementById("sliderValue");

// Actualiza el número visible en todo momento
output.textContent = slider.value;

slider.addEventListener("input", function () {
  output.textContent = slider.value;
});

//-------------------------------------------------------------------------
// YEAR
const year = document.getElementById("lengthYear");
const outputYear = document.getElementById("yearValue");

// Actualiza el número visible en todo momento
outputYear.textContent = year.value;

year.addEventListener("input", function () {
  outputYear.textContent = year.value;
});

//----------------------------------------------------------------
// BUTTON
applyButton.addEventListener("click", function () {
  const selectedGenre = document.getElementById("genre").value;
  const useGenre = document.getElementById("enableGenre").checked;
  const useSlider = document.getElementById("enableSlider").checked;
  const useYear = document.getElementById("enableYear").checked;

  console.log(useGenre);
  console.log(useSlider);
  console.log(useYear);

  // Eliminar la grid original
  const gridContainer = document.getElementById("container");
  if (gridContainer) gridContainer.remove();

  // Limpiar las películas existentes antes de añadir nuevas
  const existingMovies = document.querySelectorAll("#container .movie-card");
  existingMovies.forEach(movie => movie.remove());

  document.querySelectorAll("div").forEach(el => {
    const isMovieContainer =
      el.style.display === "flex" &&
      el.style.flexWrap === "wrap" &&
      el.style.justifyContent === "space-around";
  
    if (isMovieContainer) el.remove();
  });

  // Crear una nueva grid
  const newGrid = document.createElement("div");
  newGrid.id = "container";
  newGrid.style.display = "flex";
  newGrid.style.flexWrap = "wrap";
  newGrid.style.justifyContent = "space-around";

  // Filtrar y añadir películas del género seleccionado
  let movieQuantity = 0;
  let movieElements = []; // Para almacenar los elementos de las películas
  
  movies.forEach(movie => {
      if (movie.type === selectedGenre || selectedGenre === "None" || useGenre == false) {
          if (movie.length < slider.value || useSlider == false) {
            if (movie.year < year.value || useYear == false) {
              movieQuantity += 1;
              const movieCard = document.createElement("div");
              movieCard.style.margin = "var(--card-margin)";
              movieCard.style.width = "300px";
              movieCard.style.backgroundColor = "var(--card-color)";
              movieCard.style.color = "var(--text-color)";
              movieCard.style.borderRadius = "8px";
              movieCard.style.overflow = "hidden";

              const movieLink = document.createElement("a");
              movieLink.href = movie.link;
              movieLink.target = "_blank"; // Abre el enlace en una nueva pestaña

              const poster = document.createElement("img");
              poster.src = movie.poster;
              poster.style.width = "100%";
              poster.style.height = "auto";
              movieLink.appendChild(poster);

              const title = document.createElement("h3");
              title.innerText = movie.title;
              title.style.textAlign = "center";

              const details = document.createElement("p");
              details.innerText = `Year: ${movie.year} \n Length: ${movie.length} mins \n IMDb: ${movie.IMDB} ⭐`;
              details.style.textAlign = "center";

              // Envolver el card con el enlace
              movieCard.appendChild(movieLink);
              movieElements.push(movieCard);
              
              movieCard.appendChild(title);
              movieCard.appendChild(details);
            }
          }
      }
  });

  // Si el número de elementos es impar, añadimos un "espacio vacío" al final
  if (movieElements.length % 3 !== 0) {
      const emptyDiv = document.createElement("div");
      emptyDiv.style.gridColumn = "span 3"; // Hace que ocupe toda una fila
      newGrid.appendChild(emptyDiv);
  }

  // Añadimos las películas a la grid
  movieElements.forEach(movieCard => {
      newGrid.appendChild(movieCard);
  });

  // Mostrar la nueva grid en el body
  document.body.appendChild(newGrid);
  console.log(movieQuantity);
  
  const existingMessage = document.getElementById("bigMessage");
  if (existingMessage) existingMessage.remove();

  if (movieQuantity == 0) {
      // Crear nuevo mensaje
      const message = document.createElement("div");
      message.id = "bigMessage";
      message.innerHTML = "Ez ditugu pelikularik karakteristika hauekin. <br> Berriro saiatu.";  // Agregado salto de línea con <br>
      message.style.fontSize = "40px";
      message.style.fontWeight = "bold";
      message.style.textAlign = "center";
      message.style.marginTop = "40px";
      message.style.color = "#222";

      document.body.appendChild(message);
  }

});