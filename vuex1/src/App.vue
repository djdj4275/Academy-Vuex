<template>
  <div id="app">

    <!-- 모듈의 state값을 꺼내올때 : %store.state.모듈이름.값 -->
    <h3>{{$store.state.a.modulename}}</h3>
    <button @click="$store.commit('namechange')"></button>

    <!-- $store.state.count를 통해서 바로 값을 들고 올수 있다 -->
    <h1>카운터에서 가져온 값입니다 {{count}}</h1>
    <button @click="$store.commit('addcount')">추가</button>
    <button @click="addcount">추가</button>
    <button @click="addcountaction">추가(Action)</button>
    <button @click="timer">1초 뒤 추가(Action)</button>
    <button @click="ntimer({count : 50, time : 10000})">10초 뒤 추가(Action)</button>

    <!-- 버튼을 누르면 1초마다 count값이 1씩 증가하는 Action을 만들어서 추가해주세요 -->
    <!-- setInterval 이용 -->
    <button @click="timersecond">1초마다 1증가(Action)</button>

    <!-- 버튼을 누르면 1 감소하는 버튼을 추가해주세요 -->
    <button @click="$store.commit('subcount')">감소</button>

    <ul>
      <li 
      v-for="list in $store.state.list" 
      :key="list.id"
      >
        {{list.memo}}
      </li>
    </ul>

    <!-- index.js에 name : ['홍길동','성춘향','그린']을 추가하고 -->
    <!-- 아래에 computed를 이용하여 간략하게 만들어 이름을 출력하세요 -->
    <ul>
      <li 
      v-for="(name, i) in names"
      :key="i"
      >
        {{name}}
      </li>
    </ul>

    <p>{{ doneTodosCount }}</p>
    <p>{{doneTodoCountGetter}}</p>

    <hello-world></hello-world>

    <button id="btn">내용</button>

  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components : {
    HelloWorld 
  },
  computed : {
    //머스테치안의 내용이 길어지면 computed를 통해서 출력해줄수있다
    count :function(){
      return this.$store.state.count;
    },
    names : function() {
      return this.$store.state.name;
    },
    doneTodosCount : function(){
      return this.$store.state.todos.filter( todo => todo.done ).length
    },
    doneTodoCountGetter : function() {
      // store getters를 통해 계산 된 내용을 컴포넌트마다 가져와서 사용 
      return this.$store.getters.doneTodosCountGetter
    }
  },
  methods : { // mutation의 메소드는 commit을 통해 들고옴
    addcount : function() {
      this.$store.commit('addcount')
      // commit은 값을 들고오는것
    },
    addcountaction : function() {
      this.$store.dispatch('addcount')
      // vue 인스턴스의 action의 addcount 값을 dispatch로 불러와줌
    },
    timer : function() {
      this.$store.dispatch('timer')
    },
    ntimer : function(time) { // 위의 @click이벤트에서 받은 값을 time으로 받아와 보냄
      this.$store.dispatch('ntimer', time)
    },
    timersecond : function() {
      this.$store.dispatch('timersecond')
    }
  },
  created () {
    console.log('app-created');
  },
  mounted () { 
    // 이벤트나 타이머등의 비동기 함수를 사용할때 사용
    console.log('app-mounted');
    this.timersecond();
    // 자바스크립트를 사용해서 BOM에 접근가능
    window.alert("app-mounted");
    
    // 자바스크립트를 사용해서 돔(DOM)에 접근가능
    const btn = document.querySelector('#btn');
    btn.innerHTML = "이름 바꾸기"

    // js모듈을 만들어서 사용해줄수도 있다.
  },
  updated () {
    console.log('app-updated');
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
