<template>
  <div id="keywords"  class="content">


 <!-- 增加关键词 -->
        <div class="main_top">
            <el-button type="primary" @click="dialogFormVisible = true">增加关键词</el-button>            

            <el-dialog title="增加关键词" :visible.sync="dialogFormVisible">
              <el-form>
                     <el-form-item label="必须包含关键词" label-width="120px">
                        <el-input v-model="addForm.keyword" auto-complete="off"></el-input>
                    </el-form-item>

                     <el-form-item label="可包含关键词" label-width="120px">
                        <el-input v-model="addForm.may_keyword" auto-complete="off"></el-input>
                    </el-form-item>
                     <el-form-item label="不包含关键词" label-width="120px">
                        <el-input v-model="addForm.nokeyword" auto-complete="off"></el-input>
                    </el-form-item>

                     <el-form-item label="监控评率" label-width="120px">
                        <el-input v-model="addForm.frequency" auto-complete="off"></el-input>
                    </el-form-item>
                
              </el-form>
              <div slot="footer" class="dialog-footer">
                <el-button @click="dialogFormVisible = false">取 消</el-button>
                <el-button type="primary" @click="doAddKeywords()">确 定</el-button>
              </div>
            </el-dialog>
        </div>


<!-- 增加关键词完成 -->


<!-- 修改关键词开始 -->
      <el-dialog title="修改关键词" :visible.sync="eidtDialogVisible">
          <el-form>
                  <el-form-item label="必须包含关键词" label-width="120px">
                    <el-input v-model="editForm.keyword" auto-complete="off"></el-input>
                </el-form-item>

                  <el-form-item label="可包含关键词" label-width="120px">
                    <el-input v-model="editForm.may_keyword" auto-complete="off"></el-input>
                </el-form-item>
                  <el-form-item label="不包含关键词" label-width="120px">
                    <el-input v-model="editForm.nokeyword" auto-complete="off"></el-input>
                </el-form-item>

                  <el-form-item label="监控评率" label-width="120px">
                    <el-input v-model="editForm.frequency" auto-complete="off"></el-input>
                </el-form-item>
            
          </el-form>
          <div slot="footer" class="dialog-footer">
            <el-button @click="closeModal()">取 消</el-button>
            <el-button type="primary" @click="doEditKeywords()">确 定</el-button>
          </div>
        </el-dialog>

      <!-- 修改关键词完成 -->

      <!-- 关键词列表开始 -->

        <table class="electron-table">
            <tr>
               
			        	<th>必须包含词</th>
                <th>可包含词</th>
				        <th>不包含词</th>            
                <th width="60">监控频率</th>	             
                <th width="100">操作</th>	
            </tr>
            <tr v-for="item in list" :key="item.id">
        	    
              <!--<td align="center"></td>-->
              <td align="center">{{item.keyword}}</td>
              <td align="center">{{item.may_keyword}}</td>              
              <td align="center">
               {{item.nokeyword}}
              </td>				   
              <td align="center">
                  {{item.frequency}}
                
                </td>             
              <td align="center">
               
                <span class="blue"  @click="editKeywords(item.id)">编辑</span>　　
                
                　

               <span class="blue"  @click="removeKeywords(item.id)">删除</span>　

                
              </td>
            </tr>           

        </table>

  <!-- 关键词列表完成 -->
  </div>
</template>

