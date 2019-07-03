import React from 'react';
declare type ActionLike = (context: any, payload?: any) => any;
declare type Payloads<T extends ActionLike> = Parameters<T> extends [any, infer P] ? [P] : [undefined?];
export interface ComponentContext {
    executeAction<T extends ActionLike>(action: T, ...payload: Payloads<T>): void;
    getStore<T>(store: {
        new (...args: any[]): T;
    }): T;
}
export declare const Context: React.Context<ComponentContext>;
export default Context;
