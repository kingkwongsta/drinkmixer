import { create } from "zustand";

const userStore = create((set) => ({
  userFlavor: "Sweet",
  userLiquor: "",
  userMood: "",
  drinkRecipe: "",
  drinkImage: "",
  questionIndex: 0,
  setUserFlavor: (flavor) => set((state) => ({ ...state, userFlavor: flavor })),
  setUserLiquor: (liquor) => set((state) => ({ ...state, userLiquor: liquor })),
  setUserMood: (mood) => set((state) => ({ ...state, userMood: mood })),
  setDrinkRecipe: (recipe) =>
    set((state) => ({ ...state, drinkRecipe: recipe })),
  setDrinkImage: (image) => set((state) => ({ ...state, drinkImage: image })),
  setQuestionIndex: (amount) =>
    set((state) => ({
      ...state,
      questionIndex: state.questionIndex + amount,
    })),
}));

export default userStore;
