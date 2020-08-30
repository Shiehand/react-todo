import React, { Component } from "react";
import Todo from "./Todo";
import Form from "./Form";
import "../List.css";

export default class List extends Component {
  state = {
    items: [],
  };

  addItem = (todo) => {
    this.setState({
      items: [todo, ...this.state.items],
    });
  };

  handleComplete = (event) => {
    console.log(JSON.stringify(this.state.items));
    this.setState({
      items: this.state.items.map((item) => {
        if (item.id === event.target.value) {
          return {
            ...item,
            completed: !item.completed,
          };
        } else {
          return item;
        }
      }),
    });
  };

  render() {
    return (
      <div className="container">
        <div className="form">
          <Form onSubmit={this.addItem} />
        </div>

        <div className="list-container">
          <div className="todo-list">
            Todo:
            {this.state.items.map((item) => {
              if (!item.completed) {
                return (
                  <Todo
                    key={item.id}
                    handleComplete={(event) => this.handleComplete(event)}
                    item={item}
                  />
                );
              } else {
                return null;
              }
            })}
          </div>

          <div className="completed">
            Completed:
            {this.state.items.map((item) => {
              if (item.completed) {
                return (
                  <Todo
                    key={item.id}
                    handleComplete={(event) => this.handleComplete(event)}
                    item={item}
                  />
                );
              } else {
                return null;
              }
            })}
          </div>
        </div>
      </div>
    );
  }
}
