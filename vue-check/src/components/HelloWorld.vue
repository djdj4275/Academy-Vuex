<template>
  <div class="hello">
    <h3>{{listReverse}}</h3>
  </div>
</template>

<script>
import {mapGetters, mapMutations, mapActions} from 'vuex'
// 각각 이름을 정해주어 getter,mutation,action을 들고와서 선언해 사용가능

export default {
  name: 'HelloWorld',
  computed : {
    ...mapGetters([
      'listReverse'
    ])
  },
  methods : {
    ...mapMutations([
      'addcount'
    ]),
    ...mapActions([
      'timecount'
    ])
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
