"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useTaskDispatch = exports.useTask = exports.TaskProvider = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const TaskContext = (0, react_1.createContext)([{ id: 1, text: 'hi', done: false }]);
const TasksDispatchContext = (0, react_1.createContext)(function A() { });
function TaskProvider({ children }) {
    const [tasks, dispatch] = (0, react_1.useReducer)(taskReducer, initialTasks);
    return ((0, jsx_runtime_1.jsx)(TaskContext.Provider, { value: tasks, children: (0, jsx_runtime_1.jsx)(TasksDispatchContext.Provider, { value: dispatch, children: children }) }));
}
exports.TaskProvider = TaskProvider;
function useTask() {
    return (0, react_1.useContext)(TaskContext);
}
exports.useTask = useTask;
function useTaskDispatch() {
    return (0, react_1.useContext)(TasksDispatchContext);
}
exports.useTaskDispatch = useTaskDispatch;
function taskReducer(tasks, action) {
    switch (action.type) {
        case "added": {
            return [
                ...tasks,
                {
                    id: action.id,
                    text: action.text,
                    done: false,
                },
            ];
        }
        case "changed": {
            return tasks.map((task) => {
                if (task.id === action.task.id) {
                    return action.task;
                }
                else {
                    return task;
                }
            });
        }
        case "deleted": {
            return tasks.filter((task) => task.id !== action.id);
        }
        default: {
            throw Error("Неизвесная операция: " + action.type);
        }
    }
}
const initialTasks = [
    { id: 0, text: "Изучить MUI", done: false },
    { id: 1, text: "Изучить JS", done: true },
    { id: 2, text: "Изучить react", done: false },
    { id: 3, text: "Изучить html", done: true },
];
