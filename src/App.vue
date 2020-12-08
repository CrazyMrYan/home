<template>
  <div id="app">
    <Layout />
  </div>
</template>
<script>
import Layout from './layout/content'
export default {
  components:{Layout},
  mounted(){
    // console.log()
    let preArray = document.getElementsByTagName('pre')
    preArray.forEach(item=>{
      item.appendChild( `<span style="display: block;background: url(&quot;https://mmbiz.qpic.cn/mmbiz_png/pfCCZhlbMQR6oetiaAF8677dg2S2sOk8v3dMgfRbPe7xmIO37TibmqygqLfmUe9L2OyOjaoicFeD43niaBLR5OSPibQ/640?wx_fmt=png&quot;) 10px 10px / 40px no-repeat rgb(40, 44, 52);height: 30px;width: 100%;margin-bottom: -7px;border-radius: 5px;"></span>`)
    })
    // document.getElementsByTagName('pre')[0].appendChild()
  }
}
</script>
<style lang="scss">
    #nprogress .bar {
      background: #1DA57A !important; //自定义颜色
    }
    #app{
      overflow: hidden;
    }
    p>img{
      width: 100% !important;
      box-shadow: rgba(0, 0, 0, 0.55) 0px 3px 5px;
      border-radius: 4px;
    }
    pre{
      background-color: var(--color-bg-tertiary);
      padding:10px 20px;
      border-radius: 5px;
      box-sizing: border-box;
      box-shadow: rgba(0, 0, 0, 0.55) 0px 2px 10px;
      background-image: url('./images/640.png');
      background-repeat: no-repeat;
      background-size: 70px 20px;
      background-position: 10px 5px;
      padding-top: 30px;
    }
    
    .token.operator{
      background: unset !important;
    }
    .md-content * {
      font-size: 18px;
    }
    .md-content > h1,h2,h3,h4,h5,h6{
      font-weight: 600  !important;
    }
    .md-content h2{
      font-size: 30px;
    }
    .md-content h3{
      font-size: 26px;
    }
    .md-content h4{
      font-size: 22px;
    }
    
</style>
