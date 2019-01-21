<template>
  <div id="report" class="content">
        <div class="main_top">
             <el-date-picker
              v-model="start_time"
              type="date"
              placeholder="选择日期">
            </el-date-picker>
              <el-date-picker
              v-model="end_time"
              type="date"
              placeholder="选择日期">
            </el-date-picker>
            <el-button type="primary">搜索</el-button>
        </div>
        <!-- 内容区域 -->
        <table class="electron-table">
            <tr>
                <th>标题/地址</th>
                <th width="100">舆情类型</th>
                <th width="100">舆情关键词</th>
                <th width="100">舆情网站</th>				
                <th width="200">发现时间</th>		
                <th width="200">帖子时间</th>	
            </tr>
              <tr>             
                  <td align="left">
                    大庆6个月拘留467名“马路杀手”
                  </td>
                  <td align="center">
                        <span class="red">负面消息</span>                                        
                  </td>	
                  <td align="center">油田</td>		
                  <td align="center">油田信息港</td>
                  <td align="center">2014-07-21 16:00:01</td>
                  <td align="center">1970-01-01 08:00:00</td>  
        </tr>          
          <tr>    
                  <td align="left">
                    大庆6个月拘留467名“马路杀手”
                  </td>
                  <td align="center">
                        <span class="red">负面消息</span>                                        
                  </td>	
                  <td align="center">油田</td>		
                  <td align="center">油田信息港</td>
                  <td align="center">2014-07-21 16:00:01</td>
                  <td align="center">1970-01-01 08:00:00</td>  
        </tr>          
          <tr>         
                  <td align="left">
                    大庆6个月拘留467名“马路杀手”
                  </td>
                  <td align="center">
                        <span class="red">负面消息</span>                                        
                  </td>	
                  <td align="center">油田</td>		
                  <td align="center">油田信息港</td>
                  <td align="center">2014-07-21 16:00:01</td>
                  <td align="center">1970-01-01 08:00:00</td>  
        </tr>          
          <tr>                   
                  <td align="left">
                    大庆6个月拘留467名“马路杀手”
                  </td>
                  <td align="center">
                        <span class="red">负面消息</span>                                        
                  </td>	
                  <td align="center">油田</td>		
                  <td align="center">油田信息港</td>
                  <td align="center">2014-07-21 16:00:01</td>
                  <td align="center">1970-01-01 08:00:00</td>  
        </tr>               
   </table>
    <div class="page">
      <el-pagination
        background
        layout="prev, pager, next"
        @current-change="pageChange($event)"
        :total="100">
      </el-pagination>
    </div>
  </div>
</template>
<script>
    export default {
      name: 'report',
      data(){
          return{
              start_time:'',
              end_time:''
          }
      },
      methods: {
        pageChange (e) {
          console.log(e);
        }
      }
    }
</script>

<style lang="scss">
 .main_top{
    background: none repeat scroll 0 0 #FFFCED;
    border: 1px solid #FFFCED;
    line-height: 20px;
    padding: 10px;
    margin-bottom: 10px;
    overflow: hidden;

 }
 .page{
   text-align: center;
   margin-top:20px;
 }
</style>
