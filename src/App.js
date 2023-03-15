import "./App.css";
import { useState } from "react";
import MovieList from "./Components/MovieList";
import Search from "./Components/Search";

function App() {
  const [KeyWord, setKeyWord] = useState("");
  const [newRate, setNewRate] = useState(0);
  const [movies, setMovies] = useState([
    {
      title:"Everything Everywhere All at Once", 
    description:"Dans l'ascenseur menant au contrôle fiscal de leur laverie, Waymond, qui adopte un comportement bizarre.",
    posterURL:"https://fr.web.img6.acsta.net/pictures/22/06/14/16/36/2606624.jpg", 
    rating:1
    },
    {
      title:"Babylon", 
    description:"Une histoire d'ambition démesurée et d'excès scandaleux, il retrace l'ascension et la chute de plusieurs personnages.",
    posterURL:"https://fr.web.img6.acsta.net/pictures/22/12/02/16/03/2536613.jpg", 
    rating:2
    },
    {
      title:"Fall", 
    description:"Les meilleures amies Becky et Hunter se retrouvent coincées, au sommet d'une tour radio de plus de 600 mètres.",
    posterURL:"https://m.media-amazon.com/images/M/MV5BNGI3MWYwYjItNzZhYi00ZWIzLTkyMzYtN2JmNjg3ODg1NTg4XkEyXkFqcGdeQXVyMTMwMDA5ODU3._V1_.jpg", 
    rating:5
    },
    {
      title:"The Whale", 
    description:"Un professeur d'anglais reclus, souffrant d'obésité sévère, tente de renouer avec sa fille adolescente, dont il s'est séparé.",
    posterURL:"https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6534/6534218_sd.jpg", 
    rating:4
    },
    {
      title:"Fast & Furious 9",
      description:"Dom et son équipe doivent affronter un terroriste international qui s'avère être le frère séparé de Dom et Mia.",
      posterURL:"https://images.moviesanywhere.com/923f053c72cf6b0042f808553e0de915/0f733d64-f83e-4b5a-91ff-da0e413f61c2.jpg",
      rating:5,
    }
  ]);
  const search = (text) => {
    setKeyWord(text);
  };

  const setRate = (rate) => {
    setNewRate(rate);
  };

  const addMovie = (movie) => {
    setMovies(movies.concat(movie));
  };

  return (
    <div className="App">
      <div>
        <Search search={search} setRate={setRate} newRate={newRate} />
      </div>
      <div className="movies">
        <MovieList
          addMovie={addMovie}
          movies={movies.filter(
            (el) =>
              el.rating >= newRate &&
              el.title.toLowerCase().includes(KeyWord.toLowerCase().trim())
          )}
          
        />
      </div>
    </div>
  );
}

export default App;