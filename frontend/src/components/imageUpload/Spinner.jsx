import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

export default () => (
  <div className="spinner fadein">
    <FontAwesomeIcon icon={faSpinner} size="2x" color="black" />
  </div>
);
