import React from 'react';
import '../../assets/styles/InputField.css';

class SelectField extends React.Component {
  renderOptions() {
    const { options, value } = this.props;

    if(!options) return null;

    return options.map((item) => (
      <option
        key={item.id}
        value={item.name}
        selected={item.name === value}
      >
        {item.name}
      </option> 
    ));
  }

  render() {
    const {
      id,
      variant,
      placeholder,
      value,
      onChange,
      CustonStyle,
    } = this.props;

    return (
      <select
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`${variant ? "vairantInput" : "defaultInput"} ${CustonStyle || ''}`}
      >
        {this.renderOptions()}
      </select>
    );
  }
}

export default SelectField;
