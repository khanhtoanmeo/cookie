import {Card, Heading, Icon, ProgressBar, Stack, TextStyle} from '@shopify/polaris';
import {ChevronDownMinor, ChevronUpMinor} from '@shopify/polaris-icons';
import React from 'react';

export default function SetupInformation({handleCollapsible, isCollapse = true}) {
  return (
    <Card.Section>
      <Stack>
        <Stack.Item fill>
          <Heading>Setup guide</Heading>
        </Stack.Item>
        <div onClick={handleCollapsible} className="Avada-IconCollapsible">
          <Stack.Item>
            <Icon source={isCollapse ? ChevronDownMinor : ChevronUpMinor} />
          </Stack.Item>
        </div>
      </Stack>
      <TextStyle>Use this guide to quickly setup your cookie banner</TextStyle>
      <div style={{marginTop: '1rem'}}></div>
      <Stack alignment="center">
        <Stack.Item>
          <TextStyle variation="subdued">2 out of 3 tasks complete</TextStyle>
        </Stack.Item>
        <Stack.Item fill>
          <ProgressBar size="small" progress={66} color="primary" />
        </Stack.Item>
      </Stack>
    </Card.Section>
  );
}
