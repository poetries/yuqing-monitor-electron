<template>
  <div id="home"  class="content">
        <highcharts :options="areaOptions"></highcharts>
        <highcharts :options="columnOption"></highcharts>
				<!-- 登录页面 -->
			<el-dialog title="登录" :close-on-click-modal="false" :close-on-press-escape="false" :show-close="false" :center="true" :visible.sync="dialogFormVisible">
				<el-form>
					<el-form-item>
						<el-input v-model="userinfo.username" placeholder="用户名"></el-input>
					</el-form-item>
					<el-form-item>
						<el-input v-model="userinfo.password" placeholder="密码"></el-input>
					</el-form-item>
				</el-form>
				<div slot="footer" class="dialog-footer">			
					<el-button style="width:80%" type="primary" @click="doLogin()">确 定</el-button>
				</div>
			</el-dialog>
  </div>
</template>
<script>
  var areaOptions={
			chart: {
					plotBackgroundColor: null,
					plotBorderWidth: null,
					plotShadow: false,
					type: 'pie',
					backgroundColor: '#eeeeee'
			},
			credits:{
			     enabled: false // 禁用版权信息
			},
			title: {
					text: '全国人口分布图'
			},
			tooltip: {
					pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
			},
			plotOptions: {
					pie: {
							allowPointSelect: true,
							cursor: 'pointer',
							dataLabels: {
									enabled: true,
									format: '<b>{point.name}</b>: {point.percentage:.1f} %',
									// style: {
									// 		color: (this.$Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
									// }
							}
					}
			},
			series: [{
					name: '分布比例',
					colorByPoint: true,
					data: [{
							name: '深圳',
							y: 614111,
							sliced: true,
							selected: true
					}, {
							name: '北京',
							y: 213111
					}, {
							name: '上海',
							y: 213111
					}, {
							name: '武汉',
							y: 613111
					}, {
							name: '广州',
							y:813111
					}]
			}]
	};

//柱状图
var columnOption={
	    chart: {
	        type: 'column'
	    },
	    title: {
	        text: '舆情数量统计'
	    },
	    subtitle: {
	        text: '数据来源: itying.com'
	    },
	    xAxis: {
	        categories: [
	            '一月','二月','三月','四月','五月','六月','七月','八月','九月','十月','十一月','十二月'
	        ],
	        crosshair: true
	    },
	    yAxis: {
	        min: 0,
	        title: {
	            text: '舆情数量'
	        }
	    },
	    tooltip: {
	        // head + 每个 point + footer 拼接成完整的 table
	        headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
	        pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
	        '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
	        footerFormat: '</table>',
	        shared: true,
	        useHTML: true
	    },
	    plotOptions: {
	        column: {
	            borderWidth: 0
	        }
	    },
	    series: [{
	        name: '正面',
	        data: [49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4],
	        
	        color: 'blue'
	    }, {
	        name: '负面',
	        data: [83.6, 78.8, 98.5, 93.4, 106.0, 84.5, 105.0, 104.3, 91.2, 83.5, 106.6, 92.3],
	        color:'red'
	    }]
  }
  
	import tools from '../model/tools.js';

	export default {
		name: 'home',
		data(){
			return{
				areaOptions:areaOptions,
				columnOption:columnOption,		  
				dialogFormVisible:false,
				userinfo:{}
			}
		},
	  //刚加载页面的时候
	  beforeMount() {
			//判断用户有没有登录
			var userinfo=tools.storage.get('userinfo')
			if(userinfo){
				this.dialogFormVisible=false;
			}else{
				this.dialogFormVisible=true;
			}
	  },
      methods: {
        doLogin () {
			//获取用户名密码
			// console.log(this.userinfo.username);
			//请求api接口实现登录
			// 实际地址：http://www.apiying.com/yuqing/index.php?m=Api&a=log
			if(this.userinfo.username && this.userinfo.password){
				this.$http.post(tools.config.apiUrl+'index.php?m=Api&a=login', {
					username: this.userinfo.username,
					password: this.userinfo.password
				})
				.then((response)=>{
					// console.log(response);
					response=response.data;
					if(response.success){
							//保存用户信息					
							tools.storage.set('userinfo',response.result);
							this.dialogFormVisible=false;
					}else{
						this.$message({
							message: response.message,
							type: 'warning'
						});
					}
				})
				.catch(function (error) {
					console.log(error);
				});
			}else{
					this.$message({
							message: '用户名密码不能为空',
							type: 'warning'
					});
			}
        }
      }
    }
</script>

<style lang="scss">
 
</style>
