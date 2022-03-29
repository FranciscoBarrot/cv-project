import React, { Component } from 'react';
import InfoInputs from './InfoInputs';

// TODO: remake parameters
export default class EducationForm extends Component {
  render() {
    return (
      <div className="educationForm">
        <InfoInputs
          name="title"
          type="text"
          placeholder="Title of qualification awarded"
          onChange={this.props.onChange}
          data={this.props.data}
        />
        <InfoInputs
          name="organization"
          type="text"
          placeholder="Organization providing education and training"
          onChange={this.props.onChange}
          data={this.props.data}
        />
        <InfoInputs
          name="startDate"
          type="date"
          placeholder="Start Date"
          onChange={this.props.onChange}
          data={this.props.data}
        />
        <InfoInputs
          name="finishDate"
          type="date"
          placeholder="Finish Date"
          onChange={this.props.onChange}
          data={this.props.data}
        />
      </div>
    );
  }
}
