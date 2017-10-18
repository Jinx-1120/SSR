<template>
  <div class="main-right left">
    <ul class="top-menu-list clearfix" v-model="topMenuList" style="padding-left: 30px">
        <li class="top-menu-item" v-for="(item,index) in topMenuList" @click="selectSort(index)" :class="{'top-menu-item-active' : selected == index }">{{item}}</li>
        <!-- <li class="top-menu-item top-menu-item-active"  @click="selectSort(0)">全部</li>
        <li class="top-menu-item" @click="selectSort(1)">未读消息</li>
        <li class="top-menu-item" @click="selectSort(2)">已读消息</li>
        <li class="top-menu-item" @click="selectSort(3)">系统消息</li> -->
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
</template>
<script>
import axios from '~plugins/axios'
import { message } from '~plugins/filters'
export default {
    layout: 'message',
    transition: {
        name: 'message',
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
    data(){
      return{
         selected:0,
         topMenuList:['全部','未读消息','已读消息','系统消息']
      }
    },
    methods:{
        getMore (){
          axios.get('/api/messageList').then((res)=>{
              this.messageList = this.messageList.concat(res.data);
            });
        },
        selectSort (index) {
　　　　　　　this.selected = index;
            axios.get('/api/messageList').then((res)=>{
              this.messageList = res.data;
            });
　　　　　}
    }
}
</script>

<style scoped>
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
