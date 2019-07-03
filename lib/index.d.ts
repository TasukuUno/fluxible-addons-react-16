/// <reference types="react" />
import Context from './Context';
import createElementWithContext from './createElementWithContext';
import FluxibleComponent from './FluxibleComponent';
import useFluxibleContext from './useFluxibleContext';
import useFluxibleStores from './useFluxibleStores';
export * from './Context';
export * from './createElementWithContext';
export * from './FluxibleComponent';
export * from './useFluxibleContext';
export * from './useFluxibleStores';
export { Context, createElementWithContext, FluxibleComponent, useFluxibleContext, useFluxibleStores, };
declare const _default: {
    Context: import("react").Context<import("./Context").ComponentContext>;
    createElementWithContext: (fluxibleContext: any, props?: object) => JSX.Element;
    FluxibleComponent: import("react").FunctionComponent<import("./FluxibleComponent").FluxibleComponentProps>;
    useFluxibleContext: () => import("./Context").ComponentContext;
    useFluxibleStores: <T extends (context: Pick<import("./Context").ComponentContext, "getStore">) => any>(stores: import("./useFluxibleStores").StoreClassLike[], onStoreChange: T) => ReturnType<T>;
};
export default _default;
