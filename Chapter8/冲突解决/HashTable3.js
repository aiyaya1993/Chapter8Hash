//哈希类
function HashTable() {
	this.hashTable = new Array(137); //数组存在数据
	this.simpleHash = simpleHash; //散列函数
	this.betterHash = betterHash;
	this.put = put;
	this.show = show;
	this.get = get;
	this.bulidChains = bulidChains;
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
/*function put(key) {*/
	//var pos = simpleHash(key)
	/*var pos = betterHash(key);
	var index = 0;
	while(this.hashTable[pos][index] == undefined){*/
		/*console.log("不冲突")
		console.log(this.hashTable[pos][index])*/
		/*this.hashTable[pos][index] = key;
		index++;
	  }*/
//}
	/*if(this.hashTable[pos][index] == undefined){
		this.hashTable[pos][index] = key;
	}
	else {
		while (this.hashTable[pos][index] != undefined){
			//++index; //二位数组往后移
			this.hashTable[pos][index+1] = key;
		}
	}*/
	
//优化put方法
function put(arr){
	var index = 0;
	for(var i = 0; i<arr.length; i++){
		var pos= this.betterHash(arr[i])
		if(this.hashTable[pos][index] == undefined){
			this.hashTable[pos][index] = arr[i]; 
			//console.log(pos + " " + index)
			index++;
		}
	}
}
/*优化put方法 同时接受键和数据*/
/*function put(key, data) {
	var pos = betterHash(key);
	console.log(pos)
	console.log(data)
	this.HashTable[pos] = data;
}*/
//get方法用于获取数组中的数据
function get(key) {
	return this.table[this.betterHash(key)];
}
//展示所有数组中的索引和值
/*function show(arr) {
	for(var i = 0; i < 137; i++){
		if(arr[i] != undefined){
			console.log("索引" + i +"\n" + "值" + arr[i]);
		}
	}
}*/
function show() {
	var n = 0;
	for(var i = 0; i < this.hashTable.length; ++i){
		if(this.hashTable[i][0] != undefined){
			console.log(i + " " + this.hashTable[i]);
		}
	}
}
//开链法解决冲突
function bulidChains() {
	for(var i = 0; i < this.hashTable.length; ++i){
		this.hashTable[i] = new Array();
		//console.log(this.hashTable)
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
var hTable = new HashTable();
hTable.bulidChains();
var someWords = ["a", "a", "a"];
/*for(var i = 0; i < someWords.length; i++){
	hTable.put(someWords[i]);
}*/
hTable.put(someWords);
hTable.show(hTable.hashTable);