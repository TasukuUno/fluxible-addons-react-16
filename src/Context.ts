import React from 'react';

type ActionLike = (context: any, payload?: any) => any;
type Payloads<T extends ActionLike> = Parameters<T> extends [any, infer P] ? [P] : [undefined?];

export interface ComponentContext {
  executeAction<T extends ActionLike>(action: T, ...payload: Payloads<T>): void;
  getStore<T>(store: { new(...args: any[]): T }): T;
}

function noopWithError() {
  return function() {
    throw new Error('Fluxible ontext is not provided!');
  };
}

export const Context = React.createContext<ComponentContext>({
  executeAction: noopWithError(),
  getStore: noopWithError(),
});

export default Context;
