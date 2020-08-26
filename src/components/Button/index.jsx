import React from 'react';
import '../../assets/styles/Button.css';

class Button extends React.Component {
  render() {
    const { children, onClick } = this.props;
    return (
      <button className="defaultButton" onClick={onClick}>
        {children}
      </button>
    );
  }
}

export default Button;
