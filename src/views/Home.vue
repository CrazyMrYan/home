<template>
  <div class="home">
    <h2>
      我还没想好放啥东西，迷茫.jpg
    </h2>
  </div>
</template>
<script>
// 拉取该文件夹下所有文件信息
export default {
  data(){
    return{
    }
  },
  mounted() {
    this.$Msg("success", "test");
  },
};
</script>
<style scoped>
.home{
  height: 100%;
  width: 100%;
}
h2{
  text-align: center;
  font-size: 50px;
  line-height: 80vh;
    -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
</style>