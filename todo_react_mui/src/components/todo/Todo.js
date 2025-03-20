"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const material_1 = require("@mui/material");
const AddTask_1 = __importDefault(require("../addTask/AddTask"));
const Plan_1 = __importDefault(require("../plan/Plan"));
const Done_1 = __importDefault(require("../done/Done"));
function Todo() {
    return ((0, jsx_runtime_1.jsxs)(material_1.Box
    // backgroundColor="white"
    , { 
        // backgroundColor="white"
        boxSizing: "border-box", width: "514px", height: "766px", borderRadius: "15px", padding: "32px", children: [(0, jsx_runtime_1.jsx)(material_1.Typography, { align: "left", variant: "h4", color: "#2196F3", children: "TODO" }), (0, jsx_runtime_1.jsx)(AddTask_1.default, {}), (0, jsx_runtime_1.jsx)(Plan_1.default, {}), (0, jsx_runtime_1.jsx)(Done_1.default, {})] }));
}
exports.default = Todo;
