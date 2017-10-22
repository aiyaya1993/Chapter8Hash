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
}

function show() {
	return this.data;
}

function BST() {
	this.root = null; //根节点默认我空
	this.insert = insert; //插入操作
	this.inOrder = inOrder;
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
//中序遍历
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

var nums = new BST();
nums.insert(23);
nums.insert(45);
nums.insert(16);
nums.insert(37);
nums.insert(3);
nums.insert(99);
nums.insert(22);
console.log(nums)
inOrder(nums.root);
preOrder(nums.root);

