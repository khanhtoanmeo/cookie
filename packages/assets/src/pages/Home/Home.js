import React, {useCallback, useState} from 'react';
import './Home.scss';
import {
  Card,
  Collapsible,
  Heading,
  Icon,
  Layout,
  Page,
  ProgressBar,
  Stack,
  TextStyle
} from '@shopify/polaris';
import {useStore} from '@assets/reducers/storeReducer';
import {ChevronDownMinor, ChevronUpMinor, CircleTickMajor, TickMinor} from '@shopify/polaris-icons';
import CollapsibleSetupGuide from '@assets/components/Home/HomeGuide/CollapsibleSetupGuide';
import SetupInformation from '@assets/components/Home/HomeGuide/SetupInformation';
import HomeHelpdeskWrapper from '@assets/components/Home/HomeHelpdesk/HomeHelpdeskWrapper';
import HomeBannerWrapper from '@assets/components/Home/HomeBanner/HomeBannerWrapper';

/**
 * Render a home page for overview
 *
 * @return {React.ReactElement}
 * @constructor
 */

//Cho toan
export default function Home() {
  const {dispatch} = useStore();
  const [open, setOpen] = useState(false);
  const handleCollapsible = useCallback(() => setOpen(prev => !prev), []);
  return (
    <Page title="Dashboard">
      <Layout>
        <Layout.Section>
          <Card>
            <SetupInformation handleCollapsible={handleCollapsible} />
            <CollapsibleSetupGuide isOpenGuide={open} />
          </Card>
        </Layout.Section>
        <Layout.Section>
          <HomeHelpdeskWrapper />
        </Layout.Section>
      </Layout>
    </Page>
  );
}
