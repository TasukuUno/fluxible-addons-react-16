import React from 'react';
import Context, { ComponentContext } from './Context';

export interface FluxibleComponentProps {
  context: ComponentContext;
}

const FluxibleComponent: React.FC<FluxibleComponentProps> = props => {
  return (
    <Context.Provider value={props.context}>
      {props.children}
    </Context.Provider>
  );
};

export default FluxibleComponent;
