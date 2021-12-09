export const state = () => ({
  isLogin: false,
});

export const mutations = {
  setIsLogin(state, isLogin) {
    state.isLogin = isLogin;
  },
};
