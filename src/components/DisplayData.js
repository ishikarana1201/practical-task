import React from "react";

const DisplayData = ({ values }) => {
  return (
    <div>
      {values.map((cur, i, array) => {
        if (array[i] === array[i - 1]) {
          return (
            <>
              <span key={i}>{cur}</span>
            </>
          );
        } else {
          return (
            <>
              <br />
              <span key={i}>New Element :{cur}</span>
            </>
          );
        }
      })}
    </div>
  );
};

export default DisplayData;
