import * as React from 'react';
import classnames from 'classnames';

import ModalsFactory from '../../framework/factories/ModalsFactory';

import styles from './BaseModal.styl';

class BaseModal extends React.PureComponent {
  static defaultProps = {
    type: '',
    props: {},
    showCloseButton: true,
    onClose: () => { }
  };

  onBackDropClick = (event) => {
    event.stopPropagation();
    event.nativeEvent.stopImmediatePropagation();
  };

  onCloseClick = (event) => {
    event.stopPropagation();
    event.nativeEvent.stopImmediatePropagation();

    const { type, onClose } = this.props;

    onClose(type);
  };

  render() {
    const { type, props, showCloseButton, className, overlayClassName } = this.props;

    return (
      <div className={classnames(styles.backdrop, overlayClassName)} onClick={this.onBackDropClick}>
        <div className={classnames(styles.modal, className)}>
          {ModalsFactory[type](props)}
          {showCloseButton ? <span className={styles.closeButton} onClick={this.onCloseClick} /> : null}
        </div>
      </div>
    );
  }
}

export default BaseModal;
