/*散列 哈希类*/
function HashTable() {
	this.table = new Array(137); //长度为137的数组
	this.simpleHash = simpleHash; //将值转换为对应键值的方法
	this.showDistro = showDistro;
	this.put = put;
}
//散列函数
//入参是一个数组
//??字符串也能取到length 能的！！
function simpleHash(data) {
	var total = 0;
	for(var i = 0; i < data.length; i++){
		total += data.charCodeAt(i); //字符串中的每个值转化为unicode编码并且拼接
	}
	return total % this.table.length; //用计算得到的每个字符中字母转化为Unicode编码的值取余得到键值
}
//散列化整型数
/*
 *使用的数据集是学生的成绩
 *随机产生一个九位数的键
 *用来识别学生的身份和一门成绩
 *随机产生学生成绩和ID的方法
*/
//得到一个两位随机数
function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min +1)) + min;
}
function getStuData(arr) {
	for(var i = 0; i < arr.length; i++){
		var num = "";
		for(var j = 1; j <= 9; ++j){
			num += Math.floor(Math.random() * 10);
		}
		num += getRandomInt(50, 100);
		arr[i] = num;
	}
}
//键与值的统一
//修改该方法同时接受键和只作为参数
function put(key, data) {
	var pos = this.simpleHash(key);
	this.table[pos] = data;
}
//get方法用于获取某一键对应的值
function get(key) {
	return this.table[this.simpleHash(key)];
}
/*function put(data) {
	var pos = this.simpleHash(data);
	this.table[pos] = data;
}*/
function showDistro() {
	var n = 0;
	for(var i = 0; i < this.table.length; i++){
		if(this.table[i] != undefined) //键所对应的有值存在
			console.log(i + "  " + this.table[i]);
	}
}
var numStudents = 10;
var arrSize = 97;
var idlen = 9;
var students = new Array(numStudents); //生成长度为9的一个空数组
getStuData(students);
console.log("Student data: \n")
for(var i = 0; i < students.length; i++) {
	//console.log(students[i].substring(0,8) + " " + students[i].substring(9));
}
var hTable = new HashTable();
for(var i = 0; i < students.length; i++){
	hTable.put(students[i]);
}
hTable.showDistro();
var pnumbers = new HashTable();
var name, number;
for(var i = 0; i < 3; i++){

}
