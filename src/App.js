import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Characters from "./components/Characters";
import Pagination from "./components/Pagination";

function App() {
  const initialUrl = "https://rickandmortyapi.com/api/character";
  const [personajes, setPersonajes] = useState([]);
  const [info, setInfo] = useState({});

  const getCharacters = (url) => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setPersonajes(data.results);
        setInfo(data.info);
      })
      .catch((error) => console.log(error));
  };

  const onPrevious = () => {
    getCharacters(info.prev);
  };

  const onNext = () => {
    getCharacters(info.next);
  };
  useEffect(() => {
    getCharacters(initialUrl);
  }, []);

  return (
    <>
      <Navbar title={"Rick and Morty App"} />
      <div className="container mt-5">
        <Pagination
          prev={info.prev}
          next={info.next}
          onPrevious={onPrevious}
          onNext={onNext}
        />
        <Characters personajes={personajes} />
        <Pagination
          prev={info.prev}
          next={info.next}
          onPrevious={onPrevious}
          onNext={onNext}
        />
      </div>
    </>
  );
}

export default App;
