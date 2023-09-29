import React from 'react';
import './SpeedCheckMeter.scss';
import {Button, Card, Icon, Stack, TextStyle} from '@shopify/polaris';
import {CancelSmallMinor} from '@shopify/polaris-icons';
import AvadaSpeedCheckMeter from '@assets/components/AvadaSpeedCheckMeterBanner/AvadaSpeedCheckMeter';

export default function SpeedCheckMeter() {
  return (
    <Card>
      <div className="Avada-SpeedCheck__Meter-Wrapper">
        <Card.Section>
          <Stack>
            <Stack.Item fill>
              <Stack alignment="center">
                <Stack.Item>
                  <AvadaSpeedCheckMeter />
                </Stack.Item>
                <Stack.Item fill>
                  <Stack vertical>
                    <Stack.Item>
                      Your site speed: <TextStyle variation="strong">below average</TextStyle>
                    </Stack.Item>
                    <Stack.Item>
                      <Button>Speed up</Button>
                    </Stack.Item>
                  </Stack>
                </Stack.Item>
              </Stack>
            </Stack.Item>
            <Stack.Item>
              <Button plain>
                <Icon source={CancelSmallMinor} />
              </Button>
            </Stack.Item>
          </Stack>
        </Card.Section>
      </div>
    </Card>
  );
}
