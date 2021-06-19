export default {
  actions: {
    async fetchUser(ctx, user) {
      const res = await fetch(`https://api.github.com/search/users?q=${user}`);

      const user = await res.json();
      ctx.commit("updateUser", user);
      console.log(user);
    },
  },
  mutations: {
    updateUser(state, user) {
      state.user = user;
    },
  },
  state: {
    user: [],
  },
  getters: {
    searchUser: (state) => {
      return state.user;
    },
  },
};
