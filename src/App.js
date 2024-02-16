import React, {useEffect, useState} from 'react';

import CharacterContainer from './components/CharacterContainer';
import DataObj from './fetchData';

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

    
    const fetchDataAndSetCharacters = async () => {
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

    fetchDataAndSetCharacters();
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
      <CharacterContainer characters = {characters} />
    </div>
  );
}

export default App;
