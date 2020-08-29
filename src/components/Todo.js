import React from "react";

export default (props) => {
  return (
    <div>
      <div>{props.item.todo}</div>
      <button value={props.item.id} onClick={props.handleComplete}>
        {props.item.completed ? "Cancel" : "Complete"}
      </button>
    </div>
  );
};
