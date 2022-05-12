<template>
  <div class="write">
    <h1>글을 작성하는 공간입니다</h1>
    <textarea v-model="memo" cols="30" rows="10">
    </textarea>
    <button @click="addmemoMu">완료</button>
  </div>
</template>

<script>
export default {
  data : function() {
    return {
      memo : '',
    }
  },
  methods : {
    addmemo : function() {
      // memo값을 board에 추가하는 일을 함
      const id = this.$store.state.board.legnth +1;
      this.$store.state.board.push({id : id, memo : this.memo})
    },
    addmemoMu : function() {
      this.$store.commit('addmemo',this.memo)
      this.$router.push('/');
    }
  }
}
</script>
