import {Line} from 'vue-chartjs'
import axios from 'axios'

export default{
  extends:Line,
  data: () => ({
    results:[],
    chartdata: {
      labels:[],
      datasets: [
      {
        label: 'Covid-19 Total Cases in U.S.',
        data:[],
        borderWidth:0.5,
        borderColor:"magenta",
        backgroundColor:'orange',
        fill:false
      }
      ]

    },
    options: {


    }
  }),
  methods:{

    fetchData : function(){
      axios.get('https://covid19.soficoop.com/country/us').then(response=>{
        for (var i = 0; i < response.data.snapshots.length; i++) {
          this.results=response.data.snapshots[i]
          this.chartdata.datasets[0].data.push(this.results.cases)
          this.chartdata.labels.push(this.results.timestamp.slice(0, 10))
        }
        
        this.renderChart(this.chartdata,this.options)

      })

    }
    
  },
  mounted(){
       // console.log('Do I come here')
       this.fetchData()

     }




   }