<template>
  <div class="md-box">
    <div class="md-content">
      <md></md>
    </div>
  </div>
</template>

<script>
import md from "../../doc/README.md";
export default {
  components: { md },
  data(){
    return{
    }
  }
};
</script>
<style lang='scss' scoped>
.md-box{
  padding: 50px;
  min-height: 100%;
  background: #fff;
  .md-content{
    width: 40vw;
    margin: 0 auto;
    img{
      max-width: 40vw;
    }
  }
}
.md-content img{
  max-width: 100%;
}
img{
  width: 100%  !important;
}
</style>