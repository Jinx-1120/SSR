近期我司开始了一个新项目，因为上一个项目完成的差不多了，所以将这个项目交给了我（其实就是我先踩踩坑，后续大家在一起开发）。因为客户要求要做SEO优化，所以一开始的决定是使用原声js加jq做，我自己也花了俩三天时间来做了一个demo，但是老大觉得效果不理想，周一上午开会决定用服务端渲染的形式实现，说实话到现在我还不是特别的能够理解这套框架的，但是还是想把自己这几天遇到的问题，以及如何解决的跟大家一起分享一下（毕竟第一次在掘金上发表东西，欢迎大家吐槽 ---- >_< ）
## Nuxt.js 是什么？
[Nuxt.js](https://zh.nuxtjs.org/guide) 是一个基于 Vue.js 的通用应用框架。

通过对客户端/服务端基础架构的抽象组织，Nuxt.js 主要关注的是应用的 UI渲染。

我们的目标是创建一个灵活的应用框架，你可以基于它初始化新项目的基础结构代码，或者在已有 Node.js 项目中使用 Nuxt.js。

Nuxt.js 预设了利用Vue.js开发服务端渲染的应用所需要的各种配置。

除此之外，我们还提供了一种命令叫：nuxt generate，为基于 Vue.js 的应用提供生成对应的静态站点的功能。

我们相信这个命令所提供的功能，是向开发集成各种微服务（miscroservices）的 Web 应用迈开的新一步。

作为框架，Nuxt.js 为 客户端/服务端 这种典型的应用架构模式提供了许多有用的特性，例如异步数据加载、中间件支持、布局支持等。（官方说明-。-  建议大家在学习之前先将官方文档看一遍，大体有个了解然后再来进行实际操作）
## 安装Nuxt
好了，不吡吡了其他没用的了，下面开始正文；
使用Nuxt有两种方式：
1.使用官方给的新手模版： 

```
$ vue init nuxt-community/starter-template <project-name>
```
project-name 是你建立的项目的名称
```

$ cd <project-name>
$ npm install # Or yarn
```
进入你建立好的项目的文件夹下 ，然后安装项目所需要的依赖；
建议使用yarn安装依赖

```
$ npm run dev
```
执行启动命令，启动成功之后打开浏览器输入：http://localhost:3000 就可以看到你建立的项目了

2.如果不想使用官方推荐的哪种方式也可以自己手动配置一个（个人建议，新手上路还是使用官方推荐的那种方式）
首先新建一个文件夹

```
$ mkdir <项目名>
$ cd <项目名>
```
然后在你建立的文件夹下新建一个package.json文件 该文件用来配置如何运行nuxt：

```
{
  "name": "my-app",
  "scripts": {
    "dev": "nuxt"
  }
}
```
上面配置我们通过npm run dev来运行nuxt
安装nuxt：

```
npm install --save nuxt
```
然后新建一个pages文件夹

```
$ mkdir pages
```
在pages文件夹下新建一个index.vue文件（Nuxt.js 会依据 pages 目录中的所有 *.vue 文件生成应用的路由配置。）

```
<template>
  <h1>Hello Nuxt!</h1>
</template>
```
启动项目

```
$ npm run dev
```
最后打开浏览器访问 http://localhost:3000 就像可以了

本文将的是使用官方给的模版进行搭建的项目（毕竟我还年轻-。-）

## 项目目录结构

![](https://user-gold-cdn.xitu.io/2017/10/13/c3393f3119c27076e5d6b23a24a6e9df)

assets文件夹 用于组织未编译的静态资源如 LESS、SASS 或 JavaScript。
components文件夹 用于放置项目公用的组件。
config文件夹 一些基本配置，比如 env.js fetch.js等。
layouts文件夹 用于组织应用的布局组件。
middleware文件夹 用于放置一些项目的中间件。
pages文件夹 用于组织应用的路由及视图。Nuxt.js 框架读取该目录下所有的 .vue 文件并自动生成对应的路由配置。
plugins 用于放置项目所用到的插件，比如axios element-ui 等。
server 用于放置项目服务器配置，比如配置express 或者你自己做的假数据等。
static 用于放置一些静态文件，并且这个文件夹下的资源是不会被nuxt使用webpack进行打包编译的，服务器启动的时候，该目录下的文件会映射至应用的根路径 / 下。
store 目录用于组织应用的 Vuex 状态树 文件。 Nuxt.js 框架集成了 Vuex 状态树 的相关功能配置，在 store 目录下创建一个 index.js 文件可激活这些配置。
backpack.config.js是因为我项目中配置server使用的。
nuxt.config.js是nuxt相关的基础配置。
其中需要重点了解的是nuxt.config.js，nuxt.js在项目的搭建的时候已经给你配置好了一些相关的基础配置，当你的项目需要修改这些配置的时候，就需要在next.config.js进行操作了，他会将默认的配置进行覆盖，已达到你项目中需要的效果。[官方链接](https://zh.nuxtjs.org/guide/configuration)

## 路由
在使用nuxt.js的过程中你会发现你不需要进行路由的配置，只需要根据自己项目的需求将对应的文件建在pages文件夹下就可以了，nuxt.js会根据这个文件的目录结构自行的进行路由的配置。

## 视图
[包括模版，页面，布局，html头部](https://zh.nuxtjs.org/guide/views)

## 数据处理
Nuxt.js 扩展了 Vue.js，增加了一个叫 asyncData 的方法，使得我们可以在设置组件的数据之前能异步获取或处理数据。
你可以在你的页面里这样配置：

```
async asyncData () {
    let { data } = await axios.get('/api/teacherList')
    return {
      teacherList: data.teacherList
    }
}
```
asyncData方法会在组件（**限于页面组件**）每次加载之前被调用。它可以在服务端或路由更新之前被调用。（就是大家需要的服务端渲染 >_< ）

**asyncData方法也具备错误处理的能力**
Nuxt.js 在上下文对象context中提供了一个 error(params) 方法，你可以通过调用该方法来显示错误信息页面。params.statusCode 可用于指定服务端返回的请求状态码。

以返回 Promise 的方式举个例子：

```
export default {
  asyncData ({ params, error }) {
    return axios.get(`https://my-api/posts/${params.id}`)
    .then((res) => {
      return { title: res.data.title }
    })
    .catch((e) => {
      error({ statusCode: 404, message: 'Post not found' })
    })
  }
}
```
当然也可以通过回调函数进行处理，这个[文档](https://zh.nuxtjs.org/guide/async-data#错误处理)将的也非常清楚

有同学可能会问，那如果我要是需要做数据交互怎么办，其实这个更简单，就是跟大家平时做vue的项目是一样的：

```
methods:{
    getMore (){
        axios.get('/api/messageList').then((res)=>{
            this.messageList = this.messageList.concat(res.data);
        })
    }
}
```

## vuex
vuex的使用其实和平时的vue项目中使用vuex是类似的，如果你在vue中能够熟练使用vuex，那么在nuxt当中对于你来说也不会特别困难。这里我就不给大家将vuex里，我怕我越说大家可能与无法理解🤦 （我理解的vuex就是一个可以当作全局变量使用的一个东西，也有大佬将vuex比做是前端项目的数据库   [nuxt中使用vuex文档](https://zh.nuxtjs.org/guide/vuex-store)）

## server
最后跟大家说一下我的server吧
index是我使用express的一些配置，便于我写的假数据能够进行正常的请求
api文件里面是我自己配置的一些假数据。（这些数据简直不忍直视  -。- 大家凑合着看吧）

最后给大家附上我的[项目地址](https://github.com/jinhaidi1/SSR)（一个简单到爆的项目，欢迎大家的吐槽 🐶）

