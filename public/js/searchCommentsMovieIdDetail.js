async function searchComments() {
  try {
    const idMovie = document.getElementById("id");
    const id = idMovie.innerHTML;
    const response = await fetch(
      `http://localhost:3000/searchCommentsId/?idMovie=${id}`
    );
    const result = [await response.json()];
    result.forEach((dados) => {
      const comments = document.getElementById("coment");

      const div1 = document.createElement("div");
      div1.className = "row border border-primary mb-2";
      div1.id = "div1";

      const div2 = document.createElement("div");
      div2.className = "col-6 text-left";
      div2.id = "nomeComment";

      const section = document.createElement("section");
      section.id = "section";

      const h6_1 = document.createElement("h6");
      h6_1.className = "border-bottom border-primary text-black";
      h6_1.id = "h6_1";
      h6_1.innerHTML = ` ${dados.name}`;

      const h6_2 = document.createElement("h6");
      h6_2.className = "text-black";
      h6_2.innerHTML = ` ${dados.coment}`;

      const h6_3 = document.createElement("h6");
      h6_3.className = "text-black text-end";
      h6_3.innerHTML = ` ${dados.createdAt}`;

      section.appendChild(h6_1);
      div2.appendChild(section);
      div1.appendChild(div2);
      div1.appendChild(h6_2);
      div1.appendChild(h6_3);
      comments.appendChild(div1);
    });
  } catch (error) {
    console.error("HÁ ALGO ERRADO", error);
  }
}

searchComments();
