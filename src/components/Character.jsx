import React from "react";

const Character = (props) => {
  return (
    <>
      <img src={props.image} alt={props.name} />
      <div className="card-body">
        <h3 className="card-title text-center">{props.name}</h3>
        <hr />
        <p>{`Status: ${props.status}`}</p>
        <p>{`Especie: ${props.species}`}</p>
      </div>
    </>
  );
};

export default Character;
