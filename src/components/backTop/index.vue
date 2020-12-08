<template>
  <div class="gotop" v-show="gotop" @click="toTop">
    <a-icon type="vertical-align-top" />
  </div>
</template>
<script>
export default {
  data() {
    //这里存放数据
    return {
      gotop: false,
    };
  },
  mounted() {
    document
      .getElementById("content")
      .addEventListener("scroll", this.handleScroll, true);
  },
  methods: {
    handleScroll() {
      let scrolltop =
        document.getElementById("content").scrollTop ||
        document.getElementById("content").scrollTop;
      scrolltop > 30 ? (this.gotop = true) : (this.gotop = false);
    },
    toTop() {
      console.log(1);
      let top =
        document.getElementById("content").scrollTop ||
        document.getElementById("content").scrollTop;
      // 实现滚动效果
      const timeTop = setInterval(() => {
        document.getElementById("content").scrollTop = document.getElementById(
          "content"
        ).scrollTop = top -= 50;
        if (top <= 0) {
          clearInterval(timeTop);
        }
      }, 10);
    },
  },
};
</script>
<style lang='scss' scoped>
.gotop {
  text-align: center;
  position: fixed;
  right: 50px;
  bottom: 8.5vh;
  width: 60px;
  height: 60px;
  cursor: pointer;
  padding: 10px;
  border-radius: 50%;
  background: white;
  color: #fff;
  background: rgba(0, 0, 0, 0.1);
  i {
    font-size: 30px;
    display: block;
    line-height: 50px;
    text-align: center;
  }
  &:hover {
    transition: 0.5s;
    background: rgba(0, 0, 0, 0.5);
  }
}
</style>
