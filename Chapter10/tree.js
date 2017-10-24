/*
 *实现二叉树查找
 *较小值在左节点
 *较大值在右节点
*/
function Node(data, left, right) {
	this.data = data;
	this.left = left;
	this.right = right; //和其它节点的链接
	this.show = show;
	this.getMin = getMin;
	this.getMax = getMax;
	
}

function show() {
	return this.data;
}

function BST() {
	this.root = null; //根节点默认我空
	this.insert = insert; //插入操作
	this.inOrder = inOrder;
	this.find = find;
}

//定义插入方法 只针对一个节点来做左右的判断
function insert(data) {
	var n = new Node(data, null, null); //n为插入的节点
	//判断是否有根节点
	if(this.root == null) {
		//没有根节点 则为空树
		this.root = n;
	} else {
		//如果存在根节点则需要遍历二叉树 找到插入位置
		//根节点为当前节点做遍历
		var current = this.root;
		//定义父节点
		var parent;
		//while循环遍历
	  while(true) {
	  	parent = current; //以根节点作为父节点开始遍历
	  	//插入的数据比根节点小 则插入左节点
	  	//所谓遍历的奥义..在于
	  	if(data < current.data) {
	  		//将左节点作为当前节点 若为空则做插入
	  		current = current.left;
	  		if(current == null){
	  			parent.left = n;
	  			break;
	  		}
	  	}else {
	  		//右节点亦然
	  		current = current.right;
	  		if(current == null) {
	  			parent.right = n;
	  			break;
	  		}
	  	}
	  }

	}
}
//中序遍历 递归
function inOrder(node) {
	//左根右
	if( !(node == null )){
		inOrder(node.left);
		console.log( node.show() + " ");
		inOrder(node.right);
	}
}

//先序遍历
function preOrder(node) {
	//根左右
  if( !(node == null)) {
  	console.log( node.show() + " ");
  	inOrder(node.left);
  	inOrder(node.right);
  }
}

//后序遍历
function postOrder(node) {
	//左右根
	if( !(node == null)) {
  	inOrder(node.left);
  	inOrder(node.right);
  	console.log( node.show() + " ");
  }
}

//寻找二叉树中的最小值
function getMin(node) {
	var current = node;
	if( !(current.left == null) ){
		current = current.left;
		//console.log(current.data);
	}
console.log("最小值 " + current.data);
}
/*function getMin() {
	var current = this.root; //从根节点开始寻找
	while( !(current.left == null) ) {
		current = current.left;
	}
	console.log(current.data);
}*/
//寻找二叉树中的最大值
//遍历寻找一般用while循环不是if判断
function getMax(node) {
	var current = node;
	while( current.right != null ){
		current = current.right;
		
	}
	console.log("最大值 " + current.data);
}
//寻找给定值
/*function find(data) {
	var current = this.root;
	while( !(current.data == data) ) {
		//左右子树分开做判断
		if( current.data > data) {
			current = current.left;
		} else {
			current = current.right;
		}
		console.log(current)
		//return current;
	}
	console.log("没有找到")
}*/
function find(data) {
	var current = this.root;
	while( current != null) {
		if( current.data == data) {
			//console.log("找到了 "+ current.data);
			return current.data;
		}else if( current.data > data ) {
			current = current.left;
		}else {
			current = current.right;
		}
		//console.log(current.data);
	}

	return null;
}
var nums = new BST();
nums.insert(58);
nums.insert(10);
nums.insert(22);
nums.insert(30);
nums.insert(81);
nums.insert(92);
nums.insert(77);
//console.log(nums)
inOrder(nums.root);
preOrder(nums.root);
getMin(nums.root);
getMax(nums.root);
console.log(nums.find(5))


