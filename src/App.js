import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import {faHome} from '@fortawesome/free-solid-svg-icons';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header" id='nav'>
        <a href="#" className="logo"><img src="./img/580b57fcd9996e24bc43c529.png" alt="nothing" /></a>
        <ul className="navigation">
          <li><a href="#">Accueil</a></li>
          <li><a href="#">Séries</a></li>
          <li><a href="#">Films</a></li>
          <li><a href="#">Nouveautés les plus regardées</a></li>
          <li><a href="#">Ma liste</a></li>
        </ul>
        <div className="searchBar">
          <input type="text" placeholder="Recherche" />
          <i class="fa-solid fa-magnifying-glass" />
        </div>
      </header>
      <body>
        {/* NavBar */}
        <div className="banner">
          <img src="./img/stranger-things-fond.jpg" alt="bgAnnexe" className='bgAnnexe' />
          <div className="content">
            <img src="./img/StrangerThingslogo.png" alt="titre" className='titre' />
            <h4>
              <span>2020</span>
              <span>12+</span>
              <span>Action</span>
            </h4>
            <p>Quand un jeune garçon disparaît, une petite ville découvre une affaire mystérieuse, des expériences secrètes, des forces surnaturelles terrifiantes... et une fillette.</p>
            <div className='buttons'>
              <div className="playButton">
                <a href="#"><i class="fa-solid fa-play" />Lecture</a>
              </div>
              <div className='btnInfo'>
                <a href="#"><i class="fa-solid fa-circle-info" />Plus d'infos</a>
              </div>
            </div>
          </div>
        </div>
        {/* Revoir */}
        <div className="row">
          <h2>Revoir</h2>
          <div className="rowClasses">
            <img src="./img/series/555171_1300_649.png" alt="" className='rowClass' />
            <img src="./img/series/lovedeathrobots.png" alt="" className='rowClass' />
            <img src="./img/series/png-transparent-brooklyn-nine-nine-season-4-detective-jake-peralta-brooklyn-nine-nine-season-3-television-show-brooklyn-nine-nine-television-f.png" alt="" className='rowClass' />
            <img src="./img/series/Metal-Lord-by-Creative-Fabrica-Freebies.png" alt="" className='rowClass' />
            <img src="./img/series/rick-morty.png" alt="" className='rowClass' />
            <img src="./img/series/gotham.png" alt="" className='rowClass' />
            <img src="./img/series/the-umbrella-academy_1550261039.png" alt="" className='rowClass' />
            <img src="./img/series/Capture d’écran 2020-04-07 à 12.12.33.png" alt="" className='rowClass' />
            <img src="./img/series/The-Witcher-Season-2-April-2020-Development-amp-Latest-News.png" alt="" className='rowClass' />
            <img src="./img/series/Naruto_png10-removebg-preview-1.png" alt="" className='rowClass' />
            <img src="./img/series/The-Big-Bang-Theory-PNG-HD.png" alt="" className='rowClass' />
          </div>
        </div>
        {/* Nouveautés */}
        <div className="row">
          <h2>Nouveautés</h2>
          <div className="rowClasses">
            <img src="./img/series/Capture d’écran 2020-04-07 à 12.12.33.png" alt="" className='rowClass' />
            <img src="./img/series/gotham.png" alt="" className='rowClass' />
            <img src="./img/series/lovedeathrobots.png" alt="" className='rowClass' />
            <img src="./img/series/Metal-Lord-by-Creative-Fabrica-Freebies.png" alt="" className='rowClass' />
            <img src="./img/series/Naruto_png10-removebg-preview-1.png" alt="" className='rowClass' />
            <img src="./img/series/png-transparent-brooklyn-nine-nine-season-4-detective-jake-peralta-brooklyn-nine-nine-season-3-television-show-brooklyn-nine-nine-television-f.png" alt="" className='rowClass' />
            <img src="./img/series/rick-morty.png" alt="" className='rowClass' />
            <img src="./img/series/The-Big-Bang-Theory-PNG-HD.png" alt="" className='rowClass' />
            <img src="./img/series/the-umbrella-academy_1550261039.png" alt="" className='rowClass' />
            <img src="./img/series/The-Witcher-Season-2-April-2020-Development-amp-Latest-News.png" alt="" className='rowClass' />
          </div>
        </div>
        {/* séries  */}
        <div className="row">
          <h2>Séries</h2>
          <div className="rowClasses">
            <img src="./img/series/Capture d’écran 2020-04-07 à 12.12.33.png" alt="" className='rowClass' />
            <img src="./img/series/gotham.png" alt="" className='rowClass' />
            <img src="./img/series/lovedeathrobots.png" alt="" className='rowClass' />
            <img src="./img/series/Metal-Lord-by-Creative-Fabrica-Freebies.png" alt="" className='rowClass' />
            <img src="./img/series/Naruto_png10-removebg-preview-1.png" alt="" className='rowClass' />
            <img src="./img/series/png-transparent-brooklyn-nine-nine-season-4-detective-jake-peralta-brooklyn-nine-nine-season-3-television-show-brooklyn-nine-nine-television-f.png" alt="" className='rowClass' />
            <img src="./img/series/rick-morty.png" alt="" className='rowClass' />
            <img src="./img/series/The-Big-Bang-Theory-PNG-HD.png" alt="" className='rowClass' />
            <img src="./img/series/the-umbrella-academy_1550261039.png" alt="" className='rowClass' />
            <img src="./img/series/The-Witcher-Season-2-April-2020-Development-amp-Latest-News.png" alt="" className='rowClass' />
          </div>
        </div>
        {/* Films */}
        <div className="row">
          <h2>Films</h2>
          <div className="rowClasses">
            <img src="./img/series/Capture d’écran 2020-04-07 à 12.12.33.png" alt="" className='rowClass' />
            <img src="./img/series/gotham.png" alt="" className='rowClass' />
            <img src="./img/series/lovedeathrobots.png" alt="" className='rowClass' />
            <img src="./img/series/Metal-Lord-by-Creative-Fabrica-Freebies.png" alt="" className='rowClass' />
            <img src="./img/series/Naruto_png10-removebg-preview-1.png" alt="" className='rowClass' />
            <img src="./img/series/png-transparent-brooklyn-nine-nine-season-4-detective-jake-peralta-brooklyn-nine-nine-season-3-television-show-brooklyn-nine-nine-television-f.png" alt="" className='rowClass' />
            <img src="./img/series/rick-morty.png" alt="" className='rowClass' />
            <img src="./img/series/The-Big-Bang-Theory-PNG-HD.png" alt="" className='rowClass' />
            <img src="./img/series/the-umbrella-academy_1550261039.png" alt="" className='rowClass' />
            <img src="./img/series/The-Witcher-Season-2-April-2020-Development-amp-Latest-News.png" alt="" className='rowClass' />
          </div>
        </div>
      </body>

    </div>
  );
}

export default App;
