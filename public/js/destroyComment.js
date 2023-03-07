async function destroyComments() {
  try {
    const toastHeader = document.querySelector(".idComment");
    const id = toastHeader.getAttribute("id");

    const response = await fetch(`http://localhost:3000/destroyComment/${id}`, {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });

    const content = await response;
    window.location.reload();
    return content;
  } catch (error) {
    console.error("destroy comment error", error);
    return null;
  }
}

document.addEventListener(".btn_del", function () {
  el.addEventListener("submit", destroyComments, false);
  window.location.reload();
});
