import React from 'react';
import classnames from 'classnames';
import Loader from '../Loader/Loader';

import styles from './Button.styl';

class Button extends React.PureComponent {
  static defaultProps = {
    className: '',

    disabled: false,
    loading: false,

    type: 'primary',
    buttonType: 'button',

    onClick: () => { },

    onMouseEnter: () => { },
    onMouseLeave: () => { }
  };

  onClick = (event) => {
    event.stopPropagation();
    event.nativeEvent.stopImmediatePropagation();

    this.props.onClick(event);
  };

  onMouseEnter = (event) => {
    this.props.onMouseEnter(event);
  };

  onMouseLeave = (event) => {
    this.props.onMouseLeave(event);
  };

  renderLoader = () => {
    return <Loader className={styles.loader} size='small' />;
  };

  render() {
    const {
      className, buttonType, type,
      loading, disabled, children
    } = this.props;

    const classNames = classnames(
      styles[type],
      className
    );

    const props = {
      className: classNames,
      disabled: disabled || loading,
      type: buttonType,

      onClick: this.onClick,
      onMouseEnter: this.onMouseEnter,
      onMouseLeave: this.onMouseLeave
    };

    return (
      <button {...props}>{loading ? this.renderLoader() : children}</button>
  );
  }
}

export default Button;
