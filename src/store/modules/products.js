// initial state
const state = () => ({
  all: ["tecno"],
  title: "Vuex testing",
});

// getters
const getters = {};

// actions
const actions = {
  //   async getAllProducts({ commit }) {
  //     const products = await shop.getProducts();
  //     commit("setProducts", products);
  //   },
};

// mutations
const mutations = {
  //   setProducts(state, products) {
  //     state.all = products;
  //   },
  //   decrementProductInventory(state, { id }) {
  //     const product = state.all.find((product) => product.id === id);
  //     product.inventory--;
  //   },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
