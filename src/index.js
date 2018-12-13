import React from "react";
import ReactDOM from "react-dom";
import testImage from "../assets/test-image.jpg";

const App = () => {
  console.log("call");
  return (
    <div>
      <p>render Image by using file-loader</p>
      <img src={testImage} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("container"));
