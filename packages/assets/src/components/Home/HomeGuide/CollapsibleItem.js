import {Button, Icon, Layout, Stack, TextStyle} from '@shopify/polaris';
import {CircleTickMajor} from '@shopify/polaris-icons';
import React from 'react';

export default function CollapsibleItem({isEnabled = false}) {
  return (
    <Stack.Item>
      <Stack wrap={false}>
        <Stack.Item>
          <Icon source={CircleTickMajor} color={isEnabled ? 'primary' : 'subdued'} />
        </Stack.Item>
        <Stack.Item fill>
          <Layout>
            <Layout.Section>
              <div className="Avada-Checklist__Heading">
                <TextStyle variation={isEnabled ? '' : 'strong'}>
                  Setup your cookie banner
                </TextStyle>
              </div>
            </Layout.Section>
            {!isEnabled && (
              <Layout.Section>
                <Layout>
                  <Layout.Section>
                    <TextStyle>
                      <TextStyle>
                        It is recommended to choose Collected after consent for marketing and
                        analytics data to be collected after consent given via banner for customers
                        from the EU, EEA, UK and Switzerland.
                      </TextStyle>
                    </TextStyle>
                  </Layout.Section>
                  <Layout.Section secondary></Layout.Section>
                  <Layout.Section>
                    <Stack spacing="loose" alignment="center">
                      <Stack.Item>
                        <Button primary textAlign="center">
                          Update Preference
                        </Button>
                      </Stack.Item>
                      <Stack.Item>
                        <Button textAlign="center" plain>
                          I've updated
                        </Button>
                      </Stack.Item>
                    </Stack>
                  </Layout.Section>
                </Layout>
              </Layout.Section>
            )}
          </Layout>
        </Stack.Item>
      </Stack>
    </Stack.Item>
  );
}
