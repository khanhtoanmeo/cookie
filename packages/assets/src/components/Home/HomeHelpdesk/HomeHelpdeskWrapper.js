import {Button, ButtonGroup, Card, Stack} from '@shopify/polaris';
import React from 'react';
import SpeedCheckMeter from '@assets/components/Home/HomeHelpdesk/SpeedCheckMeter/SpeedCheckMeter';
import Helpdesk from '@assets/components/Home/HomeHelpdesk/Helpdesk/Helpdesk';

export default function HomeHelpdeskWrapper() {
  return (
    <Stack>
      <Stack.Item fill>
        <Helpdesk />
      </Stack.Item>
      <Stack.Item fill>
        <SpeedCheckMeter />
      </Stack.Item>
    </Stack>
  );
}
