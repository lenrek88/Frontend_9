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
function Plan() {
    const tasks = (0, TaskContext_1.useTask)();
    const lengthPlan = tasks.filter((it) => it.done === false).length;
    return ((0, jsx_runtime_1.jsxs)(material_2.Box, { flexDirection: "column", children: [lengthPlan > 0 ? ((0, jsx_runtime_1.jsxs)(material_1.Typography, { color: "gray", varint: "button", children: ["\u041F\u043B\u0430\u043D (", lengthPlan, ")"] })) : null, tasks.reverse().map((task) => {
                if (task.done) {
                    return (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, {});
                }
                else {
                    return (0, jsx_runtime_1.jsx)(Task_1.default, { task: task }, task.id);
                }
            })] }));
}
exports.default = Plan;
