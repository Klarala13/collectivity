import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImage } from "@fortawesome/free-solid-svg-icons";

export default props => (
  <div className="buttons fadein">
    <div className="button">
      <label htmlFor="image" type="image" alt="profile pic">
        <FontAwesomeIcon icon={faImage} color="green" size="2x" />
      </label>
      <input type="file" id="image" name="name" onChange={props.onChange} />
    </div>
  </div>
);
