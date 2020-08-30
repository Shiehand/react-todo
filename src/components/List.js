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

  handleComplete = (id) => {
    this.setState({
      items: this.state.items.map((item) => {
        if (item.id === id) {
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

  handleRemove = (id) => {
    this.setState({
      items: this.state.items.filter((item) => {
        return id !== item.id;
      }),
    });
  };

  removeAllCompleted = () => {
    this.setState({
      items: this.state.items.filter((item) => !item.completed),
    });
  };

  completeAll = () => {
    this.setState((state) => ({
      items: state.items.map((item) => {
        if (!item.completed) {
          return {
            ...item,
            completed: !item.completed,
          };
        } else {
          return item;
        }
      }),
    }));
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
                    handleComplete={() => this.handleComplete(item.id)}
                    handleRemove={() => this.handleRemove(item.id)}
                    item={item}
                  />
                );
              } else {
                return null;
              }
            })}
            {this.state.items.some((item) => !item.completed) ? (
              <button onClick={this.completeAll}>Complete All</button>
            ) : null}
          </div>

          <div className="completed">
            Completed:
            {this.state.items.map((item) => {
              if (item.completed) {
                return (
                  <Todo
                    key={item.id}
                    handleComplete={() => this.handleComplete(item.id)}
                    handleRemove={() => this.handleRemove(item.id)}
                    item={item}
                  />
                );
              } else {
                return null;
              }
            })}
            {this.state.items.some((item) => item.completed) ? (
              <button onClick={this.removeAllCompleted}>Remove All</button>
            ) : null}
          </div>
        </div>
      </div>
    );
  }
}
