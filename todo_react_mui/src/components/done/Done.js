"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const material_1 = require("@mui/material");
const Task_1 = __importDefault(require("../task/Task"));
const material_2 = require("@mui/material");
const TaskContext_1 = require("../../context/TaskContext");
function Done() {
    const tasks1 = (0, TaskContext_1.useTask)();
    const lengthDone = tasks1.filter((it) => it.done === true).length;
    return ((0, jsx_runtime_1.jsxs)(material_2.Box, { flexDirection: "column-reverse", children: [lengthDone > 0 ? ((0, jsx_runtime_1.jsxs)(material_1.Typography, { color: "gray", variant: "button", children: ["\u0413\u043E\u0442\u043E\u0432\u043E (", lengthDone, ")"] })) : null, tasks1.map((task) => {
                if (task.done) {
                    return (0, jsx_runtime_1.jsx)(Task_1.default, { task: task }, task.id);
                }
                else {
                    return (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, {});
                }
            })] }));
}
exports.default = Done;
