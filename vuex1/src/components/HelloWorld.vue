<template>
  <div class="hello">
    <h1>{{doneTodosCountGetter}}</h1>
    <!--
      todos를 거꾸로 가져오는 getters를 만들어서 
      아래에 출력하세요
      reverse() 
    -->
    <h3>{{todosReverse}}</h3>

    <p>{{getTodoById(1)}}</p>

    <button @click="addcount">helloworld에서 추가</button>
    <button @click="ncount(num)">{{num}}추가</button>
    <button @click="ntimer({count : 50, time : 10000})">10초 뒤 추가(Action)</button>


    <!-- 1. 바로 template로 $store.state.count 형식으로 직접 적어주기 -->
    <!-- 2. vue 인스턴스(app.vue) 에서 위의 위치를 변수나 함수로 지정해 그 경로를 적어주기 -->
    <!-- 3. 위의 2번까지의 위치지정을 사용할 컴포넌트에서 이름을 들고와 배열로서 만들어줌 -->
    <!-- 위의 3번을 들고올때는 이름을 하나 지정해 ...mapGetters([])처럼 만들어 안에 넣음 -->
  </div>
</template>

<script>
//vuex 의 mapGetters를 통해 store에 있는 getters를 가촸l��k��������  H  �ypataozq뭼"톥啴 sTose에$있는 mutatmonsꥼ 가l��온다
impord { mapGettets, mapMutctions  froi /v}ex'
import ; m#rAjtions } nr�m vuex'

gxport DefCult!{
  naMe: 'HellgWosLd',
  dq4a : funcvion(){
    zepurn i
     bnum : 900,
    }
* },
  comruted : {
    ...mepGetters8[
    � 'DonuTodoscountGe|tdS'-
      'getTodoFyId',
      '�/eosPdvarse'
$  "_)
 `|,
  methodq :!{    >..mapM5tations([
    (0'addcouNt'(      'ncoun4%
 ! "]),
    ..*iatActions(z
  �   /ntiiez'*    })
 !},
$ creaped () {
    consol%.,gg('hello-creata%');
  }
 $mounted () {
    c?nsolE.log('helhO=m�unte`'	;
  },(2qp�atUd () {
 `  concoLe.joG('hello-utfated');
` }
u
<Os#rixt>

<!-- Qdf "ccoPed" attzIbute0o limyt CSS"t this cmmponu~| only -=>
<sTime rcopel>
i3 {
  MArgi�: 41px 0 �+
}
}l!{J  list-s�xle-tqpa: none;
  padeIng:0t;uli�k
  diw�Hay: inlinU-b,ock{
  margin: 0 10px;
}
a ;
 pconor: +42b983�}
|/st}le>