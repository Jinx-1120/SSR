<template>
  <div class="header">
    <!-- 顶部logo 登录注册 -->
    <div class="header-top-wrap">
      <div class="header-top">
        <div class="logo left">
          <img src="/images/logo.png" alt="中小学自适应平台">
        </div>
        <div class="login right">
          <span class="icon"></span>
          <a href="###">登录</a> |
          <a href="###">注册</a>
        </div>
        <div class="search">
          <input id="search-value" type="text" placeholder="请输入要搜索的课程">
          <span id="search-btn"></span>
        </div>

      </div>
    </div>
    <!-- 头部菜单栏 -->
    <div class="header-menu">
      <ul class="menu-list clearfix">
        <li class="menu-item" style="margin-left: 178px">
          <span><img src="/images/menu-icon.png" alt=""></span>
          <nuxt-link to="/" exact>首页</nuxt-link>
        </li>
        <li class="menu-item">
          <span><img src="/images/menu-icon.png" alt=""></span>
          <nuxt-link to="/about">自适应测评</nuxt-link>
        </li>
        <li class="menu-item">
          <span><img src="/images/menu-icon.png" alt=""></span>
          <nuxt-link to="/about">我的测评</nuxt-link>>
        </li>
        <li class="menu-item">
          <span><img src="/images/menu-icon.png" alt=""></span>
          <nuxt-link to="/about">疑难解答</nuxt-link>>
        </li>
        <li class="menu-item">
          <span><img src="/images/menu-icon.png" alt=""></span>
          <nuxt-link to="/about">我的专题库</nuxt-link>>
        </li>
        <li class="menu-item">
          <span><img src="/images/menu-icon.png" alt=""></span>
          <nuxt-link to="/about">学科助手</nuxt-link>>
        </li>
      </ul>
    </div>

  </div>
</template>
<script>
  export default {
    data() {
      return {
        activeIndex: '1',
        activeIndex2: '1'
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>
<style>

</style>
