<template>
    <dl class="main-left left" v-model="selfList">
        <dt class="main-left-introduce">
            <dl>
            <dt class="introduce-head"><img src="/images/head.jpg" alt=""></dt>
            <dt class="introduce-name">五五开</dt>
            <dd class="introduce-tip">我的积分：100000分</dd>
            <dd class="introduce-tip">我的勋章：</dd>
            <dd class="introduce-tip"><p>余额：500元<span class="getmoney">充值 ></span></p></dd>
            </dl>
        </dt>
        <dd class="main-left-item" v-for="(item,index) in selfList" @click='selectSort(index,item)' :class="{'main-left-item-active' : selected == index }">
            <nuxt-link :to='path + item.path'><span class="main-left-item-icon"><img :src="item.head" alt=""></span><span>{{item.title}}</span></nuxt-link>
        </dd>
    </dl>
</template>
<script>
    import axios from '~plugins/axios'
    import { message } from '~plugins/filters'
    export default {
        transition: {
            name: 'selfmenu',
            mode: 'out-in',
            beforeEnter: (to, from, next) => {
//          console.log(to)
        }
    },
    async asyncData () {
        // let { data } = await axios.get('/api/messageList')
        // return {
        //     messageList: data
        // }
    },
    components: {
        
    },
    data(){
         return{
            path: "/about", 
            selfList:[
                {'title':'个人中心','head':'/images/admin.png','path':'/selfContent'},
                {'title':'我的题库','head':'/images/admin.png','path':'/'},
                {'title':'我的群组','head':'/images/admin.png','path':'/'},
                {'title':'我的测试','head':'/images/admin.png'},
                {'title':'我的作业','head':'/images/admin.png'},
                {'title':'我的账户','head':'/images/admin.png'},
                {'title':'我的订单','head':'/images/admin.png'},
                {'title':'成长档案','head':'/images/admin.png'},
                {'title':'学科助手','head':'/images/admin.png'},
                {'title':'我的答疑','head':'/images/admin.png'},
                {'title':'个人资料','head':'/images/admin.png'}],
            selected:2
        }
    },
    methods:{
        selectSort (index,item) {
　　　　　　　this.selected = index;
            this.$emit('change',item.title)
　　　　　}
    }
  }
</script>

<style>
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
  .main-left-item a{
      color:#716d6d;
  }
  .main-left-item-active a{
      color: #1cc03b;
  }
  .main-left-item-active{
    display: block;
    width: 220px;
    height: 40px;
    color: #1cc03b;
    background: #f7f7f7;
  }
  .main-left-item .main-left-item-icon{
    display: inline-block;
    margin: 0 10px 0 30px;
  }
</style>

