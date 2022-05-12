import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    board: [
      { id: 1, memo: "첫번째 작성된 내용입니다" },
      { id: 2, memo: "두번째 작성된 내용입니다" },
    ],
  },
  getters: {}, // getters는 state의 값을 변경해서 리턴해주는것
               // mutation은 state의 값을 직접 바꿔버림
  mutations: {
    addmemo: function (state, memo) {
      // memo값을 board에 추가하는 일
      // memo값은 store에서 추가할수 없기 때문에 받아와야한다.
      const id = state.board.length + 1;
      state.board.push({ id: id, memo: memo });
    },
  },
  actions: {},
  modules: {},
});