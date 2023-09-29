import {Card, Collapsible, Icon, Layout, Stack} from '@shopify/polaris';
import {CircleTickMajor} from '@shopify/polaris-icons';
import React from 'react';
import CollapsibleItem from '@assets/components/Home/HomeGuide/CollapsibleItem';

export default function CollapsibleSetupGuide({isOpenGuide}) {
  return (
    <Collapsible
      open={isOpenGuide}
      id="Avada-Collapsible__SetupGuide"
      transition={{duration: '500ms', timingFunction: 'ease-in-out'}}
      expandOnPrint
    >
      <Card.Section>
        <Stack vertical>
          <CollapsibleItem />
          <CollapsibleItem isEnabled={true} />
          <CollapsibleItem isEnabled={true} />
        </Stack>
      </Card.Section>
    </Collapsible>
  );
}
