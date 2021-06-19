export default {
  actions: {
    async fetchUsers(ctx, { page, order }) {
      const res = await fetch(
        `https://api.github.com/search/users?q=type:user&page=${page}&per_page=10&sort=repositories&order=${order}`
      ).catch((e) => console.log(e));

      const result = await res.json();
      const users = result.items;

      ctx.commit("updateUsers", users);
    },
  },
  mutations: {
    updateUsers(state, users) {
      state.users = users;
    },
  },
  state: {
    users: [],
  },
  getters: {
    allUsers: (state) => {
      return state.users;
    },
  },
};
