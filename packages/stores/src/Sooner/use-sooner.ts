import { create } from "zustand"
import { SoonerInitailState } from "./sooner.types"

export const useSooner = create<SoonerInitailState>((set) => ({
  value: null,
  clear: () => set({ value: null }),
  success: (arg) => {
    set((state) => ({
      ...state,
      value: {
        ...state.value,
        title: arg.title,
        description: arg.description,
        position: arg.position,
        type: "success",
      },
    }))
  },
  error: (arg) => {
    set((state) => ({
      ...state,
      value: {
        ...state.value,
        title: arg.title,
        description: arg.description,
        position: arg.position,
        type: "error",
      },
    }))
  },
  warning: (arg) => {
    set((state) => ({
      ...state,
      value: {
        ...state.value,
        title: arg.title,
        description: arg.description,
        position: arg.position,
        type: "warning",
      },
    }))
  },
  info: (arg) => {
    set((state) => ({
      ...state,
      value: {
        ...state.value,
        title: arg.title,
        description: arg.description,
        position: arg.position,
        type: "info",
      },
    }))
  },
}))
