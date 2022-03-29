import React, { Component } from 'react';
import Form from './form/Form';
import { v4 as uuidv4 } from 'uuid';

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      phone: '',
      titles: [],
      experiences: [],
    };
  }

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
  };

  render() {
    return (
      <div>
        <Form
          data={this.state}
          onChange={this.onChange}
          onSubmit={this.onSubmit}
        />
        {/* <Preview /> */}
      </div>
    );
  }
}
