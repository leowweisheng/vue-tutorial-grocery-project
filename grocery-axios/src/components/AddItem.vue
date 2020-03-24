<template>
  <div id=app>
    <h1>Add Item Page</h1>
    <form id="fm1">
      <label>Item Category</label>
      <input type="text" v-model.lazy="item.category"/>
      <label>Item Name</label>
      <input type="text" v-model.lazy="item.name" required/>
      <button v-on:click.prevent="addItem">Add Item</button>
    </form>
  </div>
</template>

<script>
import database from '../firebase.js'
export default {
  data() {
    return {
      msg: "Add Item",
      item: {
        category: '',
        name: ''
      },
    }
  },

  methods: {
    addItem: function () {
        // Save item to database
        database.collection('itemList').doc().set(this.item);
        this.item.category = "";
        this.item.name = ""; 
      }
    }
  }
  </script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#app * {
  box-sizing: border-box;
}
#app {
  margin: 20px auto;
  max-width: 500px;
}
p {
  align-content: center;
  color: ivory;
}
label {
  display: inline-block;
  margin: 20px 0 10px;
  width: 50%;
  align-content: left;
}
input[type="text"] {
  display: inline-block;
  padding: 8px;
  width: 50%;
}
</style>