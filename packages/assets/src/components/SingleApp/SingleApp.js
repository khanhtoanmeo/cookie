import {Button, Link, Stack, TextStyle, Thumbnail} from '@shopify/polaris';
import React from 'react';

const SingleApp = ({name, description, reviews, price, logo, star, subscription, appUrl}) => {
  const svgs = [];
  for (let i = 0; i < star; i++) {
    svgs.push(
      <svg
        viewBox="0 0 20 20"
        className="v3asa"
        focusable="false"
        aria-hidden="true"
        style={{fill: 'rgb(238, 194, 0)', height: '2rem', width: '2rem'}}
        key={i}
      >
        <path d="m5.2 18a.8.8 0 0 1-.47-.152.8.8 0 0 1-.322-.762l.743-5.203-2.917-2.917a.8.8 0 0 1-.196-.81.798.798 0 0 1 .63-.544l4.398-.734 2.218-4.435a.808.808 0 0 1 .72-.443.8.8 0 0 1 .715.45l2.123 4.362 4.498.801a.8.8 0 0 1 .623.547.798.798 0 0 1-.198.806l-2.917 2.917.744 5.203a.8.8 0 0 1-.327.764.799.799 0 0 1-.827.064l-4.382-2.22-4.502 2.223a.792.792 0 0 1 5.2 18z"></path>
      </svg>
    );
  }
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        flexWrap: 'nowrap',
        padding: '5px 10px'
      }}
    >
      <div style={{maxWidth: '70%'}}>
        <Stack wrap={false}>
          <Stack.Item>
            <Thumbnail size="medium" source={logo} alt="Be yours theme"></Thumbnail>
          </Stack.Item>
          <Stack.Item fill>
            <p>
              <Link url={appUrl}>
                <TextStyle variation="strong">{name}</TextStyle>
              </Link>
            </p>
            <p>
              <TextStyle variation="subdued">{description}</TextStyle>
            </p>

            <Stack spacing="tight">
              <Stack.Item>{svgs}</Stack.Item>
              <Stack.Item>
                <Link url={appUrl + '#reviews'}>{reviews} reviews</Link>
              </Stack.Item>
            </Stack>

            <Stack.Item>
              <TextStyle variation="positive">
                {price > 0 ? `$${price} USD` : subscription}
              </TextStyle>
            </Stack.Item>
          </Stack.Item>
        </Stack>
      </div>
      <div style={{maxWidth: '30%'}}>
        <Button url={appUrl}>Try now</Button>
      </div>
    </div>
  );
};

export default SingleApp;
