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
      <div style="width: 100%">
        <HelloWorld msg="Hello Lath" />
        <div class="item" to-applet="slide" style="color: #fff">点击左滑进入到页面</div>
        <div class="item" to-applet="slideTabGroup" style="color: #fff">点击进入到一个全屏且可滑动的页面</div>
        <div class="item" to-applet="zoom" style="color: #fff">点击以放大动画进入页面</div>
        <div class="item" to-applet="flip" style="color: #fff">点击以中心翻转动画进入页面</div>
        <div class="item" to-applet="sheet" style="color: #fff">点击以从底部弹出进入页面</div>
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
      <HelloWorld msg="Slide" />
      <p>手指在屏幕中间往左滑退出</p>
      <p>荐：此类型的动画性能为最优</p>
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
  margin: 7px 8px;
  padding: 4px 4px 3px;
  border: 1px solid blue;
  font-size: 13px;
  text-align: center;
}
p {
  color: rgba(255, 255, 255, .5);
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
</style>
