import './App.css';
import dunePoster from "./assets/duneMoviePoster.jpeg"
import rosPoster from "./assets/epi3.jpg"
import endGamePoster from "./assets/endgame.jpg"

const App = () => {
  return (
    <div className="container">
      <MovieCard title="Dune" src={dunePoster} />
      <MovieCard title="Star Wars Episode III" src={rosPoster} />
      <MovieCard title="Endgame" src={endGamePoster} />
    </div>
  );
}

const MovieCard = (props) => {
  return (
    <div>
      <img src={props.src} alt="" />
      <h3>{props.title}</h3>
    </div>
  )
}

export default App;
