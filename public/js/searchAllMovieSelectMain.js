async function getContent() {
  try {
    const IMGPATH = "https://image.tmdb.org/t/p/w500/";
    const listMovies = document.getElementById("result-movies");
    listMovies.innerHTML = "";
    const search = document.getElementById("pesquisa");
    const searchMovie = search.value;
    const response = await fetch(
      `http://localhost:3000/searchMovies/?search=${searchMovie}`
    );
    const result = await response.json();

    result.forEach((movies) => {
      const nodeId = movies.id;

      const divCard = document.createElement("div");
      divCard.className = "col-12 col-md-3 mb-3";
      divCard.id = "divCard";

      const section = document.createElement("section");
      section.height = "350";
      section.width = "120";

      const sectionBottom = document.createElement("section");
      sectionBottom.id = "sectionBottom";

      const img = document.createElement("img");
      img.src = IMGPATH + movies.poster_path;
      img.className = "card-img-top";
      img.height = "300";
      img.width = "100";
      img.id = "capa_filme";

      const title = document.createElement("h6");
      title.className = "card-title";
      title.innerHTML = `${movies.original_title}`;

      const bottomDeatils = document.createElement("a");
      bottomDeatils.className =
        "btn container btn-primary fixed-bottom position-relative";
      bottomDeatils.innerHTML = `Detalhes`;
      bottomDeatils.href = "/detail/" + nodeId;
      bottomDeatils.id = "btn_details";

      const classification = document.createElement("h3");
      classification.className = "title p-1";
      classification.innerHTML = `Classification: ${movies.vote_average}`;

      section.appendChild(img);
      section.appendChild(title);
      sectionBottom.appendChild(classification);
      sectionBottom.appendChild(bottomDeatils);
      divCard.appendChild(sectionBottom);
      divCard.appendChild(section);
      listMovies.appendChild(divCard);

      search.value = "";
    });
  } catch (error) {
    console.error("initial page error", error);
    return "initial page error", error;
  }
}

document.addEventListener("pesq", function () {
  el.addEventListener("submit", getContent, false);
});
