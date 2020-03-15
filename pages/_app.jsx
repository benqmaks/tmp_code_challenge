import React from 'react'
import App, { Container } from 'next/app';
import { withMobx } from 'next-mobx-wrapper';
import { configure } from 'mobx';
import { Provider, useStaticRendering } from 'mobx-react';
import * as getStores from '../source/stores';
import ModalsContainer from '../source/components/containers/ModalsContainer';
import Footer from '../source/components/layout/Footer/Footer';
import Header from '../source/components/layout/Header/Header';
import { IS_SERVER } from '../source/framework/constants';

import styles from './_app.styl';
import '../source/theme/normalize.styl';

configure({ enforceActions: 'observed' });
useStaticRendering(IS_SERVER);

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (typeof Component.getInitialProps === 'function') {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps, store } = this.props;

    return (
      <Container>
        <Provider {...store}>
          <div className={styles.app}>
            <Header />
            <Component {...pageProps} />
            <Footer />
            <ModalsContainer />
          </div>
        </Provider>
      </Container>
    );
  }
}
export default withMobx(getStores)(MyApp);
