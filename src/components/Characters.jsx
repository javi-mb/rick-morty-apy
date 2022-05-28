import React from "react";
import Character from "./Character";

const Characters = (props) => {
  return (
    <div className="row">
      {props.personajes.map((personaje) => (
        <div className="col mb-4">
          <div className="card" style={{ minWidth: "200px" }}>
            <Character
              key={personaje.id}
              id={personaje.id}
              name={personaje.name}
              image={personaje.image}
              status={personaje.status}
              species={personaje.species}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Characters;
