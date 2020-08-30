import React, { Component } from 'react'

export default (props) => {
  return (
    <div className="todo-container">
      <div className="todo-item">{props.item.todo}</div>
      <button className="todo-button" value={props.item.id} onClick={props.handleComplete}>
        {props.item.completed ? "Cancel" : "Complete"}
      </button>
    </div>
  );
};
