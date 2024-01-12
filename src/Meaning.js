import React from "react";

export default function (props) {
  console.log(props.meaning);
  return (
    <div className="Meaning">
      <h3>{props.meaning.partOfSpeech}</h3>
      <p>{props.meaning.definition}</p>
      <em className="example">{props.meaning.example}</em>
    </div>
  );
}
