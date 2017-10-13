<template>
  <div>
    <head-top></head-top>
    <div class="content-warp">
      <div class="content">
        <p class="tip"><span>首页</span> > <span>个人中心</span> > <span>消息中心</span></p>
        <div class="main-wrap clearfix">
          <dl class="main-left left">
            <dt class="main-left-introduce">
              <dl>
                <dt class="introduce-head"><img src="/images/head.jpg" alt=""></dt>
                <dt class="introduce-name">五五开</dt>
                <dd class="introduce-tip">我的积分：100000分</dd>
                <dd class="introduce-tip">我的勋章：</dd>
                <dd class="introduce-tip"><p>余额：500元<span class="getmoney">充值 ></span></p></dd>
              </dl>
            </dt>
            <dd class="main-left-item main-left-item-active">
              <span class="main-left-item-icon"><img src="/images/admin.png" alt=""></span><span>个人中心</span>
            </dd>
            <dd class="main-left-item">
              <span class="main-left-item-icon"><img src="/images/admin.png" alt=""></span><span>个人中心</span>
            </dd>
            <dd class="main-left-item">
              <span class="main-left-item-icon"><img src="/images/admin.png" alt=""></span><span>个人中心</span>
            </dd>
            <dd class="main-left-item">
              <span class="main-left-item-icon"><img src="/images/admin.png" alt=""></span><span>个人中心</span>
            </dd>
            <dd class="main-left-item">
              <span class="main-left-item-icon"><img src="/images/admin.png" alt=""></span><span>个人中心</span>
            </dd>
            <dd class="main-left-item">
              <span class="main-left-item-icon"><img src="/images/admin.png" alt=""></span><span>个人中心</span>
            </dd>
            <dd class="main-left-item">
              <span class="main-left-item-icon"><img src="/images/admin.png" alt=""></span><span>个人中心</span>
            </dd>
            <dd class="main-left-item">
              <span class="main-left-item-icon"><img src="/images/admin.png" alt=""></span><span>个人中心</span>
            </dd>
            <dd class="main-left-item">
              <span class="main-left-item-icon"><img src="/images/admin.png" alt=""></span><span>个人中心</span>
            </dd>
            <dd class="main-left-item">
              <span class="main-left-item-icon"><img src="/images/admin.png" alt=""></span><span>个人中心</span>
            </dd>
            <dd class="main-left-item">
              <span class="main-left-item-icon"><img src="/images/admin.png" alt=""></span><span>个人中心</span>
            </dd>
          </dl>
          <div class="main-right left">
            <ul class="top-menu-list clearfix">
              <li class="top-menu-item top-menu-item-active" style="margin-left: 30px">全部</li>
              <li class="top-menu-item">未读消息</li>
              <li class="top-menu-item">已读消息</li>
              <li class="top-menu-item">系统消息</li>
            </ul>
            <ul class="message-list" v-model="messageList">
              <li class="message-item" v-for="item in messageList">
                <dl>
                  <dt class="ietm-head left">
                    <img :src="item.head" alt="">
                  </dt>
                  <div class="left item-introduce">
                    <dd class="type">
                      <span class="type-name">{{item.type | message}}</span>
                      <span class="time">{{item.time}}</span>
                    </dd>
                    <dd class="item-title">{{item.title}}
                    </dd>
                    <dd class="item-tip">
                     {{item.tip}}
                    </dd>
                  </div>

                </dl>
              </li>
            </ul>
            <p class="load-more" @click="getMore">加载中</p>
          </div>
        </div>

      </div>
    </div>
    <footer-buttom></footer-buttom>
  </div>

</template>
<script>
  import headTop from '~/components/headTop.vue'
  import footerButtom from '~/components/footer.vue'
  import axios from '~plugins/axios'
  import { message } from '~plugins/filters'
  export default {
    transition: {
      name: 'about',
      mode: 'out-in',
      beforeEnter: (to, from, next) => {
//        console.log(to)
      }
    },
    async asyncData () {
      let { data } = await axios.get('/api/messageList')
      return {
        messageList: data
      }
    },
    components: {
      headTop,
      footerButtom
    },
    data(){
      return{
        messageList:[]
      }
    },
    methods:{
      getMore (){
          axios.get('/api/messageList').then((res)=>{
              this.messageList = this.messageList.concat(res.data);
            });
      }
    }
  }
</script>
<style>
  .login .icon{
    display: inline-block;
    width: 17px;
    height: 17px;
    background: url(/images/admin.png);
    position: static;
    margin-right: 5px;
  }
  .content-warp{
    width: 100%;
    background: #eeeeee;
  }
  .content{
    max-width: 1190px;
    margin: 0 auto;
    padding-top: 20px;
  }
  .content .tip{
    color: #ccc;
    line-height: 20px;
    font-size: 13px;
    margin-bottom: 5px;
  }

  .main-left{
    width: 220px;
    background: #edf9e3;
    color: #716d6d;
    margin-right: 30px;
  }
  .main-left-introduce{
    height: 270px;
    background: url(/images/introduce.jpg);
    background-size: 100% 100%;
  }
  .introduce-head{
    text-align: center;
    cursor: pointer;
  }
  .introduce-head img{
    width: 100px;
    border: 2px solid #ffffff;
    border-radius: 50%;
    margin-top: 16px;
  }
  .introduce-name{
    color: #000000;
    font-size: 17px;
    font-weight: 600;
    text-align: center;
    margin-bottom: 5px;
  }
  .introduce-tip{
    margin-left: 36px;
    font-size: 14px;
    margin-top: 5px;
  }
  .introduce-tip .getmoney{
    display: inline-block;
    padding:1px 4px;
    border-radius: 2px;
    margin-left: 10px;
    background: #f10;
    color: #ffffff;
    cursor:pointer;
  }
  .main-left-item{
    line-height: 40px;
    border-top:1px solid #ccc;
    background: #ffffff;
    cursor:pointer;
  }
  .main-left-item-active{
    color: #1cc03b;
    background: #f7f7f7;
  }
  .main-left-item .main-left-item-icon{
    display: inline-block;
    margin: 0 10px 0 30px;
  }
  .main-right{
    width: 940px;
    margin-bottom: 54px;
  }
  .top-menu-list{
    padding-top: 10px;
    background: #ffffff;
    border-bottom: 2px solid #eeeeee;
    border-radius: 2px 2px 0 0;
  }
  .top-menu-list .top-menu-item{
    padding: 5px 10px;
    float: left;
    color: #525252;
    border-radius: 2px 2px 0 0;
    cursor:pointer;
  }
  .top-menu-list .top-menu-item-active{
    background: #1cc03b;
    color: #ffffff;
  }
  .message-list{
    padding-left: 30px;
    background: #ffffff;
  }
  .message-item{
    height: 148px;
    width: 890px;
    cursor: pointer;
    border-bottom: 1px solid #ececec;
  }
  .message-item .ietm-head img{
    width: 50px;
    height: 50px;
    border-radius: 50%;
    margin: 41px 25px 0 0;
  }
  .item-introduce{
    margin-top: 36px;
    line-height: 23px;
    font-size: 14px;
    color: #525252;
  }
  .item-introduce .type{
    line-height: 29px;
    color: #c0c0c0;
  }
  .item-introduce .type .type-name{
    margin-right: 16px;
  }
  .load-more{
    line-height: 86px;
    color: #66bb77;
    font-size: 16px;
    text-align: center;
    background: #ffffff;
    cursor:pointer;
  }
</style>
