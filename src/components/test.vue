<template>
<div>
	<button @click="change" class="btn btn-danger">跳转回去啦</button>
</div>
	
</template>
<script>
	export default {
		mounted(){
			this.get();
		},
		methods:{
			change:function (){
				this.$router.push('/home')
			},
			get:function(){
				this.$http.get('https://bird.ioliu.cn/joke').then(function(res){
						console.log(res.data[0]);
				})
				.catch(function(err){
						alert(err);
				})
			}
		}
	}
</script>