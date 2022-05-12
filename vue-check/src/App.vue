<template>
  <div id="app">
    <h1>{{$store.state.count}}</h1>
    <h3>{{listReverse}}</h3>
    <button @click="addcount">1씩 증가합니다</button>
    <button @click="timecount(5000)">5초뒤 1증가합니다</button>
    <HelloWorld/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  computed : {
    listReverse() {
      return this.$store.getters.listReverse
    }
  },
  methods : {
    addcount() {
      this.$store.commit('addcount')
    },
    timecount(time) { //위의 5000을 time이란 값으로 받아옴
      // dispatch로 actions를 들고올수있음
      // dispatch나 commit을 이용해서 값을 전달할때 하나만 전달가능
      // 여러개를 전달하고플때는 객체로 만들어서 전달
      this.$store.dispatch("timecount", time) 
    }
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
