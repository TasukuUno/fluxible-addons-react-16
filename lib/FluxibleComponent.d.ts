import React from 'react';
import { ComponentContext } from './Context';
export interface FluxibleComponentProps {
    context: ComponentContext;
}
declare const FluxibleComponent: React.FC<FluxibleComponentProps>;
export default FluxibleComponent;
