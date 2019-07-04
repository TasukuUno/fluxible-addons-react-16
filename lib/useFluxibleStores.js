"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const useFluxibleContext_1 = __importDefault(require("./useFluxibleContext"));
const useIsomorphicLayoutEffect = typeof window !== 'undefined' ? react_1.useLayoutEffect : react_1.useEffect;
const useFluxibleStores = (stores, onStoreChange) => {
    const { getStore } = useFluxibleContext_1.default();
    const [, forceRender] = react_1.useReducer((s) => s + 1, 0);
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
exports.default = useFluxibleStores;
