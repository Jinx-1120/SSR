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
<style scoped>
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
  
</style>
