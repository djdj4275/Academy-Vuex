import Vue from "vue";
import Vuex from "vuex";
import moduleA from "./module/moduleA.js";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    // 값을 저장해서 가져오는 공간
    count: 10,
    list: [
      { id: 1, memo: "a" },
      { id: 2, memo: "b" },
    ],
    name: ["홍길동", "성춘향", "그린"],
    todos: [
      { id: 1, text: "...", done: true },
      { id: 2, text: "...", done: false },
    ],
  },
  getters: {
    doneTodosCountGetter: function (state) {
      // 동일한 형식으로 사용할수 있다
      // filter( function(배열의 요소를 담는 변수) { return 참일때 요소값을 배열에 추가 } )
      return state.todos.filter((todo) => todo.done).length;
    },
    todosReverse: function (state) {
      return state.todos.reverse();
    },
    // todo의 id값을 통해 todo객체 반환
    getTodoById: (state) => (id) => {
      return state.todos.find((todo) => todo.id === id);
    },
  },
  mutations: {
    // data의 methods와 비슷한 역할 - 동기적으로 실행
    // 동기식 처리 : 순차적,요청한 결과가 한자리에서 동시에 실행
    // 따라서 위에서 순서대로 실행하기에 앞의 수식이 처리되지 않으면 밑의 수식이 처리되지 않음
    // 반드시 앞의 명령어사 수행되어야 실행된다, 동시에 실행되기에 타 작업이 실행되고 나중에 결과가 나올수있음
    // getters 는 return으로 값을 돌려주기에 원래 값은 그대로 두고 리턴값이 다른것
    // mutations는 원래값을 바꾸는 역할
    addcount: function (state) {
      state.count++;
    },
    subcount: function (state) {
      state.count--;
    },
    ncount: function (state, n) {
      state.count += n;
    },
  },
  actions: {
    // 비동기적으로 실행
    // 비동기식 처리 : 요청한 그 자리에서 결과가 주어지지 않음
    // 병렬적으로 실행되기때문에 위의 수식들과는 연관없이 각자 처리됨
    // 예시로는 DOM의 이벤트와 타이머 함수등 (순서와 관계없이 각자 실행)
    addcount(context) {
      context.commit('addcount')
      // mutation의 메소드를 들고와 상태변화(state)를 추적할수있다.
      // 위의 mutation의 addcount함수를 들고와서 실행
      // addcount를 들고와서 context라는 매개변수로서 들고있음
    },
    timer : function (context) { // 비동기로 실행
      setTimeout( function(){
        context.commit('addcount');
      }, 1000 )
      // timer 함수는 setTimeout을 함수로서 실행킨다 (1초 뒤에 addcount 들고와 실행)
    },
    ntimer : function (context, time) { // 비동기로 실행 + 인자값받아오기
      setTimeout( function(){ // mutation의 메소드를 commit할때 인자값 전달하고 싶다면
        // , 를 통해서 값을 같이 보내준다.
        context.commit('ncount', time.count);
      }, time.time );
      // timer 함수는 setTimeout을 함수로서 실행킨다 (1초 뒤에 addcount 들고와 실행)
    },
    timersecond : function (context) {
      setInterval( function() {
        context.commit("addcount");
      }, 1000)
    }
  },
  modules: { //moduleA안에 있는 state,mutation등등을 현재 state,muta..등등에 추가한단의미
    a : moduleA
  },
});