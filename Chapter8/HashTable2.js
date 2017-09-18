//哈希类
function HashTable() {
	this.hashTable = new Array(137); //数组存在数据
	this.simpleHash = simpleHash; //散列函数
	this.betterHash = betterHash;
	this.put = put;
	this.show = show;
	this.get = get;
}
//散列函数的实现 
function simpleHash(key) {
	var total = "";
	for(var i = 0; i < key.length; i++) {
		total += key[i].charCodeAt();
	}
	//console.log(total)
	return total % 137;
}
//优化散列函数 优化算法 减少冲突
function betterHash(key) {
	const H = 37;
	var total = 0;
  for(var i = 0; i < key.length; i++){
  	total += total*37 + key[i].charCodeAt();
  }
  total = total % 137;
  return parseInt(total);
}
//put方法把索引和键对应的值相对应
/*function put(key) {
	//var pos = simpleHash(key)
	var pos = betterHash(key);
	this.hashTable[pos] = key;
}*/
/*优化put方法 同时接受键和数据*/
function put(key, data) {
	var pos = betterHash(key);
	console.log(pos)
	console.log(data)
	this.HashTable[pos] = data;
}
//get方法用于获取数组中的数据
function get(key) {
	return this.table[this.betterHash(key)];
}
//展示所有数组中的索引和值
function show(arr) {
	for(var i = 0; i < 137; i++){
		if(arr[i] != undefined){
			console.log("索引" + i +"\n" + "值" + arr[i]);
		}
	}
}
/*var a = new Array();
 a = [amy: 0,eason: 1,apple: 2,blue: 3,world: 4];
var tTable = new HashTable();*/
/*for(key in a){
	console.log(key);
}*/
/*for(var i = 0; i < a.length; i++){
	tTable.put(a[i]);
}*/
//tTable.show(tTable.hashTable);
var tTable = new HashTable();
var b = new Array();
b["i"] = 90;
b["u"] = 80;
var tTable = new HashTable();
//for(key in b) {
	//console.log(key + " " + b[key]);
	tTable.put("i", b["i"]);
//}