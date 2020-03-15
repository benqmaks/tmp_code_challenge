import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import styles from './Actions.styl';

const Actions = ({ onDeleteClick, onEditClick }) => (
  <div className={styles.container}>
    <button className={classnames(styles.button, styles.edit)} onClick={onEditClick}>edit</button>
    <button className={classnames(styles.button, styles.delete)} onClick={onDeleteClick}>delete</button>
  </div>
);

Actions.propTypes = {
  onDeleteClick: PropTypes.func,
  onEditClick: PropTypes.func
};

Actions.defaultProps = {
  onDeleteClick: () => {},
  onEditClick: () => {}
};

export default Actions;
