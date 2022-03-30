import { createStore } from "vuex";
import router from "../router";
import { auth } from "../firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "@firebase/auth";

export default createStore({
  state: {},
  mutations: {
    SET_USER(state, user) {
      state.user = user;
    },
    CLEAR_USER(state) {
      state.user = null;
    },
  },
  actions: {
    async login({ commit }, details) {
      const { email, password } = details;

      try {
        await signInWithEmailAndPassword(auth);
      } catch (error) {}
    },
    async register({ commit }, details) {},
    async logut({ commit }) {},
  },
});
