*<template>
	<div>
		<ul>
			<li v-for="item in itemsList" v-bind:key="item.name" >
				<h2 v-on:click="item.show = !item.show">{{item.name}}</h2>
				<img v-bind:src="item.image" v-show="item.show"/>
				<buttonComponent></buttonComponent>
			</li>
		</ul>
	</div>
</template>


<script>
import ButtonComponent from './ButtonComponent.vue'
export default {
	data(){
		return{
			itemsList: [{name:'Eggs',image:'./assets/eggs.jpg',show:false},
			{name:'Bread',image:'/assets/bread.jfif',show:false},
			{name:'Jam',image:'/assets/jam.jfif',show:false},
			{name:'CornFlakes',image:'/assets/cornflakes.jfif',show:false},
			{name:'Milk',image:'/assets/milk.jfif',show:false},
			{name:'Juice',image:'/assets/juice.jfif',show:false}]
		}
	},
	components:{
		'buttonComponent':ButtonComponent
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
header{
	background:rgb(122, 63, 100);
	padding:10px;
	border-style: solid;
	border-color:black;
	border-width: 2px;
}
h1{
	color:ivory
}
h2{
	text-align: center
}
#itemsList{
	width: 100%;
	max-width: 1200px;
	margin: 30px auto;
	padding: 0 5px;
	box-sizing: border-box;
}
ul{
	display: flex;
	flex-wrap: wrap;
	list-style-type: none;
	padding: 0;
}
li{
	flex-grow: 1;
	flex-basis: 300px;
	text-align: center;
	padding: 10px;
	border: 1px solid #222;
	margin: 10px;
}
img{
	width:100px;
	height:100px;
}
</style>