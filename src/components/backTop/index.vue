<script>
export default {
  props: {
    el: {
      type: String,
      default: "body",
    },
    icon: {
      type: String,
      default: "🡱",
    },
    size: {
      type: String,
      default: "small",
    },
    position: {
      type: Object,
    },
  },
  render(h) {
    return h(
      "div",
      {
        class: ["rollback-top"],
        style: {
          display: !!this.rollbackShow ? undefined : "none",
          bottom: this.position ? this.position.bottom : "8.5vh",
          right: this.position ? this.position.right : "50px",
        },
        on: {
          click: this.rollback,
        },
      },
      [
        h(
          "span",
          {
            class: "icon",
          },
          this.icon
        ),
      ]
    );
  },
  data() {
    //这里存放数据
    return {
      rollbackShow: false,
    };
  },
  mounted() {
    document
      .getElementById(this.el)
      .addEventListener("scroll", this.handleScroll, true);
  },
  methods: {
    handleScroll() {
      let scrolltop =
        document.getElementById(this.el).scrollTop ||
        document.getElementById(this.el).scrollTop;
      scrolltop > 30 ? (this.rollbackShow = true) : (this.rollbackShow = false);
    },
    // 点击返回
    rollback() {
      let top =
        document.getElementById(this.el).scrollTop ||
        document.getElementById(this.el).scrollTop;
      // 实现滚动效果
      const timeTop = setInterval(() => {
        document.getElementById(this.el).scrollTop = document.getElementById(
          this.el
        ).scrollTop = top -= 50;
        if (top <= 0) {
          clearInterval(timeTop);
        }
      }, 10);
    },
  },
};
</script>
<style scoped>
.rollback-top {
  text-align: center;
  position: fixed;
  right: 50px;
  bottom: 8.5vh;
  width: 60px;
  height: 60px;
  cursor: pointer;
  border-radius: 50%;
  background: white;
  color: #fff;
  background: rgba(0, 0, 0, 0.1);
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
.icon {
  font-size: 30px;
  display: block;
  line-height: 50px;
  text-align: center;
}
.rollback-top:hover {
  transition: 0.5s;
  background: rgba(0, 0, 0, 0.5);
}
</style>