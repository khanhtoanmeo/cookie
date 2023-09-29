import {Button, ButtonGroup, Card, Stack} from '@shopify/polaris';
import React from 'react';

export default function Helpdesk() {
  return (
    <Card title="Helpdesk">
      <Card.Section>
        <Stack vertical>
          <Stack.Item>
            <p>Our support team is ready to help with our in-app live chat.</p>
          </Stack.Item>
          <Stack.Item>
            <ButtonGroup>
              <Button>Chat with us</Button>
              <Button plain>Read guide</Button>
            </ButtonGroup>
          </Stack.Item>
        </Stack>
      </Card.Section>
    </Card>
  );
}
