<template>
  <div id="home">
    <highcharts :options="areaOptions"></highcharts>
  </div>
</template>

<script>
  // 饼图配置项
  const  areaOptions={
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
  
  export default {
    name: 'home',
    components: {

    },
    data() {
      return {
        areaOptions
      }
    },
    methods: {
      
    }
  }
</script>

<style lang="scss">
  
</style>
