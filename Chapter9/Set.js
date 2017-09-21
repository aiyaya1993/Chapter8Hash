//集合
function Set() {
	this.dataStore = []; //数据集
	this.add = add; //添加方法
	this.remove = remove; //删除方法
	this.show = show;
	this.contains = contains;
	this.union = union;
	this.interset = interset;
	this.subset = subset;
	this.length = length;
}
//添加方法
function add(ele) {
	var length = 0;
	if(this.dataStore.indexOf(ele) != 0){
		this.dataStore.push(ele);
		this.length++;
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
		//console.log("Exist");
		return true;
	}else{
		return false;
		//console.log("Not exist")
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
//交集
function interset(seta, setb) {
	var temSet = new Set();
	for(i in seta.dataStore){
		if(setb.contains(seta.dataStore[i])) {
			temSet.dataStore.push(seta.dataStore[i]);
			console.log(temSet.dataStore);
		}else{
			return true;
		}
	}
}
//求子集
//求B是不是A的子集
function subset(seta, setb) {
	if(seta.length < setb.length){
		console.log("不能构成子集关系")
	}else{
		for(i in setb.dataStore){
			if(seta.contains(setb.dataStore[i]) != true){
				console.log("不是子集关系")
			}else{
				console.log("B是A的子集");
			}
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
names2.add("Amy");
names2.subset(names,names2);
names.union(names2,names);
names2.interset(names2,names);
names.show();
