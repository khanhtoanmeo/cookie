import {Button, Icon, Layout, Stack, TextStyle} from '@shopify/polaris';
import {CircleTickMajor} from '@shopify/polaris-icons';
import React from 'react';

export default function CollapsibleItem({
  heading = '',
  description = '',
  primaryButtonText = '',
  plainButtonText = '',
  isEnabled = true
}) {
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
                <TextStyle variation={isEnabled ? '' : 'strong'}>{heading}</TextStyle>
              </div>
            </Layout.Section>
            {!isEnabled && (
              <Layout.Section>
                <Layout>
                  <Layout.Section>
                    <TextStyle>
                      <TextStyle>{description}</TextStyle>
                    </TextStyle>
                  </Layout.Section>
                  <Layout.Section secondary></Layout.Section>
                  {!isEnabled && (
                    <Layout.Section>
                      <Stack spacing="loose" alignment="center">
                        <Stack.Item>
                          <Button primary textAlign="center">
                            {primaryButtonText}
                          </Button>
                        </Stack.Item>
                        <Stack.Item>
                          <Button textAlign="center" plain>
                            {plainButtonText}
                          </Button>
                        </Stack.Item>
                      </Stack>
                    </Layout.Section>
                  )}
                </Layout>
              </Layout.Section>
            )}
          </Layout>
        </Stack.Item>
      </Stack>
    </Stack.Item>
  );
}
