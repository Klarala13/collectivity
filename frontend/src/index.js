import React from "react";
import { render } from "react-dom";

//components
import Router from "./components/Router";

//style shits
import "./css/style.css";
//components
import "./css/components/about.css";
import "./css/components/nav.css";
import "./css/components/freebies.css";
import "./css/components/timeBanks.css";

render(<Router />, document.querySelector("#main"));
