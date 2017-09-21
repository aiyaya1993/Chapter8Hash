//集合
function Set() {
	this.dataStore = []; //数据集
	this.add = add; //添加方法
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