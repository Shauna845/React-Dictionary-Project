import React from "react";

export default function Phonetic(props) {
  console.log(props.phonetic);
  return (
    <div className="phonetic">
      <strong>Phonetic: </strong>
      {props.phonetic}
    </div>
  );
}
