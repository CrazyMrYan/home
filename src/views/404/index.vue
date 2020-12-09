<template>
  <div class="error">
    <div class="MbText">
      <h2 class="">404 页面找不到咯~</h2>
      <p>
          很抱歉，您所请求的资源未找到! <br> 将在 {{ time == 10 ? time : "0" + time }} 秒后自动返回上个页面
        </p>
    </div>
    <div class="img404">
      <img src="../../images/404.gif" alt="" srcset="" />
    </div>
    <div class="explain">
      <h2>404 页面找不到咯~</h2>
      <br />
      <p>
        很抱歉，您所请求的资源未找到，您可以在上方导航栏中跳转至其他页面，或者在右下角点击返回上一个页面!
      </p>
      <p class="autoGoBack">
        将在 {{ time == 10 ? time : "0" + time }} 秒后自动返回上个页面
      </p>
      <div class="goBack" @click="goBack">
        <svg
          t="1607322228969"
          class="icon"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="1921"
          id="mx_n_1607322228971"
          data-spm-anchor-id="a313x.7781069.0.i8"
          width="80"
          height="80"
        >
          <path
            d="M122.17 442.56H869.8a73.54 73.54 0 0 1 9.25 0.6l-8-1.08a64.15 64.15 0 0 1 14.47 4l-7.26-3.08a61.65 61.65 0 0 1 9.43 5c6.16 4-4.51-4.08-0.81-0.81 1.32 1.16 2.65 2.3 3.9 3.54s2.38 2.56 3.54 3.87c3.29 3.69-4.83-7-0.82-0.85a59.51 59.51 0 0 1 4.93 9.3l-3-7.22a59.79 59.79 0 0 1 3.75 14.22l-1.08-8c1.33 11.8 0.43 24.1 0.43 35.94v243.22c0 14.18 1.16 28.94-0.43 43.07l1.08-8a59.87 59.87 0 0 1-3.75 14.23l3-7.23a59.61 59.61 0 0 1-4.93 9.31c-4 6.12 4.11-4.54 0.82-0.86-1.16 1.31-2.3 2.63-3.54 3.87s-2.58 2.38-3.9 3.54c-3.7 3.27 7-4.83 0.81-0.8a63.47 63.47 0 0 1-9.43 5l7.22-3a64.15 64.15 0 0 1-14.47 4l8-1.08c-8.13 1.05-16.57 0.59-24.75 0.59H280c-27.48 0-55-0.45-82.49 0h-1.14c-15.82 0-31 13.92-30.24 30.25s13.29 30.25 30.24 30.25h674.12c38.65-0.37 73.06-25.1 84.81-62.06 3.75-11.81 3.67-24 3.67-36.18v-276c0-7 0.06-14 0-21-0.34-38.47-26-71.82-62.49-83.25-15.86-5-33.25-3.8-49.69-3.8H122.17c-15.83 0-31 13.91-30.25 30.24s13.29 30.25 30.25 30.25z"
            fill="#707070"
            p-id="1922"
            data-spm-anchor-id="a313x.7781069.0.i9"
            class="selected"
          ></path>
          <path
            d="M293.62 168.4l-74.6 76-118.1 120.27-27.28 27.78a30.79 30.79 0 0 0 0 42.77l77.92 81 124 129 28.18 29.31c11 11.43 31.88 11.88 42.78 0 11.26-12.27 11.72-30.58 0-42.77l-77.92-81-124-129-28.18-29.32v42.77l74.6-76L309.12 239l27.27-27.78c11.1-11.3 12.12-31.66 0-42.78s-30.93-12.06-42.77 0z"
            fill="#1DA57A"
            p-id="1923"
            data-spm-anchor-id="a313x.7781069.0.i7"
            class=""
          ></path>
        </svg>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  //方法集合
  methods: {
    goBack() {
      this.$router.go(-1);
      setTimeout(() => {
        location.reload();
      }, 100);
    },
  },
  data() {
    return {
      time: 10,
    };
  },
  mounted() {
    setInterval(() => {
      this.time != 0 ? this.time -= 1 : this.goBack()
    }, 1000);
  },
};
</script>
<style lang='scss' scoped>
.MbText{
  position: fixed;
  width: 100%;
  text-align: center;
  display: none;
  position: absolute;
}
.error {
  height: 100%;
  background: #fff;
  display: flex;
  .img404 {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding-right: 100px;
    box-sizing: border-box;
    img {
      width: 400px;
      height: 450px;
    }
  }
  .explain {
    flex: 1;
    padding-top: 200px;
    padding-right: 50px;
    box-sizing: border-box;
    h2 {
      font-weight: 600;
      font-size: 50px;
      text-indent: 1em;
      padding: 0;
      margin: 0;
    }
    p {
      font-size: 20px;
      text-indent: 2em;
    }
    .goBack {
      width: 100px;
      height: 100px;
      position: absolute;
      bottom: 8vh;
      right: 1vw;
      cursor: pointer;
    }
    .autoGoBack {
      color: #ccc;
      text-indent: unset;
    }
  }
}
</style>