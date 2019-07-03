# fluxible-addons-react-16

Fluxible addons for use with React >= 16.8  
without Legacy Context API and Lifecycle Methods,  
with New Context API and Hooks.

## See Also

https://github.com/yahoo/fluxible/tree/master/packages/fluxible-addons-react
https://github.com/yahoo/fluxible/issues/584

## APIs and how to replace from fluxible-addons-react

### FluxibleComponent

Same interface from original, but new context API is used internally.

```tsx
<FluxibleComponent context={context.getComponentContext()}>
  <Component />
</FluxibleComponent>
```
<br>

### createElementWithContext

Same interface from original, but new FluxibleComponent is used internally.

```ts
const app = new Fluxible({
  component: MyComponent
});
const context = app.createContext();
const fluxibleComponent = createElementWithContext(context, props);
```
<br>

### connectToStores => useFluxibleStores

By calling useFluxibleStores() hook, we can inject store values and subscribe changes.

```tsx
import React from 'react';
import { useFluxibleStores, StoreChangeContext } from 'fluxible-addons-react-16';

import AAAStore from '../../../stores/AAAStore';
import BBBStore from '../../../stores/BBBStore';

const stores = [ AAAStore, BBBStore ];
const onStoreChange = (context: StoreChangeContext) => {
  return {
    aaa: context.getStore(AAAStore).getA(),
    bbb: context.getStore(BBBStore).getB(),
  };
};

const Component: React.FC = () => {
  // inject store values and subscribe changes
  const { aaa, bbb } = useFluxibleStores(stores, onStoreChange);
  return (
    <div>
      <div>{aaa}</div>
      <div>{bbb}</div>
    </div>
  );
};

export default Component;
```
<br>

### this.context => useFluxibleContext

By calling useFluxibleContext() hook, we can inject component context to call executeAction.

```tsx
import React from 'react';
import { useFluxibleContext } from 'fluxible-addons-react-16';

import CCCAction from '../../../actions/CCCAction';

const Component: React.FC = () => {
  // inject component context
  const context = useFluxibleContext();

  const onClick = () => {
    context.executeAction(CCCAction.something, 'something');
  };

  return (
    <button onClick={onClick}>something</button>
  );
};

export default Component;
```

