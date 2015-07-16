import React from 'react';

export default class SectionNavbar extends React.Component {

  static get propTypes () {
    return {
      label: React.PropTypes.string
    };
  }

  static get defaultProps () {
    return {
      label: ''
    };
  }

  render() {
    return (
      <div className="navbar">
        <div className="navbar-header">
          <span className="navbar-brand">
            {this.props.label}
          </span>
        </div>
        {this.props.children}
      </div>
    );
  }

}
