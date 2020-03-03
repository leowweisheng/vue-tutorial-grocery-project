<template>
	<div id=app>
		<h1>Add Item Page</h1>
		<form id="fm1">
			<label>Item Name</label>
			<input type="text"/>
			<label>Item Category</label>
			<input type="text"/>

		</form>
	</div>
</template>

<script>
export default {
	data(){
		return{
			msg:"Add Item"
		}
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#app *{
	box-sizing: border-box;
}
#app{
	margin: 20px auto;
	max-width: 500px;
}

p{
	align-content: center;
	color:ivory;
}
label{
	display: inline-block;
	margin: 20px 0 10px;
	width:50%;
	align-content:left;

}
input[type="text"]{
	display: inline-block;
	padding: 8px;
	width:50%;
}
</style>