import React from 'react';
import styles from './Header.styl';

const Header = (props) => {
  return (
    <div className={styles.header}>
      <div className={styles.content}>
        Sample header here
      </div>
    </div>
  );
};

Header.propTypes = {
  // header propTypes
};

Header.defaultProps = {
  // default props
};

export default Header;
