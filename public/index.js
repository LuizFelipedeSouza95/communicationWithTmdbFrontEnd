require("dotenv").config();
const cors = require('cors')
const express = require("express")
const app = express()
const path = require('path');
const searchMovie = require("./js/searchMovieIdDetailPage");
const urlencoded = express.urlencoded({ extended: true })
const PORT = process.env.PORT || "8080";

/* app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  //res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
  //res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  app.use(cors());
  next();
})
 */
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, './pages'));

app.use(express.static('public'));

app.get("/", function (req, res) {
    res.render("./main", { pageCurrent: './layouts/index.ejs' })
})

app.get("/detalhes/:id", urlencoded, async function (req, res) {
  const IMGPATH = "https://image.tmdb.org/t/p/w500"
  const movieId = req.params.id
  const detalhesFilme = await searchMovie.searchMovieId(movieId)
  res.render("./main", { pageCurrent: './pag_detalhes.ejs', detalhesFilme, IMGPATH })
})

app.listen(PORT, async () => {
    console.info(
      `⚡️Server is running at http://localhost:${PORT}`
    );
});

module.exports = { PORT }