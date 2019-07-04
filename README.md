# fluxible-addons-react-16

Fluxible addons for use with React >= 16.8  
without Legacy Context API and Lifecycle Methods,  
with New Context API and Hooks.

（This module is experimental.）

```
npm i TasukuUno/fluxible-addons-react-16
```

## See Also

https://github.com/yahoo/fluxible/issues/584

<br>

## APIs and how to replace from fluxible-addons-react

### FluxibleComponent

Same interface from [original API](https://github.com/yahoo/fluxible/blob/9586e4f438f5780f79f902d1275ee60c6b0d8170/packages/fluxible-addons-react/docs/api/FluxibleComponent.md), but new context API is used internally.

```tsx
<FluxibleComponent context={context.getComponentContext()}>
  <Component />
</FluxibleComponent>
```
<br>

### createElementWithContext

Same interface from [original API](https://github.com/yahoo/fluxible/blob/9586e4f438f5780f79f902d1275ee60c6b0d8170/packages/fluxible-addons-react/docs/api/createElementWithContext.md), but new FluxibleComponent is used internally.

```ts
const app = new Fluxible({
  component: MyComponent
});
const context = app.createContext();
const fluxibleComponent = createElementWithContext(context, props);
```
<br>

### connectToStores => useFluxibleStores

By calling `useFluxibleStores()` hook, we can inject store values and subscribe changes.

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

By calling `useFluxibleContext()` hook, we can inject component context to call executeAction.

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
<br><br>

## troubleshooting

### Error: Fluxible context is not provided! use FluxibleComponent or createElementWithContext

To use `useFluxibleStores` and `useFluxibleContext`, Fluxible context must be provided in component tree.
Use `FluxibleComponent` or `createElementWithContext`.

### Error: Invariant Violation: Invalid hook call.

[React Hooks API](https://reactjs.org/docs/hooks-reference.html) is called in `useFluxibleStores` and `useFluxibleContext`.  
We can not call them in class components. Rewrite the component as a react function component.  
See Also: https://reactjs.org/warnings/invalid-hook-call-warning.html#breaking-the-rules-of-hooks

### Error: context.getStore is not a function

Are you using `handleRoute` or `handleHistory` of [fluxible-router](https://github.com/yahoo/fluxible/tree/master/packages/fluxible-router)?  
Yes, it is a problem.

We may need to rewrite them using hooks because they also depend on Legacy Context API.  
But I think it is out of scope of this module.

Anyways, I hope New Context API and Hooks will be supported by the original fluxible modules. 😄
