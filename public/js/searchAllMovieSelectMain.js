async function getContent() {
  try {
    const IMGPATH = "https://image.tmdb.org/t/p/w500/";
    const listafilmes = document.getElementById("result-filmes");
    listafilmes.innerHTML = "";
    const busca = document.getElementById("pesquisa");
    const search = busca.value;
    const response = await fetch(
      `http://localhost:3000/searchMovies/?search=${search}`
    );
    const result = await response.json();

    result.forEach((filmes) => {
      const nodeId = filmes.id;

      const divCard = document.createElement("div");
      divCard.className = "col-12 col-md-3 mb-3";
      divCard.id = "divCard";

      const section = document.createElement("section");
      section.height = "350";
      section.width = "120";

      const sectionBottom = document.createElement("section");
      sectionBottom.id = "sectionBottom";

      const img = document.createElement("img");
      img.src = IMGPATH + filmes.poster_path;
      img.className = "card-img-top";
      img.height = "300";
      img.width = "100";
      img.id = "capa_filme";

      const title = document.createElement("h6");
      title.className = "card-title";
      title.innerHTML = `${filmes.original_title}`;

      const botaoDetalhes = document.createElement("a");
      botaoDetalhes.className =
        "btn container btn-primary fixed-bottom position-relative";
      botaoDetalhes.innerHTML = `Detalhes`;
      botaoDetalhes.href = "/detalhes/" + nodeId;
      botaoDetalhes.id = "btn_detalhes";

      const notas = document.createElement("h3");
      notas.className = "title p-1";
      notas.innerHTML = `Nota: ${filmes.vote_average}`;

      section.appendChild(img);
      section.appendChild(title);
      sectionBottom.appendChild(notas);
      sectionBottom.appendChild(botaoDetalhes);
      divCard.appendChild(sectionBottom);
      divCard.appendChild(section);
      listafilmes.appendChild(divCard);

      busca.value = "";
    });
  } catch (error) {
    console.error("HÁ ALGO ERRADO");
  }
}

document.addEventListener("pesq", function () {
  el.addEventListener("submit", getContent, false);
});
