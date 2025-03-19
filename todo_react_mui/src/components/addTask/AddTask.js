"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const material_1 = require("@mui/material");
const Add_1 = __importDefault(require("@mui/icons-material/Add"));
const react_1 = require("react");
const TaskContext_1 = require("../../context/TaskContext");
function AddTask() {
    const [text, setText] = (0, react_1.useState)("");
    const dispatch = (0, TaskContext_1.useTaskDispatch)();
    return ((0, jsx_runtime_1.jsxs)(material_1.Box, { display: "flex", alignItems: "flex-end", mt: "20px", mb: "24px", children: [(0, jsx_runtime_1.jsx)(material_1.TextField, { id: "input-with-sx", label: "\u0418\u043C\u044F \u043D\u043E\u0432\u043E\u0439 \u0437\u0430\u0434\u0430\u0447\u0438", variant: "standard", sx: { width: "100%" }, value: text, onChange: (e) => setText(e.target.value) }), (0, jsx_runtime_1.jsx)(material_1.IconButton, { sx: { color: "#2196F3" }, onClick: (e) => {
                    setText("");
                    dispatch({
                        type: "added",
                        id: nextId++,
                        text: text,
                    });
                }, children: (0, jsx_runtime_1.jsx)(Add_1.default, {}) })] }));
}
exports.default = AddTask;
let nextId = 4;
