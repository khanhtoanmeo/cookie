import {Button, CalloutCard, Card, Layout, MediaCard, Page, Stack} from '@shopify/polaris';
import React from 'react';

const FeatureRequest = () => {
  return (
    <Page title="Feature request" breadcrumbs={[{content: 'feature-request', url: '/'}]}>
      <Layout>
        <Layout.Section>
          <Card>
            <CalloutCard
              title="Give us some feedbacks"
              primaryAction={{
                content: 'Tell us now',
                url: 'https://public.avada.io/poll/TKE3hx7cYd2DFByTogMe/Sv0dMyjKl5lZwHF4D2xE'
              }}
            >
              <p>We truly value your feedback and heads towards improvement</p>
            </CalloutCard>
          </Card>
        </Layout.Section>
        <Layout.Section>
          <Card>
            <MediaCard
              size="small"
              title="Joy Loyalty: Rewards, Loyalty Program"
              primaryAction={{
                content: 'Install now',
                onAction: () => {}
              }}
              secondaryAction={{
                plain: true,
                url:
                  'https://cookie.avada.io/embed/feature-request?ref=avada&ref_from=&utm_source=cookie-bar&utm_campaign=&utm_content=&utm_medium=dashboard',
                content: 'View demo'
              }}
              description="Rewards, Loyalty Points & Rewards Program Points, Referrals"
            >
              <img
                alt=""
                src="https://cdn.shopify.com/app-store/listing_images/1c76cf8a2c51f2fcf7a52ae3db9b0d6f/promotional_image/CNvIqZKQnYADEAE=.png"
                style={{
                  objectFit: 'cover',
                  objectPosition: 'center center',
                  width: '100%',
                  height: '100%'
                }}
              />
            </MediaCard>
          </Card>
        </Layout.Section>
      </Layout>
    </Page>
  );
};

export default FeatureRequest;
