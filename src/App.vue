<script setup lang="ts">
  import HelloWorld from './components/HelloWorld.vue'
  import MenuBar from './components/MenuBar.vue'
</script>

<script lang="ts">
  // @ts-ignore
  window.openAppSwitcher = () => {
    // @ts-ignore
    window.app.appSwitcher.open()
  }
</script>

<template>
  <!-- ZH-CN: 创建 Lath 应用容器，并指定默认(default-applet)子视图 -->
  <!-- EN: Create a Lath app container and specify the default subview -->
  <define-application default-applet="home">
    <!-- frameworks 和 system 是两种特殊类型的程序卡，其名字固定且唯一。frameworks 类型为必须存在的程序卡，system 可选。 -->
    <define-applet applet-id="frameworks">
      <MenuBar />
    </define-applet>
    <define-applet applet-id="home">
      <div style="width: 100%; padding-bottom: 100px;">
        <HelloWorld msg="Hello Lath" />
        <h1>一些窗口效果例子</h1>
        <div class="item" to-applet="slide">点击滑动打开</div>
        <div class="item" to-applet="slideTabGroup">进入到一个 Slide 页面</div>
        <div class="item" to-applet="zoom">点击以放大动画打开</div>
        <div class="item" to-applet="flip">点击以中心翻转打开</div>
        <div class="item" to-applet="sheet">点击以从底部弹出打开</div>
        <hr />
        <a class="item" href="https://tmall.com" style="background-color: rgb(233 62 62 / 95%)">点击以打开A链接<p>不预载，跨域时能力也不被继承</p></a>
        <hr />
        <div class="card" to-applet="paper">
          <div class="icon"></div>
          <p>Bring interactive experiences comparable to Native Apps.</p>
        </div>
        <hr />
      </div>
    </define-applet>
    <define-applet applet-id="tab1">
      <div class="tab1-header">tab1</div>
    </define-applet>
    <define-applet applet-id="tab2">
      <HelloWorld msg="tab2" />
      <p>tab 在切换时不会产生动画</p>
    </define-applet>
    <define-applet applet-id="tab3">
      <HelloWorld msg="tab3" />
      <p>tab 在切换时不会产生动画</p>
    </define-applet>
    <define-applet applet-id="slide1">
      <HelloWorld msg="slide1" />
      <p>手指在屏幕中间往左滑退出</p>
      <p>手指在屏幕中间往右滑进入下一个滑动卡片</p>
    </define-applet>
    <define-applet applet-id="slide2">
      <HelloWorld msg="slide2" />
      <p>手指在屏幕中间往左滑，回到上一个滑动卡片</p>
    </define-applet>
    <define-applet applet-id="zoom">
      <HelloWorld msg="Zoom" />
      <p>手指在屏幕中间往左滑退出</p>
    </define-applet>
    <define-applet applet-id="flip">
      <HelloWorld msg="Flip" />
      <p>手指在屏幕中间往左滑退出</p>
    </define-applet>
    <define-applet applet-id="slide">
      <HelloWorld msg="Fullscreen" />
      <p>手指在屏幕中间往左滑退出</p>
      <p>荐：此类型的动画性能为最优</p>
    </define-applet>
    <define-applet applet-id="paper">
      <div class="card free">
        <div class="icon"></div>
        <p>Bring interactive experiences comparable to Native Apps.</p>
      </div>
      <HelloWorld msg="Paper" />
      <p>手指在卡片顶部的手柄处下滑退出</p>
      <p>手指在屏幕中间往左滑也可退出</p>
    </define-applet>
    <define-applet applet-id="sheet">
      <HelloWorld msg="Pop-up Sheet" />
      <p>手指在卡片顶部的手柄处下滑退出</p>
      <p>手指在屏幕中间往左滑也可退出</p>
    </define-applet>
    <define-applet applet-id="system">
      <!-- 系统级模块能够将内容始终固定在所有类型动画的上层 -->
      <div class="global-point" onclick="openAppSwitcher()"></div>
    </define-applet>
  </define-application>
</template>

<style>
body {
  margin: 0;
}
#app {
  font-family: Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.item {
  margin: 7px 25px;
  padding: 12px 20px;
  font-size: 14px;
  text-align: center;
  background-color: rgb(62 110 233 / 95%);
  border-radius: 40px;
  color: #fff;
  display: block;
  text-decoration: none;
  font-weight: bold;
}
.item p {
  margin: 0;
  padding: 0;
  font-size: 12px;
}
p {
  color: rgba(255, 255, 255, .5);
}
hr {
  margin: 30px 0;
  border: 0;
  border-bottom: 1px solid rgba(255, 255, 255, .1);
}
.tab1-header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 40px;
  line-height: 40px;
  text-align: center;
  padding-top: calc(4px + constant(safe-area-inset-top));
  padding-top: calc(4px + env(safe-area-inset-top));
  justify-content: center;
  background-color: rgba(255, 255, 255, .85);
  -webkit-backdrop-filter: saturate(180%) blur(20px);
  backdrop-filter: saturate(180%) blur(20px);
  border-bottom: 0.5px solid rgba(0, 0, 0, .1);
  -webkit-tap-highlight-color: transparent;
}
.global-point {
  position: absolute;
  z-index: 9;
  width: 30px;
  height: 30px;
  background: blueviolet;
  opacity: .9;
  border: 0.5px solid rgba(0, 0, 0, .1);
  border-radius: 30px;
  right: 20px;
  bottom: calc(80px + constant(safe-area-inset-top));
  bottom: calc(80px + env(safe-area-inset-top));
}
.card {
  position: relative;
  margin: 3vw auto;
  width: 50vw;
  height: 50vw;
  padding: 5vw;
  border-radius: 16px;
  background-color: aquamarine;
  color: #000;
  max-width: 500px;
  max-height: 300px;
}
.card.free {
  width: auto;
}
.card .icon {
  margin: 5vw auto;
  width: 70%;
  height: 20vw;
  border-radius: 16px;
  background-color: rgb(194, 0, 253);
}
.card p {
  color: #000;
  font-size: 20px;
}
</style>
