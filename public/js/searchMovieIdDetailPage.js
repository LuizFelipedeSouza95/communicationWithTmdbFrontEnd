async function searchMovieId(movieId) {
  try {
    const response = await fetch(
      `http://localhost:3000/searchMovieId/?id=${movieId}`
    );
    return response.json();
  } catch (error) {
    console.error("movie page detail error", error);
    return "movie page detail error", error;
  }
}

module.exports = { searchMovieId };
