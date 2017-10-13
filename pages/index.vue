<template>
  <transition name='index'>
    <div class="body">
      <head-top></head-top>
      <!-- 头部banner -->
      <div class="header-banner">
        <img src="/images/banner.png" alt="中小学生自适应学习平台">
      </div>
      <div class="content">
        <!-- 自适应测评 孩子提分新方式 -->
        <div class="content-evaluating">
          <p class="title">自适应测评，孩子提分新方式</p>
          <div class="content-evaluating-left">
            <img class="left" src="/images/mac.png" alt="" style="width: 715px;height: 475px;">
            <img class="left" src="/images/content-icon1.png" alt="" style="margin: 2px 0 0 37px">
            <dl class="dl-list left">
              <dt>
                首次测评
              </dt>
              <dd>首次测评，系统评估当前能力水平</dd>
              <dt>
                首次测评
              </dt>
              <dd>首次测评，系统评估当前能力水平</dd>
              <dt>
                首次测评
              </dt>
              <dd>首次测评，系统评估当前能力水平</dd>
              <dt>
                首次测评
              </dt>
              <dd>首次测评，系统评估当前能力水平</dd>
            </dl>
            <div class="goevaluating content-btn">进入测评</div>
          </div>
        </div>
        <!-- 量身定制 -->
        <div class="content-customized">
          <div class="content-body">
            <p class="title">自适应测评，孩子提分新方式</p>
            <ul class="customized-list">
              <li class="customized-item left">
                <span class="customized-item-title">Step 1</span><br>
                <span style="line-height: 20px;font-size: 17px">完成系统测试</span>
              </li>
              <li class="customized-item left">
                <span class="customized-item-title">Step 1</span><br>
                <span style="line-height: 20px;font-size: 17px">完成系统测试</span>
              </li>
              <li class="customized-item left">
                <span class="customized-item-title">Step 1</span><br>
                <span style="line-height: 20px;font-size: 17px">完成系统测试</span>
              </li>
              <li class="customized-item left" style="margin-right: 0">
                <span class="customized-item-title">Step 1</span><br>
                <span style="line-height: 20px;font-size: 17px">完成系统测试</span>
              </li>
            </ul>
          </div>

        </div>
        <!-- 疑难问题随时提问 -->
        <div class="content-questions-wrap">
          <div class="content-questions content-body">

            <p class="title">自适应测评，孩子提分新方式</p>
            <div class="content-img">
              <img src="/images/questions.jpg" alt="" width="1190px" height="530px">
              <div class="response content-btn">疑难解答</div>
            </div>
          </div>
        </div>
        <!-- 线上审批节约时间 -->
        <div class="content-marking-wrap">
          <div class="content-marking content-body">
            <div class="marking-title clearfix">
              <p class="bigtitle left">线上审批节约时间</p>
              <p class="smalltitle left">
                线上发布家庭作业，学生提交作业后，由平台判断主观题对错。<br>
                有效<span style="font-size: 24px;color: #19ffd6;font-weight: 600">节省</span>了教师<span style="font-size: 20px;color: #19ffd6;font-weight: 600">80%</span>的课余时间，释放了老师的课余压力。
              </p>
            </div>
          </div>
        </div>
        <!-- 教学新选择 -->
        <div class="content-choice-wrap">
          <div class="content-choice content-body">

            <p class="title">数万名教学老师的教学新选择</p>
            <div class="ul-wrap">
              <span id="btn-left"> < </span>
              <span id="btn-right"> > </span>
              <div class="ul-hidden">
                <ul class="teacher-list clearfix" v-model="teacherList">
                  <li class="teacher-item left" v-for="item in teacherList">
                    <img :src="item.head" alt="" width="160" height="160">
                    <div class="teacher-item-content">
                      <p class="teacher-name">{{ item.teacherName }}</p>
                      <dl>
                        <dt class="teacher-tip">
                          {{ item.grade | grade }} | {{ item.subject }} | 教龄{{ item.Seniority }}年
                        </dt>
                        <dd class="teacher-main" v-for="honor in item.honor">
                          <span class="rongyu">教师荣誉：</span>{{ honor.tip }}
                        </dd>
                      </dl>
                    </div>
                  </li>
                </ul>
              </div>

            </div>


          </div>
        </div>
        <!-- 中小学生自适应平台 -->
        <div class="content-platform-wrap">
          <div class="content-choice content-body">

            <p class="title">中小学生自适应平台</p>
            <ul class="platform-list clearfix">
              <li class="platform-item">
                <img src="/images/icon.png" alt="" width="62" height="50">
                <p>现在加入，立即开启<br>全新的学习模式</p>
              </li>
              <li class="platform-item">
                <img src="/images/icon.png" alt="" width="62" height="50">
                <p>现在加入，立即开启<br>全新的学习模式</p>
              </li>
              <li class="platform-item">
                <img src="/images/icon.png" alt="" width="62" height="50">
                <p>现在加入，立即开启<br>全新的学习模式</p>
              </li>
              <li class="platform-item">
                <img src="/images/icon.png" alt="" width="62" height="50">
                <p>现在加入，立即开启<br>全新的学习模式</p>
              </li>
              <li class="platform-item" style="margin-right: 0">
                <img src="/images/icon.png" alt="" width="62" height="50">
                <p>现在加入，立即开启<br>全新的学习模式</p>
              </li>
            </ul>
            <div class="goplat content-btn">进入评测</div>
          </div>
        </div>
      </div>
      <footer-buttom></footer-buttom>
    </div>
  </transition>
</template>

