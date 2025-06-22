import { createStore } from "vuex";
import { db } from "./firebase";
import { ref, onValue, set, push } from "firebase/database";
import { auth } from "./firebase";
import { signOut } from "firebase/auth";

export default createStore({
  state() {
    return {
      user: null,
      balance: null,
      loading: true,
      pendingDeposits: [],
    };
  },

  mutations: {
    async logoutUser({ commit }) {
      await signOut(auth);
      commit("setUser", null);
    },
    setUser(state, user) {
      state.user = user;
      console.log(user);
    },

    setUserData(state, userData) {
      state.user = { ...state.user, ...userData };
    },
    balData(state, balData) {
      console.log(balData);
      state.balance = balData;
    },
    setPendingDeposits(state, deposits) {
      state.pendingDeposits = deposits;
    },
    addPendingDeposit(state, deposit) {
      state.pendingDeposits.push(deposit);
    },
  },
  actions: {
    async logoutUser({ commit }) {
      await signOut(auth);
      commit("setUser", null);
    },

    setUser({ commit }, user) {
      commit("setUser", user);
    },

    fetchBalance({ commit, state }) {
      const user = state.user;
      if (user) {
        const balRef = ref(db, `users/${user.uid}/accountBalance`);
        onValue(balRef, (snapshot) => {
          const balData = snapshot.val();

          commit("balData", balData);
        });
      }
    },
    fetchUser({ commit, state }) {
      const user = state.user;
      if (user) {
        const userRef = ref(db, `users/${user.uid}`);
        onValue(userRef, (snapshot) => {
          const userData = snapshot.val();

          commit("setUserData", userData);
        });
        const depositsRef = ref(db, `users/${user.uid}/pendingDeposits`);

        onValue(depositsRef, (snapshot) => {
          const deposits = [];
          snapshot.forEach((childSnapshot) => {
            const deposit = childSnapshot.val();
            deposits.push({ ...deposit, id: childSnapshot.key });
          });
          commit("setPendingDeposits", deposits);
        });
      } else {
        commit("setUserData", {});
        commit("setPendingDeposits", []);
      }
    },
    async addDeposit({ commit, state }, { amount }) {
      const user = state.user;
      if (user) {
        const newDepositRef = push(
          ref(db, `users/${user.uid}/pendingDeposits`)
        );
        const depositId = newDepositRef.key;
        await set(newDepositRef, {
          amount,
          date: new Date().toISOString(),
          status: false,
        });
        commit("addPendingDeposit", {
          id: depositId,
          amount,

          date: new Date().toISOString(),
          status: false,
        });
        return depositId;
      }
      return null;
    },
  },
  getters: {
    user: (state) => state.user,
    balance: (state) => state.balance,
  },
});
