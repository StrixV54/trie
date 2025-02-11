import { create } from 'zustand'
import { produce } from 'immer'

interface Task {
  id: number
  title: string
  description: string
  dueDate: Date
}

export type PartialTask = Partial<Task>
export type ExtendedTask = Task & {
  selected: boolean
}

interface TaskState {
  selected: string[]
  tasks: Task[]
  taskLoading: boolean
  setTaskLoading: (id: boolean) => void
}

// without immer ***
// export const useTaskStore = create<TaskState>((set, get) => ({
//   selected: [],
//   allTasks: [],
//   taskLoading: false,
//   setTaskLoading: (status: boolean) =>
//     set({ ...get(), taskLoading: status }),
// }))

export const useTaskStore = create<TaskState>((set) => ({
  selected: [],
  tasks: [{
    id: 123121,
    title: "Today",
    description: "29 Day",
    dueDate: new Date("2022-02-19T00:00:00.000Z")
  }],
  taskLoading: false,
  setTaskLoading: (status: boolean) =>
    set(produce((state: TaskState) => {
        state.taskLoading = status
      })
    ),
  addTask : (task: Task) => set(produce((state: TaskState) => {
    state.tasks.push(task)
  })),
  selectTask: (id: string) => set(produce((state: TaskState) => {
    if (state.selected.includes(id)) {
      state.selected = state.selected.filter((item) => item !== id)
    } else {
      state.selected.push(id)
    }
  }))
}))
