"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
require("./App.css");
const Box_1 = __importDefault(require("@mui/material/Box"));
const Todo_1 = __importDefault(require("./components/todo/Todo"));
const TaskContext_1 = require("./context/TaskContext");
function App() {
    return ((0, jsx_runtime_1.jsx)("div", { className: "App", children: (0, jsx_runtime_1.jsx)(TaskContext_1.TaskProvider, { children: (0, jsx_runtime_1.jsx)(Box_1.default, { display: "flex", justifyContent: "center", alignItems: "center", 
                // backgroundColor={"gray"}
                minHeight: "100vh", children: (0, jsx_runtime_1.jsx)(Todo_1.default, {}) }) }) }));
}
exports.default = App;
