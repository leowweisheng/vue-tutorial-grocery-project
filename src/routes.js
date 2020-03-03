import PageContent from './components/PageContent.vue'
import AddItem from './components/AddItem.vue'
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

export default new VueRouter({
	mode: 'history',
	routes: [
		{ path: '/', component: PageContent},
		{ path: '/add', component: AddItem}
	]
})