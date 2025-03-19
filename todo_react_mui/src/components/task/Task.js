"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const material_1 = require("@mui/material");
const Edit_1 = __importDefault(require("@mui/icons-material/Edit"));
const Delete_1 = __importDefault(require("@mui/icons-material/Delete"));
const IconButton_1 = __importDefault(require("@mui/material/IconButton"));
const Check_1 = __importDefault(require("@mui/icons-material/Check"));
const TaskContext_1 = require("../../context/TaskContext");
const react_1 = require("react");
function Task({ task }) {
    const [isEditing, setIsEditing] = (0, react_1.useState)(false);
    const dispatch = (0, TaskContext_1.useTaskDispatch)();
    let taskContent;
    if (isEditing) {
        taskContent = ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: (0, jsx_runtime_1.jsxs)(material_1.Box, { height: 40, width: 450, display: "flex", children: [(0, jsx_runtime_1.jsx)(material_1.TextField, { id: "input-with-sx", label: "\u0418\u043C\u044F \u0437\u0430\u0434\u0430\u0447\u0438", variant: "standard", sx: { width: "100%", height: "40px" }, value: task.text, onChange: (e) => {
                            dispatch({
                                type: "changed",
                                task: Object.assign(Object.assign({}, task), { text: e.target.value }),
                            });
                        } }), (0, jsx_runtime_1.jsx)(IconButton_1.default, { onClick: () => setIsEditing(false), children: (0, jsx_runtime_1.jsx)(Check_1.default, { sx: { color: "#2196F3" } }) })] }) }));
    }
    else {
        taskContent = ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: (0, jsx_runtime_1.jsxs)(material_1.Box, { height: 40, width: 450, display: "flex", alignItems: "center", justifyContent: "space-between", children: [(0, jsx_runtime_1.jsx)(material_1.Checkbox, { checked: task.done, onChange: (e) => {
                            dispatch({
                                type: "changed",
                                task: Object.assign(Object.assign({}, task), { done: e.target.checked }),
                            });
                        } }), (0, jsx_runtime_1.jsx)(material_1.Typography, { color: "black", width: 400, children: task.text }), (0, jsx_runtime_1.jsx)(IconButton_1.default, { sx: { color: "#2196F3" }, onClick: (e) => {
                            setIsEditing(!isEditing);
                        }, children: (0, jsx_runtime_1.jsx)(Edit_1.default, {}) }), (0, jsx_runtime_1.jsx)(IconButton_1.default, { sx: { color: "orange" }, onClick: (e) => {
                            dispatch({
                                type: "deleted",
                                id: task.id,
                            });
                        }, children: (0, jsx_runtime_1.jsx)(Delete_1.default, {}) })] }) }));
    }
    return (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: taskContent });
}
exports.default = Task;
