import React from 'react';
import styles from './Home.styl';
import HomeContainer from '@components/containers/Home/HomeContainer';

class HomePage extends React.Component {
  render() {
    return (
      <div className={styles.home}>
        <HomeContainer />
      </div>
    )
  }
}

export default HomePage;
