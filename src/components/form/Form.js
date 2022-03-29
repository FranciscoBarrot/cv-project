import React, { Component } from 'react';
import InfoInputs from './InfoInputs';

export default class Form extends Component {
  render() {
    return (
      <div className="generalSection">
        <form onSubmit={this.props.onSubmit}>
          <InfoInputs name="Name" type="type" placeholder="Name" />
          <InfoInputs name="Email" type="email" placeholder="Email" />
          <InfoInputs name="Phone Number" type="tel" placeholder="Phone" />
          <input type="submit" />
        </form>
      </div>
    );
  }
}
