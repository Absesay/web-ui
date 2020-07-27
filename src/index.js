import React from "react"
import ReactDom from "react-dom"
import * as data from "./data"


data.footerCards.map(function(n){
  console.log(n.title);
});

ReactDom.render(<h1>Hello World</h1>, document.getElementById("root"))