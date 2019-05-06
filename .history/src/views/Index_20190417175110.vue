<template>
  <div class="page">
    <input class="input" type="text" v-model="message">
    <button class="button" @click="send">发送</button>
  </div>
</template>

<script>
import { Realtime, TextMessage } from 'leancloud-realtime'
import { leancloudAppConfig } from '@/config/leancloud'

export default {
  name: 'Index',
  components: {
    
  },
  data () {
    return {
      message: '',
      chatRoom: null
    }
  },
  methods: {
    send () {
      let that = this
      if (this.message === '') {
        return
      }
      this.chatRoom.send(new TextMessage(that.message))
      this.message = ''
    }
  },
  mounted () {
    let room = this.$route.query.room || ''
    let that = this
    let realtime = new Realtime(leancloudAppConfig)
    realtime.createIMClient('13197307071').then((user) => {
      user.getChatRoomQuery().equalTo('objectId', room).find().then(chatRooms => {
        if (chatRooms.length) {
          let chatRoom = chatRooms[0]
          chatRoom.join()
          that.chatRoom = chatRoom
        }
      })
    }).catch(console.error)
  }
}
</script>

<style lang="less" scoped>
.page{
  display: flex;
  .input{
    flex: 1;
    height: 6rem;
  }
  .button{
    height: 6rem;
    width: 10rem;
  }
}
</style>

