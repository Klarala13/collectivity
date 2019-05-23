import React from "react";
import { render } from "react-dom";

//components
import Router from "./components/Router";

//style shits
import "./css/style.css";
//import "/node_modules/bootstrap/scss/bootstrap";

render(<Router />, document.querySelector("#main"));