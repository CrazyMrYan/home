<template>
  <div class="header">
    <img
      src="http://crazy-x-lovemysoul-x-vip.img.abc188.com/images/logo.png"
      alt=""
      srcset=""
    />
    <a-menu v-model="current" mode="horizontal" theme="light">
      <template v-for="item in navigationData">
        <a-sub-menu
          v-if="item.children && item.children.length > 0"
          v-bind:key="item.label"
        >
          <span slot="title" class="submenu-title-wrapper">
            <a-icon type="setting" />{{ item.label }}
          </span>
          <a-menu-item
            v-for="child in item.children"
            @click="clickMenuItem(child)"
            :key="child.key"
          >
            {{ child.label }}
          </a-menu-item>
        </a-sub-menu>
        <a-menu-item v-else @click="clickMenuItem(item)" :key="item.key">
          {{ item.label }}
        </a-menu-item>
      </template>
    </a-menu>

    <!-- GitHub Icon -->
    <a
      href="https://github.com/CrazyMrYan"
      class="github-corner"
      aria-label="View source on GitHub"
      ><svg
        width="70"
        height="70"
        viewBox="0 0 250 250"
        style="
          fill: #151513;
          color: #fff;
          position: absolute;
          top: 0;
          border: 0;
          right: 0;
        "
        aria-hidden="true"
      >
        <path d="M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z"></path>
        <path
          d="M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2"
          fill="currentColor"
          style="transform-origin: 130px 106px"
          class="octo-arm"
        ></path>
        <path
          d="M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z"
          fill="currentColor"
          class="octo-body"
        ></path></svg
    ></a>
  </div>
</template>
<script>
import mdListData from "../../views/article/tool/getDocDir";

export default {
  data() {
    return {
      current: [],
      navigationData: [
        {
          label: "主页",
          link: "/home",
          key: "home",
          childrens: [],
        },
        {
          label: "关于本站",
          link: "/about",
          key: "about",
          childrens: [],
        },

        {
          label: "博客文章",
          link: "/article",
          key: "article",
          childrens: [...mdListData.tmepListDatas],
        },
      ],
    };
  },
  methods: {
    clickMenuItem(item) {
      if (location.hash.replace("#", "") != item.link) {
        this.$router.push({
          path: item.link,
        });
      }
    },
    initNavData() {
      let el = document.getElementById("menu");
      el.innerHTML = "";
      this.navigationData.forEach((item) => {
        let child = document.createElement("h2");
        child.textContent = item.label;
        child.className =
          location.hash.replace("#", "") === item.link ? "checked" : "";
        child.addEventListener(
          "click",
          () => {
            this.clickMenuItem(item);
          },
          false
        );
        el.appendChild(child);
      });
    },
  },
  mounted() {
    this.initNavData();
  },
  created() {
    let hash, str;
    if (location.hash.replace("#/", "")) {
      hash = location.hash.match(/\#\/.*?\?/g);
      if (!hash) str = location.hash.replace("#/", "");
      else str = hash[0].replace("#/", "").replace("?", "");
    }
    this.current[0] = str || "home";
  },
};
</script>

<style lang="scss" scoped>
.subpage {
  color: #000;
}
.header {
  display: flex;
  img {
    width: 70px;
  }
  ul {
    flex: 1;
    display: flex;
    line-height: 70px;
  }
}
</style>
<!-- GitHub Icon -->
<style>
.github-corner:hover .octo-arm {
  animation: octocat-wave 560ms ease-in-out;
}
@keyframes octocat-wave {
  0%,
  100% {
    transform: rotate(0);
  }
  20%,
  60% {
    transform: rotate(-25deg);
  }
  40%,
  80% {
    transform: rotate(10deg);
  }
}
@media (max-width: 500px) {
  .github-corner:hover .octo-arm {
    animation: none;
  }
  .github-corner .octo-arm {
    animation: octocat-wave 560ms ease-in-out;
  }
}
</style>