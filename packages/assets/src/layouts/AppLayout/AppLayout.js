import React from 'react';
import {Frame, Loading, Toast} from '@shopify/polaris';
import PropTypes from 'prop-types';
import {useStore} from '@assets/reducers/storeReducer';
import {closeToast} from '@assets/actions/storeActions';

import HomeBannerWrapper from '@assets/components/Home/HomeBanner/HomeBannerWrapper';

/**
 * Render an app layout
 *
 * @param {React.ReactNode} children
 * @return {React.ReactNode}
 * @constructor
 */
export default function AppLayout({children}) {
  const {state, dispatch} = useStore();
  const {loading, toast} = state;

  return (
    <Frame>
      {children}
      <HomeBannerWrapper />
      {loading && <Loading />}
      {toast && <Toast onDismiss={() => closeToast(dispatch)} {...toast} />}
    </Frame>
  );
}

AppLayout.propTypes = {
  children: PropTypes.node.isRequired
};
