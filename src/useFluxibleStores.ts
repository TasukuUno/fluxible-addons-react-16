import { useReducer, useEffect, useLayoutEffect } from 'react';
import { ComponentContext } from './Context';
import useFluxibleContext from './useFluxibleContext';

const useIsomorphicLayoutEffect =
  typeof window !== 'undefined' ? useLayoutEffect : useEffect;

export interface StoreLike {
  on(eventName: string, onChange: () => void): void;
  removeListener(eventName: string, onChange: () => void): void;
}

export interface StoreClassLike {
  new(...args: any[]): StoreLike;
}

export type StoreChangeContext = Pick<ComponentContext, 'getStore'>;

type StoreChange = (context: StoreChangeContext) => any;

const useFluxibleStores = <T extends StoreChange>(stores: StoreClassLike[], onStoreChange: T): ReturnType<T> => {
  const { getStore } = useFluxibleContext();
  const [ , forceRender ] = useReducer((s: number) => s + 1, 0);

  const selectedState = onStoreChange({ getStore });

  useIsomorphicLayoutEffect(() => {
    function onChange() {
      forceRender({});
    }

    stores.forEach(store => {
      getStore(store).on('change', onChange);
    });

    return () => {
      stores.forEach(store => {
        getStore(store).removeListener('change', onChange);
      });
    };
  });

  return selectedState;
};

export default useFluxibleStores;
