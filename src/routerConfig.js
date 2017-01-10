
import TodoList from './components/Todolist.vue'
import Test from './components/test.vue'

console.log(Test)

 export default[
 	{
 		path:'/:id',component:TodoList
 	},
 	{
 		path:'/test/:username',component:Test
 	},
 	{
 		path:'*',redirect:'/todolist'
 	},
 	{
 		path:'/',redirect:'/todolist'
 	}

 ];


