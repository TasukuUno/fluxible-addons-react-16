"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const FluxibleComponent_1 = __importDefault(require("./FluxibleComponent"));
const createElementWithContext = (fluxibleContext, props = {}) => {
    const Component = fluxibleContext.getComponent();
    const context = fluxibleContext.getComponentContext();
    return (react_1.default.createElement(FluxibleComponent_1.default, { context: context },
        react_1.default.createElement(Component, Object.assign({ context: context }, props))));
};
exports.default = createElementWithContext;
