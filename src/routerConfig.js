
import TodoList from './components/Todolist.vue'
import Test from './components/test.vue'

console.log(Test)

 export default[
 	{
 		path:'/:id',
 		meta: {
      		title: '首页'
   		 },
    	component:TodoList
 	},
 	{
 		path:'/test/:username',
		meta: {
      		title: '测试'
   		 },
 		component:Test
 	},
 	{
 		path:'*',redirect:'/todolist'
 	},
 	{
 		path:'/',redirect:'/todolist'
 	}

 ];


