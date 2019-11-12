import React, { Component } from "react";

class TextField extends Component {
  render() {
    const renderError = this.props.error ? (
      <strong>{this.props.error}</strong>
    ) : null;
    return (
      <div>
        <label>{this.props.label}</label>
        <br />
        <input
          type="text"
          name={this.props.name}
          placeholder={this.props.placeholder}
          value={this.props.value}
          onChange={this.props.onChange}
        />
        {renderError}
      </div>
    );
  }
}

export default TextField;
