<template>
<div class="box" id="Todolist">
<div class="box-header with-border">
    

    <form role="form" class="form-inline">
        <div class="form-group">
            <label for="username">用户名</label>
            <input type="text" id="username" class="form-control" v-model="name"/>
        </div>
        <div class="form-group">
            <label for="age">用户名</label>
            <input type="text" id="age" class="form-control" v-model="age"/>
        </div>
        <div class="form-group">
            <input type="button" value="添加" class="btn btn-primary" @click="add()"/>
            <input type="reset" value="重置" class="btn btn-danger"/>
        </div>
    </form>
    </div>

    <div class="box-body">
        
    
    <table class="table table-bordered table-hover">
        <caption class="h2 text-info">用户信息表</caption>
        <thead>
        <tr class="text-center">
            <th class="text-center">序号</th>
            <th class="text-center">名字</th>
            <th class="text-center">年龄</th>
            <th class="text-center">操作</th>
        </tr>
        </thead>
        <tbody>
        <tr class="text-center" v-for="(value,index) in myData">
            <td>{{index+1}}</td>
            <td>{{value.name}}</td>
            <td>{{value.age}}</td>
            <td>
                <!--<button class="btn btn-danger btn-sm"  @click="myData.splice(index,1)">删除</button>-->
                <button class="btn btn-danger btn-sm" data-toggle="modal" data-target="#layer" @clcik="nowIndex=index">删除</button>
            </td>
        </tr>
        <tr v-show="myData.length!=0">
            <td colspan="4" class="text-right">
                <button class="btn btn-danger btn-sm" data-toggle="modal" data-target="#layer" @clcik="nowIndex=-2" >删除全部</button>
            </td>
        </tr>
        </tbody>
        <tfoot>
        <tr v-show='myData.length==0'>
            <td colspan="4" class="text-center text-muted" >
                <p>暂无数据.....</p>
            </td>
        </tr>
        </tfoot>
    </table>
</div>
    <!--模态框-->
    <div role="dialog" class="modal fade bs-example-modal-sm" id="layer">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h4 class="modal-title">确认删除么？</h4>
                    <button class="close" data-dismiss="modal"></button>

                </div>
                <div class="modal-body">
                    <button class="btn btn-primary btn-sm" data-dismiss="modal">取消</button>
                    <button class="btn btn-danger btn-sm" @click="remote(nowIndex)">确认</button>

                </div>

            </div>

        </div>

    </div>
</div>
</template>
<script>
	export default{
		name:'Todolist',
			data(){
				return {
					myData:[],
		            name:'',
		            age:'',
		            nowIndex:''
				}
			},
			methods:{
            add:function(){

                this.myData.push({name:this.name,age:this.age});
                this.name='';
                this.age='';

            },
            remote:function(n){
                if(n==-2){
                    this.myData.length=0;
                }else{

                    this.myData.splice(n,1);
                }

                $('#layer').hide();
                $('.modal-backdrop').hide();

            }
        }
	}

</script>