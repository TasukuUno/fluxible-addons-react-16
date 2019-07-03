import React from 'react';
import FluxibleComponent from './FluxibleComponent';

const createElementWithContext = (fluxibleContext: any, props: object = {}) => {
  const Component = fluxibleContext.getComponent();
  const context = fluxibleContext.getComponentContext();
  return (
    <FluxibleComponent context={context}>
      <Component context={context} {...props} />
    </FluxibleComponent>
  );
};

export default createElementWithContext;
