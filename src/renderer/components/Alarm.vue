<template>
  <div id="alarm"  class="content">
        <div class="input_list">
            <ul>
                <li> <span>报警提醒电话：</span><el-input v-model="tel" placeholder="请输入内容"></el-input></li>
                <li> <span>报警提醒邮箱：</span><el-input v-model="email" placeholder="请输入内容"></el-input></li>                    
            </ul>
             <el-button type="primary" class="save">保存</el-button>
        </div>
  </div>
</template>
<script>
    export default {
      name: 'alarm',
      data(){
          return {
            tel:"124214124",
            email:"124214124"
          }
      },
      methods: {
        open (link) {
          // this.$electron.shell.openExternal(link)
        }
      }
    }
</script>

<style lang="scss">
 #alarm{
        border:1px solid #eee;
        padding: 10px;
        width:100%;
        ul{
            list-style-type: none;
            li{
                display: flex;
                padding:10px 0px;
                span{
                    display:inline-block;
                    width:150px;
                    height: 40px;
                    line-height: 40px;
                    color:#666;
                }
                input{
                    flex:1;
                }
            }
        }
        .save{
            float: right;
            margin-right: 10px;
        }
    }
</style>
