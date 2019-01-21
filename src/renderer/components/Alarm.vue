<template>
  <div id="alarm"  class="content">
   
        <div class="input_list">
            <ul>
                <li> <span>报警提醒电话：</span><el-input v-model="alarm.tel" placeholder="请输入内容"></el-input></li>
                <li> <span>报警提醒邮箱：</span><el-input v-model="alarm.email" placeholder="请输入内容"></el-input></li>                    
            </ul>

             <el-button type="primary" class="save" @click="saveAlarm()">保存</el-button>
        </div>
  </div>
</template>

<script>
	import tools from '../model/tools.js';

    export default {
      name: 'alarm',

      data(){
          return {
                alarm:{}
          }
      },
      methods: {
        getAlarmList () {
              var userinfo=tools.storage.get('userinfo');
              var sign=tools.sign({
                'a':'alarmList',
                'uid':userinfo.id,
                'salt':userinfo.salt 
              })              
              var api=tools.config.apiUrl+'index.php?m=Api&a=alarmList&uid='+userinfo.id+'&sign='+sign;
           
              this.$http.get(api)
                .then( (response)=> {
                    this.alarm=response.data.result;
                })
                .catch( (error) =>{
                     this.$message({
                        message: error,
                        type: 'warning'
                      });
                });
        },
        saveAlarm(){
             var userinfo=tools.storage.get('userinfo');
              var sign=tools.sign({
                'a':'editAlarm',
                'uid':userinfo.id,
                'salt':userinfo.salt   
              })              
              // 建议正式项目中签名所有的字段 --- 更安全   
              
              // 执行提交数据
              this.$http.post(tools.config.apiUrl+'index.php?m=Api&a=editAlarm', {                  
                    tel:this.alarm.tel,
                    email:this.alarm.email,
                    uid:userinfo.id,                    
                    sign:sign   
                })
                .then( (response)=> {
                     console.log(response);

                    if(response.data.success){
                     this.$message({
                        message: '设置成功',
                        type: 'success'
                      });
                    }else{
                        this.$message({
                            message: '设置失败',
                            type: 'success'
                        });
                    }
                })
                .catch((error)=>{
                     this.$message({
                        message: error,
                        type: 'warning'
                      });
                });
        }
      },
      mounted() {
          //获取舆情报警信息
          this.getAlarmList();   
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
