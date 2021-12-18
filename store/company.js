export const state = () => ({
  company: {},
});

export const mutations = {
  setCompany(state, company) {
    state.company = company;
  },
};
