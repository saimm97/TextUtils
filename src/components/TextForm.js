import React, { useState } from "react";

export default function TextForm(props) {
  let toCamelCase = (str) => {
    return str
      .replace(/(?:^\w|[A-Z]|\b\w)/g, function (word, index) {
        return index === 0 ? word.toLowerCase() : word.toUpperCase();
      })
      .replace(/\s+/g, "");
  };

  const [text, setText] = useState("");
  const [textColor, setTextColor] = useState("black");
  const [buttonText, setButtonText] = useState("Green");

  let handleUpClickfunction = () => {
    setText(text.toUpperCase());
    props.showAlert("Text changed to UpperCase", "Success!");
  };

  let handleOnChangeClickfunction = (event) => {
    setText(event.target.value);
  };

  let handleLowClickfunction = () => {
    setText(text.toLowerCase());
    props.showAlert("Text changed to LowerCase", "Success!");
  };

  let handleClearClickfunction = () => {
    setText("");
    props.showAlert("Text Cleared", "Success!");
  };

  let handleCamelClickfunction = () => {
    setText(toCamelCase(text));
    props.showAlert("Text changed to CamelCase", "Success!");
  };

  let handleColorChangeClickfunction = () => {
    let newColor = "";
    if (textColor === "green") {
      newColor = "black";
      setButtonText("Green");
    } else {
      newColor = "green";
      setButtonText("Black");
    }
    props.showAlert("Text color changed to " + newColor, "Success!");
    setTextColor(newColor);
  };

  return (
    <>
      <div className="container my-4" style={{}}>
        <h2 style={{ color: props.mode === "light" ? "black" : "white" }}>
          {" "}
          {props.heading}{" "}
        </h2>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChangeClickfunction}
            id="myBox"
            rows="8"
            style={{ color: `${textColor}` }}
          ></textarea>
        </div>
        <button
          className="btn btn-primary mx-3"
          onClick={handleClearClickfunction}
        >
          Clear
        </button>
        <button className="btn btn-primary" onClick={handleUpClickfunction}>
          Convert to UpperCase
        </button>
        <button
          className="btn btn-primary mx-3"
          onClick={handleLowClickfunction}
        >
          Convert to LowerCase
        </button>
        <button
          className="btn btn-primary mx-3"
          onClick={handleCamelClickfunction}
        >
          Convert to CamelCase
        </button>
        <button
          className="btn btn-primary mx-3"
          onClick={handleColorChangeClickfunction}
        >
          Change Text Color to {buttonText}
        </button>
      </div>
      <div className="container my-4">
        <h2 style={{ color: props.mode === "light" ? "black" : "white" }}>
          Your Text Summary
        </h2>
        <p style={{ color: props.mode === "light" ? "black" : "white" }}>
          {text.split(" ").length - 1} Words {text.length} Characters
        </p>
        <p style={{ color: props.mode === "light" ? "black" : "white" }}>
          {0.008 * text.split(" ").length} minutes to read all words typed up
        </p>
        <h2 style={{ color: props.mode === "light" ? "black" : "white" }}>
          Preview Your Text here
        </h2>
        <p style={{ color: props.mode === "light" ? "black" : "white" }}>
          {text}
        </p>
      </div>
    </>
  );
}
