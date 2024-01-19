import React from "react";
import Example from "./Example";
import Synonyms from "./Synonyms";
import "./Meaning.css";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h4 className="speech">{props.meaning.partOfSpeech}</h4>
      <div className="definition">
        <strong>Definition:</strong> {props.meaning.definition}
      </div>
      <div className="example">
        <Example example={props.meaning.example} />
      </div>
      <div className="synonym">
        <Synonyms synonyms={props.meaning.synonyms} />
      </div>
    </div>
  );
}
