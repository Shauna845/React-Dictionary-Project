import React from "react";

export default function Example(props) {
  if (props.example) {
    return (
      <em className="example">
        <strong>Example: </strong>
        {props.example}
      </em>
    );
  } else {
    return null;
  }
}
