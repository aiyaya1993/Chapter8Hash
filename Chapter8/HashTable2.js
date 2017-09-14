/*散列 哈希类*/
function HashTable() {
	this.table = new Array(137); //长度为137的数组
	//this.simpleHash = simpleHash; //将值转换为对应键值的方法
	this.betterHash = betterHash;
	this.showDistro = showDistro;
	this.put = put;
	this.get = get;
	this.bulidChains = bulidChains;
}
//散列函数
//入参是一个数组
//??字符串也能取到length 能的！！
/*function simpleHash(data) {
	var total = 0;
	for(var i = 0; i < data.length; i++){
		total += data.charCodeAt(i); //字符串中的每个值转化为unicode编码并且拼接
	}
	return total % this.table.length; //用计算得到的每个字符中字母转化为Unicode编码的值取余得到键值
}*/
/*
 * string = 'abc'
 * total = 37 * total + 'abc'(ascii)
 * total % 137
*/
function betterHash(string) {
	const H = 37;
	var total = 0;
	for(var i = 0; i < string.length; i++){
		total += H * total + string.charCodeAt(i);
	}
	total = total % this.table.length;
	if(total < 0) {
		total += this.table.length - 1;
	}
	return parseInt(total);
}
//散列化整型数
//键与值的统一
//修改该方法同时接受键和只作为参数
function put(data) {
	var pos = this.betterHash(data);
	this.table[pos] = data;
}
//get方法用于获取某一键对应的值
function get(key) {
	return this.table[this.betterHash(key)];
}
/*function put(data) {
	var pos = this.simpleHash(data);
	this.table[pos] = data;
}*/
function showDistro() {
	var n = 0;
	for(var i = 0; i < this.table.length; i++){
		if(this.table[i][0] != undefined) //键所对应的有值存在
			console.log(i + "  " + this.table[i]);
	}
}
//碰撞处理 开链法
function bulidChains() {
	for(var i = 0; i < this.table.length; i++){
		this.table[i] = new Array();
	}
}
var hTable = new HashTable();
hTable.bulidChains();
var someNames = ["Alexander","Benjamin","Burke","Cliff","Devin","Amy","Alice","Mary"];
for(var i = 0; i < someNames.length; i++){
	hTable.put(someNames[i]);
}
hTable.showDistro();

