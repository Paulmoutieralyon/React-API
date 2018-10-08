import React from "react";

const DisplayCitation = ({ citation }) => {
  return (
    <div className="DisplayCitation">
      <ul>
        <img src={citation.image} alt="photo" />
        <li>Quote : {citation.quote}</li>
        <li>
          Name : {citation.character}
        </li>
      </ul>
    </div>
  );
};

export default DisplayCitation;