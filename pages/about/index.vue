<template>
  <div class="main-right left">
    <ul class="top-menu-list clearfix" v-model="topMenuList">
        <li class="top-menu-item" v-for="(item,index) in topMenuList" @click="selectSort(index)" :class="{'top-menu-item-active' : selected == index }">{{item}}</li>
        <!-- <li class="top-menu-item top-menu-item-active" style="margin-left: 30px" @click="selectSort(0)">全部</li>
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