<script>
import headTop from '~/components/headTop.vue'
import footerButtom from '~/components/footer.vue'
import axios from '~plugins/axios'
import { grade } from '~plugins/filters'
import {syncClass} from '../ajax/getData'
export default {
  transition: {
    name: 'index',
    mode: 'out-in',
    beforeEnter: (to, from, next) => {
//      console.log(to)
    }
  },
  async asyncData () {
    let { data } = await axios.get('/api/teacherList')
    return {
      teacherList: data.teacherList
    }
  },
  components: {
    headTop,
    footerButtom
  },
  data(){
    return{
      classGrade:'',
      teacherList:[]
    }
  },
  methods:{

  }
}
</script>

<style>
  .header-banner{
    height: 390px;
  }
  .header-banner img{
    width: 100%;
  }
  .content-evaluating{
    width: 1190px;
    height: 819px;
    background: #ffffff;
    margin: 0 auto;
  }
  .content .title{
    font-size: 34px;
    font-weight: 600;
    color: #000000;
    line-height: 200px;
    height: 205px;
    text-align: center;
  }
  .content-evaluating-left img{
    float: left;
  }
  .content-evaluating-left .dl-list{
    margin-left: 10px;
  }
  .content-evaluating-left .dl-list dt{
    font-size: 23px;
    font-weight: 600;
    color: #1dbf38;
  }
  .content-evaluating-left .dl-list dd{
    font-size: 14px;
    color:#717171;
    line-height: 30px;
    margin-bottom: 35px;
  }
  .goevaluating{
    display: inline-block;
    width: 220px;
    line-height: 50px;
    background: #1dbf38;
    border-radius: 5px;
    font-size: 20px;
    color:#ffffff;
    text-align: center;
  }
  .content-customized{
    background: url(/images/customized.jpg);
    background-size: 100% 460px;
    width: 100%;
    height: 460px;
  }
  .customized-item{
    width: 210px;
    height: 210px;
    border-radius: 50%;
    background:#1cc03b;
    text-align: center;
    color: #ffffff;
    margin-right: 116px;
  }
  .customized-item span{
    display: inline-block;
  }
  .customized-item-title{
    margin-top: 100px;font-size: 20px;font-weight: 600;
  }
  .content-questions-wrap{
    background: #eef7f2;
    padding-bottom: 108px;
  }
  .content-body{
    margin:0 auto;
    width: 1190px;
    padding-bottom: 150px;
  }
  .content-questions .content-img{
    position: relative;
  }
  .content-questions .content-img .response{
    position: absolute;
    bottom: 16px;
    left: 483px;
    background: #1dbf38;
  }
  .content-marking-wrap{
    background: url(/images/marking.jpg);
    background-size: 100% 500px;
    height: 500px;
    width: 100%;
    color:#ffffff;
  }
  .marking-title{
    padding: 86px 0 55px 167px;
  }
  .marking-title .bigtitle{
    font-size: 47px;
    font-weight: 900;
  }
  .marking-title .smalltitle{
    font-size: 17px;
    margin: 9px 0 0 60px;
  }
  .content-choice-wrap{
    background: url(/images/introduce.jpg);
    background-size: 100% 100%;
  }
  .ul-wrap {
    position: relative;

  }
  .ul-hidden{
    width: 1000px;
    height: 540px;
    overflow: hidden;
    margin-left: 80px;
  }
  .teacher-list{
    width: 200000px;
  }
  .ul-wrap  #btn-left,#btn-right{
    position: absolute;
    top: 50%;
    font-size: 65px;
    cursor:pointer;
  }
  #btn-left{
    left: 10px;

  }
  #btn-right{
    right:10px;
  }
  .teacher-item{
    width: 300px;
    height: 540px;
    position: relative;
    margin: 0 20px;
  }
  .teacher-item-content{
    position: absolute;
    top: 80px;
    width: 300px;
    height: 460px;
    background: #ffffff;
  }
  .teacher-item-content dl{
    margin:0 30px ;
  }
  .teacher-item img{
    position: absolute;
    z-index: 333;
    left: 22%;
    border: 4px solid #cccccc;
    border-radius: 50%;
  }
  .teacher-name{
    margin-top: 100px;
    line-height: 40px;
    font-size: 18px;
    font-weight: 600;
    color: #000000;
    text-align: center;
  }
  .teacher-tip{
    line-height: 40px;
    font-size: 16px;
    font-weight: 900;
    color: #000000;
  }
  .teacher-main{
    font-size: 13px;
    color:#959595;
    margin-bottom: 20px;
  }
  .teacher-main .rongyu{
    color:#11a642;
  }
  .content-btn{
    width: 220px;
    line-height: 50px;
    color:#ffffff;
    text-align: center;
    border-radius: 5px;
    cursor:pointer;
  }
  .lookmore{
    border:2px solid #ccc;
    color: #ccc;
    font-size: 17px;
    font-weight: 600;
    margin: 0 auto;
  }
  .content-platform-wrap{
    background: url(/images/marking.jpg) 100% 100%;
    height: 700px;
    width: 100%;
    color:#ffffff;
  }
  .platform-item{
    float: left;
    margin-bottom: 87px;
    width: 210px;
    margin-right: 35px;
    height: 280px;
    background: #ffffff;
    border-radius: 5px;
    text-align: center;
  }
  .platform-item img{
    margin-top: 70px;
  }
  .platform-item p{
    font-size: 18px;
    font-weight: 600;
    color: #000000;
  }
  .goplat{
    background:#1dbf38;
    margin: 0 auto;
  }
</style>
