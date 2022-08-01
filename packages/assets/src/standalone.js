import App from './App';
import React from 'react';
import './styles/app.scss';
import * as ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import {auth, api} from './helpers';
import {isEmpty} from '@avada/utils';
import {StoreProvider} from '@assets/reducers/storeReducer';
import {collectActiveShopData} from '@assets/services/shopService';

window.isAuthenticated = false;

auth.onAuthStateChanged(async user => {
  if (user === null && !window.isAuthenticated) {
    window.location.href = 'auth/login';
    ReactDOM.render(<div />, document.getElementById('app'));
  } else {
    window.isAuthenticated = true;

    const {shop, shopInfo} = await api('/shops');
    const activeShop = await (async () => {
      if (isEmpty(shop)) return null;
      const firebaseUser = await auth.currentUser.getIdTokenResult();
      return {
        ...firebaseUser.claims,
        vendor: firebaseUser.claims.type || 'others',
        ...collectActiveShopData({shop, shopInfo})
      };
    })();
    // if (activeShop) {
    //   TagManager.initialize({gtmId: 'GTM_ID'});
    //   if (!activeShop.isCrmLogin) {
    //     loadCrisp('WEBSITE_ID', shop.crispSessionToken);
    //     pushDataToCrisp({shopData: activeShop, user});
    //   }
    // }

    const loading = document.getElementById('PreLoading');
    if (loading !== null) {
      loading.style.display = 'none';
    }
    ReactDOM.render(
      <StoreProvider {...{user, activeShop}}>
        <App />
      </StoreProvider>,
      document.getElementById('app')
    );
  }
});

// Register a service worker for PWA application
serviceWorker.register();
