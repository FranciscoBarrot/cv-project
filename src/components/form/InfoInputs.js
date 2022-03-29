import React, { Component } from 'react';

export default class App extends Component {
  render() {
    return (
      <input
        onChange={this.props.onChange}
        value={this.props.data[this.props.name]}
        type={this.props.type}
        placeholder={this.props.placeholder}
        name={this.props.name}
      ></input>
    );
  }
}
