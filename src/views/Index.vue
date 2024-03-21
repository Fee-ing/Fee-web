<template>
  <div class="page">
    <div v-for="(item, index) in webConfig" :key="index">
      <div class="title">{{item.title}}</div>
      <div class="web-wrapper">
        <div class="web" v-for="(web, idx) in item.web" :key="idx" :title="web.desc">
          <img class="icon" v-if="web.icon" v-lazy="web.icon" />
          <a :href="web.url" target="_blank">{{web.name}}</a>
        </div>
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
        height: auto;
        background-color: #ececec;
        margin-right: 5px;
      }
      a{
        color: #333;
      }
    }
  }
}
</style>
