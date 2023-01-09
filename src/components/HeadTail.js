import React, { useState } from "react";
import DisplayData from "./DisplayData";

const HeadTail = () => {
  const [selectedValue, setSelectedValue] = useState("");
  const [values, setValues] = useState([]);
  const [isError, setIsError] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (selectedValue === "") {
      setIsError(true);
    } else {
      setValues([...values, selectedValue]);
      setIsError(false);
      setSelectedValue("");
    }
  };

  return (
    <div className="main">
      <div className="head-tail-div">
        <form onSubmit={handleSubmit}>
          <label htmlFor="ht" className="p-2">
            Choose Head/Tail:
          </label>

          <select
            name="headTail"
            id="headTail"
            className="form-control"
            value={selectedValue}
            onChange={(e) => setSelectedValue(e.target.value)}
          >
            <option value="">select value</option>
            <option value="h">H</option>
            <option value="t">T</option>
          </select>
          {isError ? (
            <p className="text-danger">Please select value from dropdown</p>
          ) : (
            ""
          )}
          <button className="btn btn-primary mt-5" type="submit">
            Submit
          </button>
        </form>
      </div>
      <DisplayData values={values} />
    </div>
  );
};

export default HeadTail;
