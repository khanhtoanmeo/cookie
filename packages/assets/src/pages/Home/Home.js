import React, {useCallback, useState} from 'react';
import './Home.scss';
import {Card, Layout, Page} from '@shopify/polaris';
import {useStore} from '@assets/reducers/storeReducer';
import CollapsibleSetupGuide from '@assets/components/Home/HomeGuide/CollapsibleSetupGuide';
import SetupInformation from '@assets/components/Home/HomeGuide/SetupInformation';
import HomeHelpdeskWrapper from '@assets/components/Home/HomeHelpdesk/HomeHelpdeskWrapper';

/**
 * Render a home page for overview
 *
 * @return {React.ReactElement}
 * @constructor
 */

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
