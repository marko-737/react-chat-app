import { doc, getDoc } from "firebase/firestore";
import { create } from "zustand";
import { db } from "./firebase";

const useUserStore = create((set) => ({
  currentUser: null,
  isLoading: true,
  isLoggedIn: JSON.parse(localStorage.getItem("isLoggedIn")) || false,
  setLoggedIn: (value) => {
    localStorage.setItem("isLoggedIn", JSON.stringify(value));
    set({ isLoggedIn: value });
  },
  fetchUserInfo: async (uid) => {
    if (!uid) return set({ currentUser: null, isLoading: false });

    try {
      const docRef = doc(db, "users", uid);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        set({ currentUser: docSnap.data(), isLoading: false });
      } else {
        set({ currentUser: null, isLoading: false });
      }
    } catch (error) {
      console.log(error);
      return set({ currentUser: null, isLoading: false });
    }
  },
}));

export default useUserStore;
