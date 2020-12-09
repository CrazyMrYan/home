<template>
  <div class="md-box">
    <div class="title">
      {{markDownConetnt}}
    </div>
    <div class="catalogue">
      <p v-for="(item ,index) in mdList" @click="switchTo(item)" :class="markDownConetnt==item.name?'font-color':''" :key="item+index">
        {{item.name}}
      </p>
    </div>
    <div class="md-content">
      <component :is="resultComps[markDownConetnt]"></component>
    </div>
  </div>
</template>

<script>
import mdListData from './tool/getDocDir'
export default {
  data() {
    return {
       resultComps:mdListData.resultComps,
       markDownConetnt:'README',
       mdList:mdListData.tmepListDatas
    };
  },
  methods:{
    switchTo(n){
      this.markDownConetnt = n.name
      history.replaceState(null, "",'/#/article?mdname='+n.name);
    }
  },
  mounted(){
    this.markDownConetnt = this.$route.query.mdname || 'README'
    history.replaceState(null, "",'/#/article?mdname='+ this.markDownConetnt);
  }
};
</script>
<style lang='scss' scoped>
.title{
  width: 100%;
  height: 50px;
  position: fixed;
  top: 0;
  left: 0;
  text-align: center;
  font-weight: 600;
  font-size: 18px;
  line-height: 50px;
  background: #fff;
  display: none;
}
.catalogue{
  width: 200px;
  position: fixed;
  left: 50px;
  top: 100px;
  padding: 10px;
  box-sizing: border-box;
  border-radius: 10px;
    transition: all 1s;
  opacity: 0.3;
  p{
    cursor: pointer;
  }

  &:hover{
    opacity: 1;
  }
}
.md-box {
  padding: 50px;
  min-height: 100%;
  background: #fff;
  .md-content {
    width: 40vw;
    margin: 0 auto;
    img {
      max-width: 40vw;
    }
  }
}
.md-content img {
  max-width: 100%;
}
img {
  width: 100% !important;
}
.font-color{
  color: #1da57a;
  font-weight: 600;
}
</style>