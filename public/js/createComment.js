async function createdComment() {
  const idMovie = window.location.href;
  const id_filme = idMovie.split("/").pop();
  //const id_filme = document.getElementById("id").innerHTML;
  const nome_user = document.getElementById("nome_user").value;
  const comment = document.getElementById("comentario_user").value;

  if (nome_user == "" || nome_user == "") {
    return "empty";
  } else {
    const response = await fetch(`http://localhost:3000/createComents`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        idMovie: parseInt(id_filme),
        name: nome_user,
        coment: comment,
      }),
    });

    const content = await response.json();
    window.location.reload();
    return content;
  }
}

document.addEventListener("btn_comment", function () {
  el.addEventListener("submit", createdComment, false);
});
