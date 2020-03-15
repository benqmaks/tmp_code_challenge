import * as React from 'react';
import classnames from 'classnames';
import styles from './TextField.styl';

const TextField = (props) => {
  const onChange = (event) => {
    const value = event.currentTarget.value;
    const name = event.currentTarget.name;

    props.onChange(value, name, event);
  };

  const containerClassName = classnames(props.className, styles.textField, {
    [styles.disabled]: props.disabled
  });
  const inputClassName = classnames(styles.input, {
    [styles.error]: props.error
  });

  return (
    <div className={containerClassName}>
      <input
        className={inputClassName}
        type={props.type}
        value={props.value}
        name={props.name}
        disabled={props.disabled}
        placeholder={props.placeholder}
        onChange={onChange}
      />
    </div>
  );
};

TextField.defaultProps = {
  className: '',
  value: '',
  type: 'text',
  error: false,
  disabled: false,
  onChange: () => { }
};

export default TextField;
