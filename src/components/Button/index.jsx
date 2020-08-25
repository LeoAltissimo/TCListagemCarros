import React from 'react';
import '../../assets/styles/Button.css';


class Button extends React.Component {
  render() {
    const { children } = this.props;
    return (
      <button class="defaultButton">
        {children}
      </button>
    );
  }
}

export default Button;