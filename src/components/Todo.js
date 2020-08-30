import React from "react";

export default (props) => {
  return (
    <div className="todo-container">
      <div onClick={props.handleComplete} className="todo-item">
        {props.item.todo}
      </div>
      <button className="remove-button" onClick={props.handleRemove}>
        X
      </button>
    </div>
  );
};
