async function searchMovieId(movieId) {
  try {
    const response = await fetch(
      `http://localhost:3000/searchMovieId/?id=${movieId}`
    );
    return response.json();
  } catch (error) {
    console.error("HÁ ALGO ERRADO");
  }
}

module.exports = { searchMovieId };