import React, {useEffect, useState} from 'react';

import CharacterContainer from './components/people/CharacterContainer';
import DataObj from './fetchData';
import { Link, Route, Switch } from 'react-router-dom';
import PlanetContainer from './components/planets/PlanetContainer';
import FilmContainer from './components/films/FilmContainer';
import NoMatch from './components/NoMatch';
import SpeciesContainer from './components/species/SpeciesContainer';
import VehicleContainer from './components/vehicles/VehicleContainer';
import StarshipContainer from './components/starships/StarshipContainer';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  const [characters, setCharacters] = useState({});
  
  let [pageNo, setPageNo] = useState(1); //?

  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  useEffect(() => {

    
    const getPeople = async () => {
      try {
        console.log(pageNo);
        const data = await DataObj.GetPeople(pageNo);
        console.log(data);
/*  
        "count": 82,
        "next": "https://swapi.dev/api/people/?page=2",
        "previous": null,
        "results": []
*/
        setCharacters(data);
       // console.log(data);
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    };

    getPeople();
  }, [pageNo]);

 const next= ()=>{
    let tmp_pageNo=pageNo +1;
    setPageNo(tmp_pageNo);
    console.log(pageNo);
  }
 const prev= ()=>{
  let tmp_pageNo=pageNo -1;
    setPageNo(tmp_pageNo);
    console.log(pageNo);
  }

  return (
    <div className="App">
      <Link className="nav-links" to="/">Characters</Link>
      <Link className="nav-links" to="/planets">Planets</Link>
      <Link className="nav-links" to="/films">Films</Link>
      <Link className="nav-links" to="/species">Species</Link>
      <Link className="nav-links" to="/vehicles">Vehicles</Link>
      <Link className="nav-links" to="/starships">Starships</Link>
      <Switch>
        <Route exact path="/">
          <CharacterContainer characters = {characters} />
        </Route>
        <Route exact path="/planets">
          <PlanetContainer callplanet={"callplanet"} />
        </Route>
        <Route exact path="/films">
          <FilmContainer callfilm={"callfilm"} />
        </Route>
        <Route exact path="/species">
          <SpeciesContainer callspecies={"callspecies"} />
        </Route>
        <Route exact path="/vehicles">
          <VehicleContainer callvehicle={"callvehicle"} />
        </Route>
        <Route exact path="/starships">
          <StarshipContainer callstarship={"callstarship"} />
        </Route>
        <Route>
          <NoMatch />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
