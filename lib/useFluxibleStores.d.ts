import { ComponentContext } from './Context';
export interface StoreLike {
    on(eventName: string, onChange: () => void): void;
    removeListener(eventName: string, onChange: () => void): void;
}
export interface StoreClassLike {
    new (...args: any[]): StoreLike;
}
export declare type StoreChangeContext = Pick<ComponentContext, 'getStore'>;
declare type StoreChange = (context: StoreChangeContext) => any;
declare const useFluxibleStores: <T extends StoreChange>(stores: StoreClassLike[], onStoreChange: T) => ReturnType<T>;
export default useFluxibleStores;
