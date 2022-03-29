import React, { Component } from 'react';
import GeneralDataForm from './GeneralDataForm';
import EducationForm from './EducationForm';

export default class Form extends Component {
  render() {
    return (
      <div className="form">
        <form onSubmit={this.props.onSubmit}>
          <GeneralDataForm
            data={this.props.data}
            onChange={this.props.onChange}
          />
          <EducationForm
            data={this.props.data}
            onChange={this.props.onChange}
          />
          <input type="submit" className="btn btn-success" value="Preview" />
        </form>
      </div>
    );
  }
}
