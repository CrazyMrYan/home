<template>
  <div class="md-box">
    <div class="title" @click="getShowArticleLists()">
      {{ markDownConetnt }}
          <transition
      name="custom-classes-transition"
      enter-active-class="animated tada"
      leave-active-class="animated bounceOutRight"
    >
     <div class="ArticleLists" v-if="showArticleLists">
        <p
          v-for="(item, index) in mdList"
          @click.stop="switchTo(item)"
          :class="markDownConetnt == item.name ? 'font-color' : ''"
          :key="item + index"
        >
         [{{index}}]  {{ item.name }}
        </p>
       <div class="close"><a-icon @click.stop="showArticleLists = false" type="close" /></div>

      </div>
    </transition>
    </div>
    <transition
      name="custom-classes-transition"
      enter-active-class="animated tada"
      leave-active-class="animated bounceOutRight"
    >
      <div v-if="show" class="catalogue">
        <p
          v-for="(item, index) in mdList"
          @click="switchTo(item)"
          :class="markDownConetnt == item.name ? 'font-color' : ''"
          :key="item + index"
        >
          {{ item.name }}
        </p>
      </div>
    </transition>

    <div class="md-content">
      <component :is="resultComps[markDownConetnt]"></component>
    </div>
  </div>
</template>

<script>
import mdListData from "./tool/getDocDir";
export default {
  data() {
    return {
      resultComps: mdListData.resultComps,
      markDownConetnt: "README",
      mdList: mdListData.tmepListDatas,
      show:false,
      doubleClick:0,
      showArticleLists:false
    };
  },
  methods: {
    getShowArticleLists() {
        this.doubleClick++;
        setTimeout(()=> {
            this.doubleClick = 0;
        }, 500);
        if (this.doubleClick > 1) {
          console.log(1)
            this.showArticleLists = !this.showArticleLists
            // this.$emit('rollback')
            this.doubleClick = 0;
        }
    },
    switchTo(n) {
      this.markDownConetnt = n.name;
      // 改为push 带参数
      this.$router.push({
        path: "/article",
        query: {
          mdname: n.name,
        },
      });
    },
  },
  mounted() {
    this.markDownConetnt = this.$route.query.mdname || "README";
    this.$nextTick(()=>{
      setTimeout(()=>{
        this.show=true
      },1500)
    })
    
  },
};
</script>
<style lang='scss' scoped>
.ArticleLists {
  background: #fff;
  > p{
    margin: 0;
    padding: 0;
    height: 2em;
    line-height: 2em;
    text-align: left;
    padding-left: 1em;
    }
    padding:1em 0 0 0;
    box-shadow: rgba(0, 0, 0, 0.55) 0px 3px 5px
}
.close{
  height: 50px;
  line-height: 50px;
  padding-top: 10px;
  i{
    display: block;
    width: 40px;
    height: 40px;
    margin: 0 auto;
  }
}
.title {
  width: 100%;
  height: 50px;
  position: fixed;
  border-bottom: 1px #efefef solid;
  top: 0;
  left: 0;
  text-align: center;
  font-weight: 600;
  font-size: 18px;
  line-height: 50px;
  background: #fff;
  display: none;
}
.catalogue {
  width: 200px;
  position: fixed;
  left: 50px;
  top: 100px;
  padding: 10px;
  box-sizing: border-box;
  border-radius: 10px;
  transition: all 1s;
  opacity: 0.3;
  p {
    cursor: pointer;
  }

  &:hover {
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
.font-color {
  color: #1da57a;
  font-weight: 600;
}
</style>