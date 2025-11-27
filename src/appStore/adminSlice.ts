import type {StateCreator} from 'zustand';
import type {AppState} from './appStore';

export type AdminSliceType = {
  user: unknown;
  setUser: (user: unknown) => void;
  isAdmin: boolean;
  setIsAdmin: (isAdmin: boolean) => void;
};

export const createAdminSlice: StateCreator<
  AppState,
  [['zustand/immer', never]],
  [],
  AdminSliceType
> = set => ({
  user: null,
  isAdmin: false,
  setUser: (user: unknown) => {
    set(state => {
      state.user = user; // ✅ mutate directly — immer handles it
    });
  },
  setIsAdmin: (isAdmin: boolean) => {
    set(state => {
      state.isAdmin = isAdmin; // ✅ mutate directly — immer handles it
    });
  },
});
