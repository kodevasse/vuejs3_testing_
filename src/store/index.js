import { createStore, createLogger } from "vuex";
// import cart from "./modules/cart";
// import products from "./modules/products";

const debug = process.env.NODE_ENV !== "production";

const store = createStore({
  state: {
    title: "vuex store test",
    notes: [],
  },
  getters: {},
  mutations: {
    SAVE_NOTE(state, title) {
      state.notes.push(title);
    },
  },
  actions: {},
});

export default store;
// export default createStore({
//   modules: {
//     cart,
//     products,
//   },
//   strict: debug,
//   plugins: debug ? [createLogger()] : [],
// });
