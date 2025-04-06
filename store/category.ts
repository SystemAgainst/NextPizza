import { create } from "zustand/react";

interface IState {
    activeId: number;
    setActiveId: (activeId: number) => void;
}

export const useCategoryStore = create<IState>((set) => ({
    activeId: 1,
    setActiveId: (activeId: number) => set({ activeId }),
}));