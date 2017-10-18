<template>
  <div>
    <head-top></head-top>
    <div class="content-warp">
      <div class="content">
        <p class="tip"><span>首页</span> > <span>个人中心</span> > <span>{{ title }}</span></p>
        <div class="main-wrap clearfix">
          <self-menu @change='change'></self-menu>
          <nuxt/>
        </div>

      </div>
    </div>
    <footer-buttom></footer-buttom>
  </div>  
</template>

<script>
import headTop from '~/components/headTop.vue'
import footerButtom from '~/components/footer.vue'
import selfMenu from '~/middleware/selfMenu.vue'

export default {
  components:{
    headTop,
    footerButtom,
    selfMenu
  },
  data(){
    return {
      title:'我的群组'
    }
  },
  methods:{
      // getMore (){
      //     axios.get('/api/messageList').then((res)=>{
      //         this.messageList = this.messageList.concat(res.data);
      //       });
      // },
      change (msg){
        this.title = msg;
        console.log(msg);
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
