import * as React from 'react';
import classnames from 'classnames';

import styles from './Loader.styl';

const Loader = ({ className, size, fluid }) => {
  const classNames = classnames(
    styles.loader,
    { [styles[size]]: !fluid },
    { [styles.fluid]: fluid },
    className
  );

  return (
    <div className={classNames} />
  );
};

Loader.defaultProps = {
  className: '',
  size: 'medium',
  fluid: false
};

export default Loader;
