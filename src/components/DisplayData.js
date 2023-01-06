import React from "react";

const DisplayData = ({ values, selectedValue }) => {
  return (
    <div>
      {values.map((character, index) => (
        <div key={index}>
          {character}
          <br></br>
        </div>
      ))}
    </div>
  );
};

export default DisplayData;
