import {Button, Card, Layout, MediaCard, Page, TextContainer} from '@shopify/polaris';
import React from 'react';
import {apps} from '../../const/moreApps/apps';
import SingleApp from '../../components/SingleApp/SingleApp';

const MoreApps = () => {
  return (
    <>
      <Page
        title="Apps that you may like"
        subtitle="Our list of staff picked apps that will suits you"
        breadcrumbs={[{content: 'More apps', url: '/'}]}
      >
        <Layout>
          <Layout.Section>
            <Card title="Discover apps to keep your store growing">
              <Card.Section>
                <TextContainer>
                  <p>Use apps to build your store into the business you want it to be.</p>

                  <div
                    style={{
                      width: '100%',
                      height: '290px',
                      display: 'grid',
                      gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
                      overflowY: 'scroll'
                    }}
                  >
                    {apps.map(app => (
                      <SingleApp
                        key={app.id}
                        name={app.name}
                        description={app.description}
                        reviews={app.reviews}
                        price={app.price}
                        logo={app.logo}
                        star={app.star}
                        subscription={app.subscription}
                        appUrl={app.appUrl}
                      />
                    ))}
                  </div>
                  <div style={{textAlign: 'center'}}>
                    <Button primary url="https://avada.io/partners/">
                      Show more
                    </Button>
                  </div>
                </TextContainer>
              </Card.Section>
            </Card>
          </Layout.Section>
          <Layout.Section>
            <Card>
              <MediaCard
                size="small"
                title="PageFly Landing Page Builder"
                primaryAction={{
                  content: 'Check out PageFly',
                  onAction: () => {}
                }}
                description="PageFly is the ultimate solution for creating stunning and highly converting pages to enhance your storefront and drive sales this BFCM season."
              >
                <img
                  alt=""
                  src="https://res.cloudinary.com/diclnyihy/image/upload/v1695200397/BFCM_600_x_400_px_bdjssy.png"
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
    </>
  );
};

export default MoreApps;
