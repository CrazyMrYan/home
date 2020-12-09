<template>
  <a-layout>
    <a-layout-header id="header">
      <Header />
    </a-layout-header>
    <a-layout-content id="content">
      <router-view />
    </a-layout-content>
    <a-layout-footer id="footer">
      <Footer />
    </a-layout-footer><GoBack el="content"/>
  </a-layout>
</template>

<script>
import GoBack from '../../components/backTop'
import Header from "../components/header";
import Footer from "../components/footer";
export default {
  components: { Header, Footer, GoBack},
};
</script>

<style lang='scss' scoped>
#content {
  height: 85vh;
  overflow-y: auto;
  overflow-x: hidden;
  &::-webkit-scrollbar {
    /*滚动条整体样式*/
    width:4px; /*高宽分别对应横竖滚动条的尺寸*/
    height: 1px;
    z-index: 999;
  }
  &::-webkit-scrollbar-thumb {
    /*滚动条里面小方块*/
    border-radius: 4px;
    background-color: #1DA57A;
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