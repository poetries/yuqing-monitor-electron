<template>
  <div id="msg"  class="content">
      <el-row>
        <el-button type="success" @click="sendMsg">发送消息</el-button>
    </el-row>
  </div>
</template>

<script>
    export default {
      name: 'msg',

      data(){
          return {
          }
      },
      methods: {
          sendMsg() {
              //和服务器建立长连接
                var socket = io.connect('http://118.123.14.36:3000');

                //接收服务器返回的信息
                socket.on('serverEmit',function(data){
                    console.log(data);
                });
                //发送消息
                socket.emit('sendNews',{
                    "title":"李克强会见美国客人：中方将继续成为外国投资的热土",
                     "url":"https://www.chinanews.com/gn/2018/09-07/8621613.shtml"
                });
          }
      }
    }
</script>

<style lang="scss">
</style>
