import React from 'react';
import Formsy from './../..';

class TestInput extends React.PureComponent {
  static defaultProps = {
    type: 'text'
  }

  updateValue = (event) => {
    this.props.setValue(event.target[this.props.type === 'checkbox' ? 'checked' : 'value']);
  }

  render() {
    const {
      getErrorMessage,
      getErrorMessages,
      getValue,
      hasValue,
      isFormDisabled,
      isFormSubmitted,
      isPristine,
      isRequired,
      isValid,
      isValidValue,
      resetValue,
      setValidations,
      setValue,
      showError,
      showRequired,
      validationError,
      validationErrors,
      validations,
      ...rest
    } = this.props;

    return (
      <input {...rest} type={this.props.type} value={getValue()} onChange={this.updateValue}/>
    )
  }
}

export default Formsy.Mixin(TestInput);
