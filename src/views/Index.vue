<template>
  <div class="page">
    <div class="title">推荐网站</div>
    <div class="web-wrapper">
      <div class="web" v-for="(item, index) in webConfig.recommend" :key="index" :title="item.desc">
        <span class="icon" v-if="item.icon" :style="{ backgroundImage: 'url(' + item.icon + ')'}"></span>
        <a :href="item.url" target="_blank">{{item.name}}</a>
      </div>
    </div>
    <div class="title">磁力搜索</div>
    <div class="web-wrapper">
      <div class="web" v-for="(item, index) in webConfig.btSearch" :key="index" :title="item.desc">
        <span class="icon" v-if="item.icon" :style="{ backgroundImage: 'url(' + item.icon + ')'}"></span>
        <a :href="item.url" target="_blank">{{item.name}}</a>
      </div>
    </div>
    <div class="title">其他分类</div>
    <div class="web-wrapper">
      <div class="web" v-for="(item, index) in webConfig.others" :key="index" :title="item.desc">
        <span class="icon" v-if="item.icon" :style="{ backgroundImage: 'url(' + item.icon + ')'}"></span>
        <a :href="item.url" target="_blank">{{item.name}}</a>
      </div>
    </div>
    <div class="title">VIP解析</div>
    <div class="web-wrapper">
      <div class="web" v-for="(item, index) in webConfig.vip" :key="index" :title="item.desc">
        <span class="icon" v-if="item.icon" :style="{ backgroundImage: 'url(' + item.icon + ')'}"></span>
        <a :href="item.url" target="_blank">{{item.name}}</a>
      </div>
    </div>
  </div>
</template>

<script>
import { webConfig } from '@/config/web'

export default {
  name: 'Index',
  data () {
    return {
      webConfig
    }
  }
}
</script>

<style lang="less" scoped>
.page{
  width: 1000px;
  margin: 0 auto;
  .title{
    font-size: 16px;
    font-weight: 600;
    text-align: center;
    margin: 30px 0;
  }
  .web-wrapper{
    display: flex;
    flex-wrap: wrap;
    .web{
      width: 25%;
      display: flex;
      align-items: center;
      font-size: 14px;
      margin-bottom: 20px;
      .icon{
        display: block;
        width: 15px;
        height: 15px;
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
        background-color: #ececec;
        margin-right: 5px;
      }
    }
  }
}
</style>
