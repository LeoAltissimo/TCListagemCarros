import React from 'react';
import '../../assets/styles/InputField.css';

class InputField extends React.Component {
  render() {
    const {
      id,
      variant,
      type,
      pattern,
      step,
      placeholder,
      value,
      onChange,
      CustonStyle,
    } = this.props;

    return (
      <input
        id={id}
        pattern={pattern}
        step={step}
        type={type || "text"}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`${variant ? "vairantInput" : "defaultInput"} ${CustonStyle || ''}`}
      />
    );
  }
}

export default InputField;
