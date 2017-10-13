<template>

  <div class="footer">
    <!-- 底部logo -->
    <div class="footer-logo">
      <div class="footer-logo-content">
        <img src="/images/logo.png" alt="中小学自适应平台">
      </div>
    </div>
    <!-- 关于我们 -->
    <div class="footer-aboutus-wrap clearfix">
      <div class="footer-aboutus left">
        <p class="about-title">
          <span>关于我们</span><span>关于团队</span><span>关于平台</span><span>帮助中心</span>
        </p>
        <p class="about-main">本站所有课程适用于《中华人民共和国著作权法》，未经书面允许，不得转载。<br>
          Copyright c 2017 山东教育出版社. All Rights Revered.<br>
          鲁ICP备11034032号 互联网出版许可证号：新出网证（鲁新出）14号
        </p>
      </div>
      <div class="foot-content left">
        <span style="position: absolute;left: -71px;">联系我们</span>
        <img src="/images/ewm.png" alt="">
      </div>
      <div class="concat-way right">
        <ul class="way-list clearfix">
          <li class="way-item left"><img src="/images/weixin.png" alt=""></li>
          <li class="way-item left"><img src="/images/weixin.png" alt=""></li>
          <li class="way-item left"><img src="/images/weixin.png" alt=""></li>
        </ul>
        <p>
          联系我们：010-8888888<br>
          电子邮箱：studentap@edu.com
        </p>
      </div>
    </div>
  </div>
</template>
<script>

  export default {
    data () {
      return {}
    },
    methods: {
      init () {

      }

    },
    created () {
      this.init()
    },
    mounted () {
    },
    components: {}
  }
</script>
<style>
  .footer-logo{
    height: 90px;
    border-bottom: 1px solid #ccc;
  }
  .footer-logo-content{
    width: 1190px;
    margin: 0 auto;
  }
  .footer-logo img{
    margin-top: 27px;
  }
  .footer-aboutus-wrap{
    width: 1190px;
    margin: 0 auto;
    padding-bottom: 80px
  }
  .footer-aboutus{

  }
  .about-title span{
    font-size: 14px;
    color:#000000;
    margin-right: 30px;
    line-height: 61px;
  }
  .about-main{
    font-size: 13px;
    color: #ccc;
  }
  .foot-content{
    margin:18px 0 0 140px;
    position: relative;
  }
  .way-item{
    margin: 20px 20px 0 0;
  }
  .concat-way p{
    color: #ccc;
  }

</style>
