async function searchComments() {
  try {
    
    const idMovie = window.location.href;
    const id = idMovie.split("/").pop();

    const response = await fetch(
      `http://localhost:3000/searchCommentsId/?idMovie=${id}`
    );
    const result = await response.json();
    console.log(result);
    if (result[0].length === 0) {
      const comments = document.getElementById("coment");
      const div1 = document.createElement("div");
      div1.innerHTML = "Este filme ainda nao contem comentarios";
      comments.appendChild(div1);
    } else {
      result[0].forEach((dados) => {

        const createdAt = dados.createdAt

        function calculateElapsedTime(createdAt) {
          const now = new Date();
          const elapsedTime = (now.getTime() - new Date(createdAt).getTime()) / 1000; // elapsed time in seconds
        
          if (elapsedTime < 60) {
            return Math.round(elapsedTime) + " seconds ago";
          } else if (elapsedTime < 3600) {
            return Math.round(elapsedTime / 60) + " minutes ago";
          } else if (elapsedTime < 86400) {
            return Math.round(elapsedTime / 3600) + " hours ago";
          } else if (elapsedTime < 2592000) {
            return Math.round(elapsedTime / 86400) + " days ago";
          } else {
            return Math.round(elapsedTime / 2592000) + " months ago";
          }
        }

        const comments = document.getElementById("coment");

        const div1 = document.createElement("div");
        div1.classList.add("card", "p-1", "mb-2");
        div1.setAttribute("role", "alert");
        div1.setAttribute("aria-live", "assertive");
        div1.setAttribute("aria-atomic", "true");

        const divToastHeader = document.createElement("div");
        divToastHeader.classList.add("toast-header");

        const idComment = document.createElement("div");
        idComment.className = "idComment";
        idComment.id = `${dados.id}`;

        const img = document.createElement("img");
        img.id = "img_user";
        img.src = "../../assets/img/usuario.jpeg";
        img.classList.add("rounded", "me-2");

        const strongElement = document.createElement("strong");
        strongElement.classList.add("me-auto");
        strongElement.textContent = `${dados.name}`;

        const smallElement = document.createElement("small");
        smallElement.classList.add("mb-1", "p-2");
        smallElement.textContent = calculateElapsedTime(createdAt);

        const a1 = document.createElement("a");
        a1.classList.add("btn", "btn-sm", "btn-primary");
        a1.href = "";
        a1.title = "Editar";

        const svg1 = document.createElementNS(
          "http://www.w3.org/2000/svg",
          "svg"
        );
        svg1.setAttribute("xmlns", "http://www.w3.org/2000/svg");
        svg1.setAttribute("width", "16");
        svg1.setAttribute("height", "16");
        svg1.setAttribute("fill", "currentColor");
        svg1.classList.add("bi", "bi-pencil");
        svg1.setAttribute("viewBox", "0 0 16 16");

        const path1 = document.createElementNS(
          "http://www.w3.org/2000/svg",
          "path"
        );
        path1.setAttribute(
          "d",
          "M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"
        );

        const a2 = document.createElement("button");
        a2.classList.add("btn", "btn-sm", "btn-danger");
        a2.title = "Deletar";
        a2.id = "btn_del";
        a2.setAttribute("data-bs-toggle", "modal");
        a2.setAttribute("data-bs-target", "#comfirm");
/*         a2.onclick = function () {
          destroyComments();
        }; */

        const svg2 = document.createElementNS(
          "http://www.w3.org/2000/svg",
          "svg"
        );
        svg2.setAttribute("width", "16");
        svg2.setAttribute("height", "16");
        svg2.setAttribute("fill", "currentColor");
        svg2.classList.add("bi", "bi-trash-fill");
        svg2.setAttribute("viewBox", "0 0 16 16");

        const path2 = document.createElementNS(
          "http://www.w3.org/2000/svg",
          "path"
        );
        path2.setAttribute(
          "d",
          "M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"
        );

        const divComment = document.createElement("div");
        divComment.classList.add("toast-body", "m-1");
        divComment.textContent = `${dados.coment}`;

        divToastHeader.appendChild(img);
        divToastHeader.appendChild(strongElement);
        divToastHeader.appendChild(smallElement);

        svg1.appendChild(path1);
        a1.appendChild(svg1);
        divToastHeader.appendChild(a1);

        svg2.appendChild(path2);
        a2.appendChild(svg2);
        divToastHeader.appendChild(a2);

        divToastHeader.appendChild(idComment);

        div1.appendChild(divToastHeader);
        div1.appendChild(divComment);
        comments.appendChild(div1);
      });
    }
  } catch (error) {
    console.error("comment page error", error);
    return "comment page error", error;
  }
}

searchComments();
