import {Card, Collapsible, Icon, Layout, Stack} from '@shopify/polaris';
import {CircleTickMajor} from '@shopify/polaris-icons';
import React from 'react';
import CollapsibleItem from '@assets/components/Home/HomeGuide/CollapsibleItem';
import {SETUP_COLLAPSIBLE_ITEMS} from '@assets/const/biscuit';

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
          {SETUP_COLLAPSIBLE_ITEMS.map(item => (
            <CollapsibleItem
              key={item.heading}
              heading={item.heading}
              description={item.description}
              primaryButtonText={item.primaryButtonText}
              plainButtonText={item.plainButtonText}
            />
          ))}
        </Stack>
      </Card.Section>
    </Collapsible>
  );
}
