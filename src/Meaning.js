import React from "react";
import Example from "./Example";
import Synonyms from "./Synonyms";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h3>{props.meaning.partOfSpeech}</h3>
      <p>
        <strong>Definition:</strong> {props.meaning.definition}
      </p>
      <Example example={props.meaning.example} />
      <br />
      <Synonyms synonyms={props.meaning.synonyms} />
    </div>
  );
}
