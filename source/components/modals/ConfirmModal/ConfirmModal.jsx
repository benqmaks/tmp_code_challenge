import React from 'react';
import PropTypes from 'prop-types';
import Button from '../../ui/Button/Button';
import styles from './ConfirmModal.styl';

const ConfirmModal = ({ onConfirm, onDecline }) => {
  return (
    <div className={styles.container}>
      <p className={styles.text}>Are you sure you want to delete this user?</p>
      <div className={styles.controls}>
        <Button type='primary' onClick={onDecline}>Nah!</Button>
        <Button type='danger' onClick={onConfirm}>Yes, Please</Button>
      </div>
    </div>
  )
};

ConfirmModal.propTypes = {
  onConfirm: PropTypes.func,
  onDecline: PropTypes.func,
};

ConfirmModal.defaultProps = {
  onConfirm: () => {},
  onDecline: () => {}
};

export default ConfirmModal;
