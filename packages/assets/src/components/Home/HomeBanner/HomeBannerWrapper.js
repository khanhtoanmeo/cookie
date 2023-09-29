import React from 'react';
import {MediaCard, Page} from '@shopify/polaris';

export default function HomeBannerWrapper() {
  return (
    <Page>
      <MediaCard
        title="PageFly Landing Page Builder"
        primaryAction={{
          content: 'Check out PageFly',
          onAction: () => {}
        }}
        description="PageFly is the ultimate solution for creating stunning and highly converting pages to enhance your storefront and drive sales this BFCM season"
      >
        <img
          alt=""
          width="100%"
          height="100%"
          style={{
            objectFit: 'cover',
            objectPosition: 'center'
          }}
          src="https://res.cloudinary.com/diclnyihy/image/upload/v1695200397/BFCM_600_x_400_px_bdjssy.png"
        />
      </MediaCard>
    </Page>
  );
}
