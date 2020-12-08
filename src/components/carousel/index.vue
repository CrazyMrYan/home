<template>
  <a-carousel arrows>
    <div
      slot="prevArrow"
      slot-scope="props"
      class="custom-slick-arrow"
      style="left: 10px; zindex: 99"
    >
      <a-icon type="up-circle" />
    </div>
    <div
      slot="nextArrow"
      slot-scope="props"
      class="custom-slick-arrow"
      style="right: 10px"
    >
      <a-icon type="right-circle" />
    </div>
    <div>
      <img class="carousel-img" src="../../images/svelte.jpg" alt="" srcset="" />
    </div>
    <div><h3>2</h3></div>
    <div><h3>3</h3></div>
    <div><h3>4</h3></div>
  </a-carousel>
</template>

<script>
//import name from 'url';

export default {
  //import引入的组件需要注入到对象中才能使用
  components: {},
  data() {
    //这里存放数据
    return {};
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {},
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {},
};
</script>
<style lang='scss' scoped>
.ant-carousel{
  background: radial-gradient(black, transparent);
}
.carousel-img{
  margin: 0 auto;
}
/* For demo */
.ant-carousel >>> .slick-slide {
  text-align: center;
  height: auto;
  line-height: 160px;
  overflow: hidden;
}

.ant-carousel >>> .custom-slick-arrow {
  width: 25px;
  height: 25px;
  font-size: 25px;
  color: #fff;
  background-color: rgba(31, 45, 61, 0.11);
  opacity: 0.3;
}
.ant-carousel >>> .custom-slick-arrow:before {
  display: none;
}
.ant-carousel >>> .custom-slick-arrow:hover {
  opacity: 0.5;
}

.ant-carousel >>> .slick-slide h3 {
  color: #fff;
}
.ant-carousel .slick-prev{
    background: #fff;
    z-index: 999999;
}
.ant-carousel .slick-prev{
    background: #fff;
}
</style>