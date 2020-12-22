<template>
  <a-layout>
    <a-layout-header id="header">
      <Header />
    </a-layout-header>
    <button class="toggle-button">☰</button>
 <!-- @touchstart="touchStart"
      @touchmove="touchMove"
      @touchend="touchEnd" -->
    <a-layout-content
      id="content"
    >
      <router-view ref="contentRef" />
    </a-layout-content>
    <a-layout-footer id="footer"> <Footer /> </a-layout-footer
    ><GoBack el="content" />
  </a-layout>
</template>

<script>
import GoBack from "../../components/backTop";
import Header from "../components/header";
import Footer from "../components/footer";
export default {
  components: { Header, Footer, GoBack },
  data() {
    return {
      startX: 0, 
      moveX: 0,
      endX: 0, 
      disX: 0,
    };
  },
  methods: {
    touchStart(ev) {
      ev = ev || event;
      ev.preventDefault();
      if (ev.touches.length == 1) {
        this.startX = ev.touches[0].clientX;
      }
    },
    touchMove(ev) {
      ev = ev || event;
      ev.preventDefault();
      if (ev.touches.length == 1) {
        //滑动时距离浏览器左侧的距离
        this.moveX = ev.touches[0].clientX;
        //实时的滑动的距离-起始位置=实时移动的位置
        this.disX = this.moveX - this.startX;
      }
    },
    touchEnd(ev) {
      ev = ev || event;
      ev.preventDefault();
      if (ev.changedTouches.length == 1) {
        let endX = ev.changedTouches[0].clientX;
        this.disX = endX - this.startX;
        if (
          content.offsetWidth - this.disX > content.offsetWidth / 4 &&
          content.offsetWidth / 4 < this.disX
        ) {
          slideout.toggle();
        }
      }
    },
  },
  mounted() {
    document
      .querySelector(".toggle-button")
      .addEventListener("click", function () {
        slideout.toggle();
      });
    // if (this.$isMobile()) {
    //   document
    //     .querySelector("#content")
    //     .addEventListener("touchstart", function (event) {
    //       slideout.toggle();
    //       console.log(event);
    //     });
    // }
  },
};
</script>

<style lang='scss' scoped>
#content {
  height: 85vh;
  overflow-y: auto;
  overflow-x: hidden;
  &::-webkit-scrollbar {
    /*滚动条整体样式*/
    width: 4px; /*高宽分别对应横竖滚动条的尺寸*/
    height: 1px;
    z-index: 999;
  }
  &::-webkit-scrollbar-thumb {
    /*滚动条里面小方块*/
    border-radius: 4px;
    background-color: #1da57a;
    background-image: -webkit-linear-gradient(
      45deg,
      rgba(255, 255, 255, 0.2) 25%,
      transparent 25%,
      transparent 50%,
      rgba(255, 255, 255, 0.2) 50%,
      rgba(255, 255, 255, 0.2) 75%,
      transparent 75%,
      transparent
    );
  }
  &::-webkit-scrollbar-track {
    /*滚动条里面轨道*/
    box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
    background: #ededed;
    border-radius: 10px;
  }
}
#header,
#footer {
  height: 7.5vh;
}
</style>