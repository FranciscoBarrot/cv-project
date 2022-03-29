import React, { Component } from 'react';

export default class App extends Component {
  render() {
    return (
      <label>
        {this.props.text}
        <input
          type={this.props.type}
          name={this.props.name}
          placeholder={this.props.placeholder}
        ></input>
      </label>
    );
  }
}
