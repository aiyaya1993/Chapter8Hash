//集合
function Set() {
	this.dataStore = []; //数据集
	this.add = add; //添加方法
	this.remove = remove; //删除方法
	this.show = show;
	this.contains = contains;
	this.union = union;
}
//添加方法
function add(ele) {
	if(this.dataStore.indexOf(ele) != 0){
		this.dataStore.push(ele);
		return true;
	}else {
		return false;
	}
}
//删除操作
function remove(ele) {
	var pos = this.dataStore.indexOf(data); //indexof返回某元素在数组中首次出现的位置
	if(pos>-1) { //存在
		this.dataStore.splice(pos,1);
		return true;
	} else{
		return false;
	}
}
//展示所有元素
function show() {
	//console.log(this.dataStore);
	for(i in this.dataStore){
		console.log(i + "  " + this.dataStore[i]);
	}
}
//检查一个元素是否在集合中
function contains(ele) {
	if(this.dataStore.indexOf(ele) > -1){
		console.log("Exist");
	}else{
		console.log("Not exist")
	}
}
/*function contains(ele) {
	for(i in this.dataStore){
		if(this.dataStore[i] == ele){
			//console.log("Exist");
			return true;
		}else {
			console.log("not Exist");
			return false;
		}
	}
}*/
//并集
function union(seta, setb) {
	for(i in seta.dataStore){
		if(setb.contains(seta.dataStore[i])){
			console.log("Exist");
		}else{
			//console.log(i)
			setb.add(seta.dataStore[i]);
		}
	}
}
var names = new Set();
names.add("Tom");
names.add("Jerry");
names.add("Mike");
names.contains("a");
var names2 = new Set();
names2.add("Tom");
names.union(names2,names);
names.show();
