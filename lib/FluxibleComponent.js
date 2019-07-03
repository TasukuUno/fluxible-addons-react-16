"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Context_1 = __importDefault(require("./Context"));
const FluxibleComponent = props => {
    return (react_1.default.createElement(Context_1.default.Provider, { value: props.context }, props.children));
};
exports.default = FluxibleComponent;
