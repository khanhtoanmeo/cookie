import React from 'react';
import {Navigation} from '@shopify/polaris';
import {useHistory, useLocation} from 'react-router-dom';
import {ArrowLeftMinor, HomeMajor, SettingsMajor, ShareMinor} from '@shopify/polaris-icons';
import '@assets/styles/layout/navigation.scss';
import {useStore} from '@assets/reducers/storeReducer';
import {isEmbeddedApp, prependRoute} from '@assets/config/app';
import getDomain from '@assets/helpers/getDomain';
import {getUrl} from '@assets/helpers/getUrl';

/**
 * @return {JSX.Element}
 * @constructor
 */
export default function AppNavigation() {
  const history = useHistory();
  const {pathname} = useLocation();
  const {state} = useStore();
  const {shop} = state;

  const isSelected = (route, isExact = true) => {
    if (typeof route === 'undefined') return false;
    const url = prependRoute(route);
    return isExact ? pathname === url : pathname.startsWith(url);
  };

  const prepareMenu = (menu, item) => {
    if (!item) return menu;

    const {subNavigationItems: subMenus, url, path, includeUrl} = item;

    if (!subMenus?.length) {
      menu.push({
        ...item,
        url: url || path,
        selected: isSelected(url) || isSelected(includeUrl) || isSelected(path, false)
      });
      return menu;
    }

    menu.push({
      url: subMenus[0].url,
      ...item,
      selected: isSelected(path || url, !path),
      subNavigationItems: subMenus.map(x => ({
        ...x,
        selected: isSelected(x.url, false) || isSelected(x.includeUrl, false)
      }))
    });
    return menu;
  };

  return (
    <Navigation location="">
      {!isEmbeddedApp && (
        <Navigation.Section
          items={[
            {
              icon: ArrowLeftMinor,
              label: 'Back to Shopify',
              onClick: () => window.open(`https://${getDomain(shop)}/admin`)
            }
          ]}
        />
      )}
      <Navigation.Section
        fill
        separator
        items={[
          {
            url: '/',
            icon: HomeMajor,
            label: 'Dashboard',
            selected: location.pathname === getUrl('/'),
            onClick: () => {
              history.push('/');
            }
          },
          {
            url: '/settings',
            icon: ShareMinor,
            label: 'Settings',
            selected: location.pathname === getUrl('/settings'),
            onClick: () => {
              history.push('/settings');
            }
          },
          {
            url: '/feature-request',
            icon: ShareMinor,
            label: 'Feature Request',
            selected: location.pathname === getUrl('/feature-request'),
            onClick: () => {
              history.push('/feature-request');
            }
          },
          {
            url: '/partners',
            icon: ShareMinor,
            label: 'More apps',
            selected: location.pathname === getUrl('/partners'),
            onClick: () => {
              history.push('/partners');
            }
          }
        ].reduce(prepareMenu, [])}
      />
      <Navigation.Section
        separator
        items={[
          {
            label: 'Settings',
            url: '/settings',
            icon: SettingsMajor
          }
        ].reduce(prepareMenu, [])}
      />
    </Navigation>
  );
}
