const header = {
	template:`
	<div class=header>
		<a>Member To Do & Hava A Good Day</a>
	</div>
	`
}

const addModule = {
	template:`
	<form @submit="addList">
		<input v-model='inputTitle' type="text">
		<input type="submit" class="btn" value="Add to List">
	</form>
	`,
	props:["todoslen"],
	data(){
		return{
			inputTitle:''
		}
	},
	methods:{
		addList(e){
			e.preventDefault()
			const id = this.todoslen+1
			const title = this.inputTitle
			this.$emit('addlist', id, title)
			this.inputTitle = ''
		}
	}
}

const todoItem = {
	template:`
	<div class="todo-item" :class="{'is-complete':todo.completed}">
		<div class="control_window">
			<input type="checkbox" @change="onCheck" />
			<input type="button" class="del" @click="onDelete" value="X">
		</div>
		<div class="content_window">
			{{todo.person}}
		</div>
	</div>
	`,
	props:['todo'],
	methods:{
		onCheck(){
			this.todo.completed = ! this.todo.completed
		},
		onDelete(){
			const id = this.todo.id
			console.log('in kill item')
			this.$emit('delid', id)
		},
	},
}

const todoList = {
	template:`
	<div>
		<div class="todo-item-div" v-for="todo in todos">
			<todo-item :todo="todo" @delid="delId" />
		</div>
	</div>
	`,
	components:{'todo-item':todoItem},
	props:['todos'],
	methods:{
		delId(id){
			this.$emit("delid", id)
		}
	}
}

const app1 = new Vue({
	el: "#app1",
	components:{
		'top-banner' : header,
		'add-block' : addModule,
		'todo-list' : todoList, 
	},
	data:{
		todos : [
			{
				id:1,
				person:'go to park',
				completed:false,
			},
			{
				id:2,
				person:'go to zoo',
				completed:false,
			},
			{
				id:3,
				person:'go to home',
				completed:false,
			},
		],
	},
	methods:{
		delId(id){
			this.todos = this.todos.filter(todo=> { return todo.id != id})
		},
		addList(id, title){
			this.todos = [...this.todos, {id:id, person:title, completed:false}]
		}
	},
})