<script>

	//引入tools模块

	  import tools from '../model/tools.js';

    export default {
      name: 'keywords',

      data(){

        return{

          dialogFormVisible:false,
          eidtDialogVisible:false,/*编辑的数据*/
          addForm:{},
          editForm:{},   /*修改的数据*/
          list:[]
        
        }
      },
      
      methods: {      
        closeModal() {
           this.dialogFormVisible=false;
        },
        doAddKeywords(){

            // console.log(this.form.keyword);

              var userinfo=tools.storage.get('userinfo');

              var sign=tools.sign({
                'a':'addKeywords',
                'uid':userinfo.id,
                'salt':userinfo.salt   //私钥       不要传到url中
              })              
              // 建议正式项目中签名所有的字段 --- 更安全   
              
              // 执行提交数据
              this.$http.post(tools.config.apiUrl+'index.php?m=Api&a=addKeywords', {                  
                    keyword:this.addForm.keyword,
                    may_keyword:this.addForm.may_keyword,
                    nokeyword:this.addForm.nokeyword,
                    frequency:this.addForm.frequency,
                    uid:userinfo.id,                    
                    sign:sign   //签名
                })
                .then( (response)=> {
                    console.log(response);

                    if(response.data.success){

                      this.dialogFormVisible=false;

                      //增加完成重新获取数据
                      this.getKeywordsList();
                    }else{

                      this.$message({
                        message: response.data.message,
                        type: 'warning'
                      });
                    }
                })
                .catch((error)=>{
                     this.$message({
                        message: error,
                        type: 'warning'
                      });
                });
        },

        getKeywordsList(){

              var userinfo=tools.storage.get('userinfo');

              var sign=tools.sign({
                'a':'keywordsList',
                'uid':userinfo.id,
                'salt':userinfo.salt   //私钥       不要传到url中
              })              
              var api=tools.config.apiUrl+'index.php?m=Api&a=keywordsList&uid='+userinfo.id+'&sign='+sign;
           
              this.$http.get(api)
                .then( (response)=> {
                    // console.log(response);

                    this.list=response.data.result;

                })
                .catch( (error) =>{
                     this.$message({
                        message: error,
                        type: 'warning'
                      });
                });


        },
        editKeywords(id){
            // alert(id);

             this.eidtDialogVisible=true;


            //请求api接口获取要编辑的数据
           
              var userinfo=tools.storage.get('userinfo');
              var sign=tools.sign({
                'id':id,
                'a':'oneKeywordsList',
                'uid':userinfo.id,
                'salt':userinfo.salt   //私钥       不要传到url中
              })              
              var api=tools.config.apiUrl+'index.php?m=Api&a=oneKeywordsList&id='+id+'&uid='+userinfo.id+'&sign='+sign;
           
              this.$http.get(api)
                .then( (response)=> {
                    // console.log(response);

                    this.editForm=response.data.result;

                })
                .catch( (error) =>{
                     this.$message({
                        message: error,
                        type: 'warning'
                      });
                });

          
        }, 
        //执行编辑操作
        doEditKeywords(){

              console.log(this.editForm);


              var userinfo=tools.storage.get('userinfo');

              var sign=tools.sign({
                'id':this.editForm.id,
                'a':'editKeywords',
                'uid':userinfo.id,
                'salt':userinfo.salt   //私钥       不要传到url中
              })              
             
              // 执行提交数据
              this.$http.post(tools.config.apiUrl+'index.php?m=Api&a=editKeywords', {   
                    id:this.editForm.id,              
                    keyword:this.editForm.keyword,
                    may_keyword:this.editForm.may_keyword,
                    nokeyword:this.editForm.nokeyword,
                    frequency:this.editForm.frequency,
                    uid:userinfo.id,                    
                    sign:sign   //签名
                })
                .then( (response)=> {
                    console.log(response);

                    if(response.data.success){

                      this.eidtDialogVisible=false;
                      //增加完成重新获取数据
                      this.getKeywordsList();
                    }else{

                      this.$message({
                        message: response.data.message,
                        type: 'warning'
                      });
                    }
                })
                .catch((error)=>{
                     this.$message({
                        message: error,
                        type: 'warning'
                      });
                });


        },
        removeKeywords(id){

              var userinfo=tools.storage.get('userinfo');

              var sign=tools.sign({
                'id':id,
                'a':'removeKeywords',
                'uid':userinfo.id,
                'salt':userinfo.salt   //私钥       不要传到url中
              })    
             
              this.$http.post(tools.config.apiUrl+'index.php?m=Api&a=removeKeywords', {   
                    id:id,  
                    uid:userinfo.id,                    
                    sign:sign   //签名
                })
                .then( (response)=> {
                    console.log(response);
                    if(response.data.success){
                      //增加完成重新获取数据
                      this.getKeywordsList();
                    }else{

                      this.$message({
                        message: response.data.message,
                        type: 'warning'
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
        this.getKeywordsList();
      }
    }
</script>

<style lang="scss">
 .blue{

   color: blue;
   cursor: pointer;
 }
</style>
