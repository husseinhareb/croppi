import { create } from "zustand";

//Store
const useStore = create((set) => ({
  mode: "light ",
  setMode: (newMode) => {
    set((state) => ({
      ...state,
      mode: newMode,
    }));
  },
  cropDim: { x1: 0, x2: 0, y1: 0, y2: 0 },
  setCropDim: (newCropDim) => {
    set((state) => ({
      ...state,
      cropDim: newCropDim,
    }));
  },
  image: "light ",
  setImage: (newImage) => {
    set((state) => ({
      ...state,
      image: newImage,
    }));
  },
}));

//Selectors
export const useMode = () => useStore((state) => state.mode);
export const useSetMode = () => useStore((state) => state.setMode);
export const useCropDim = () => useStore((state) => state.cropDim);
export const useSetCropDim = () => useStore((state) => state.setCropDim);
export const useImage = () => useStore((state) => state.image);
export const useSetImage = () => useStore((state) => state.setImage);