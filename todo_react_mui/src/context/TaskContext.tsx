import { createContext, useContext, useReducer } from "react";

type TasksType = {
  id: number;
  text: string;
  done: boolean;
}

type ActionType = {
  type: string;
  id: number;
  text: string;
  task: TasksType;
}

const TaskContext = createContext([{id: 1, text: 'hi', done: false}]);

const TasksDispatchContext = createContext<Function>(function A() {});


export function TaskProvider({ children }:{children: React.ReactNode}) {
  const [tasks, dispatch] = useReducer(taskReducer, initialTasks);



  return (
    <TaskContext.Provider value={tasks}>
      <TasksDispatchContext.Provider value={dispatch}>
        {children}
      </TasksDispatchContext.Provider>
    </TaskContext.Provider>
  );
}

export function useTask() {
  return useContext(TaskContext);
}

export function useTaskDispatch() {
  return useContext(TasksDispatchContext);
}

function taskReducer(tasks : Array<TasksType>, action: ActionType) {
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
        } else {
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
