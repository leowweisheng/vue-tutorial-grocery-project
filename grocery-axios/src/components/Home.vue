<template>
  <div id="main">
    <div id="chart">
      <charts></charts>
    </div>
    
    <div id="chart">
      <doughnut></doughnut>
    </div>
    
    <div id="chart">
      <linechart></linechart>
    </div>

    <div id="chart">
      <pie></pie>
    </div>
  </div>
</template>

<script>
import charts from '../charts.js'
import doughnut from '../doughnut.js'
import linechart from '../linechart.js'
import pie from '../pie.js'
export default {
  components:{
    charts,
    doughnut,
    linechart,
    pie
  }

}
</script>

<style scoped>
#main {
  content:"";
  display:table;
  clear:both;
}
#chart {
  height:240px;
  width:240px;
  border-style: solid;
  border-color:rgb(155, 84, 84);
  border-width: 1px;
  padding:30px;
  float:left;
}
</style>