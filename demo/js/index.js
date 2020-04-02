var app = new  Vue({
	el:'#app',
	data:{
		// +new Date().toLocaleString()
		message:'hello Vue',
		name:[
			{item:'1号'},
			{item:'2hao'},
			{item:'3hao'}
		]
	},
	methods:{
		btn:function(){
			this.message=this.message.split('').reverse().join('');
		}
	}
});
app.name.push({item:'sdfksdjfskd'});
var font = new Vue({
	el:'#font',
	data:{
		seen:false
	}
});

Vue.component('todo-item',{
	props:['todo'],
	template:'<li>{{todo.text}}</li>'
})
var app7 = new Vue({
	el:"#app-7",
	data:{
		fruitList:[{id:0,text:'芒果'},{id:1,text:'香蕉'},{id:2,text:'西瓜'}]
	}
});

//注册组装
// Vue.component('todo-item',{
// 	props:['todo'],
// 	template:'<li>{{todo.text}}</li>'
// })
// var napp= new Vue({
// 	el:"#napp",
// 	data:{
// 		nList:[{id:0, text:'展示'},{id:1,text:'这些都是什么东西'},{id:2,text:'infomarnation'}]
// 	}
// })



