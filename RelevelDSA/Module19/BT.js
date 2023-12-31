class Queue {
    constructor() {
        this.maxSize = 4; // total capacity of the queue
        this.size = 0; // how many elements are there
        this.arr = Array(this.maxSize);
        this.front = 0;
        this.rear = this.maxSize - 1;
    }

    isFull() {
        /**
         * Time: O(1)
         */
        return this.size == this.maxSize;
    }

    isEmpty() {
        /**
         * Time: O(1)
         */
        return this.size <= 0;
    }

    enqueue(data) {
        /**
         * Time: O(1)
         */
        if(!this.isFull()) {
            this.rear = (this.rear+1) % this.maxSize;
            this.arr[this.rear] = data;
            this.size++;
            // console.log(this.arr);
            return;
            
        }
        // console.log("resizing");
        
        let tempNewSize = this.maxSize*2;
        let temp = Array(this.tempNewSize);
        let i = 0;
        let newSize = 0;
        while(!this.isEmpty()) {
            temp[i] = this.getFront();
            this.dequeue();
            newSize++;
            i++;
        }
        // console.log(this.arr)
        // console.log("temp", temp)
        // return;
        temp[i] = data;
        newSize++;
        this.arr = temp;
        this.size = newSize;
        this.front = 0;
        this.rear = newSize-1;
        this.maxSize*=2;
        // console.log("resizwe",temp);
    }

    dequeue() {
        /**
         * Time: O(1)
         */
        if(!this.isEmpty()) {
            this.size--;
            this.front = (this.front+1)%this.maxSize;
            return;
        }
        console.log("Cannot remove from an empty queue");
    }

    getFront() {
        /**
         * Time: O(1)
         */
        if(!this.isEmpty()) {
            return this.arr[this.front];
        }
        console.log("Queue is empty");
        return null;
    }
    display() {
        console.log(this.arr);
    }
}

class Node {
    constructor (data) {
        this.data = data; // this property stores the actual value of the node
        this.left = null; // this property will store reference to the left child node, currently there is no child so value is null
        this.right = null; // this property will store reference to the right child node, currently there is no child, so value is null
    }
}

function preOrder(root) {
    /**
     * Time: O(n)
     * Space: O(n) due to possibility of skewed trees
     */
    if(root == null) {
        // somehow by iterating we came to an empty node
        return;
    }
    console.log(root.data); // self work: print root before lst and rst
    preOrder(root.left); // we know only how to print root, so recursively anyhow print preorder of lst
    preOrder(root.right); // we know only how to print root, so recursively anyhow print preorder of rst
}

function inOrder(root) {
    /**
     * Time: O(n)
     * Space: O(n) due to possibility of skewed trees
     */
    if(root == null) return;
    inOrder(node.left);// we know only how to print root, so recursively anyhow print inorder of lst
    console.log(root.data); // self work: print root after lst and before rst
    inOrder(root.right);// we know only how to print root, so recursively anyhow print inorder of rst
}

function postOrder(root) {
    /**
     * Time: O(n)
     * Space: O(n) due to possibility of skewed trees
     */
    if(root == null) return; // base case
    postOrder(root.left); // we know only how to print root, so recursively anyhow print postorder of lst
    postOrder(root.right);// we know only how to print root, so recursively anyhow print postorder of rst
    console.log(root.data);// self work: print root after lst and rst
}

function levelOrder(root) {
    /**
     * Time: O(n)
     * Space: O(n)
     */
    let qu = new Queue();
    qu.enqueue(root);
    while(!qu.isEmpty()) {
        let curr = qu.getFront();
        qu.dequeue();
        console.log(curr.data);
        if(curr.left) {
            // the node has a left child
            qu.enqueue(curr.left);
        }
        if(curr.right) {
            // the node has a right child
            qu.enqueue(curr.right);
        }
    }
}

function levelOrderLevelWise(root) {
    /**
     * Time: O(n)
     * Space: O(n)
     */
    let qu = new Queue();
    qu.enqueue(root);
    qu.enqueue(null);
    let result = "";
    while(!qu.isEmpty()) {
        let curr = qu.getFront();
        qu.dequeue();
        if(curr != null) {
            result += curr.data + " "
            // console.log(curr.data)
            // process.stdout.write(" " + curr.data);
        }
        if(curr == null) {
            if(!qu.isEmpty()) {
                result += "\n";
                // console.log()
                qu.enqueue(null);
                // console.log(qu.getFront())
            }
            continue;
        }
        if(curr.left) {
            // the node has a left child
            qu.enqueue(curr.left);
        }
        if(curr.right) {
            // the node has a right child
            qu.enqueue(curr.right);
        }
    }
    console.log(result);
}

function height(root) {
    /**
     * Time: O(n)
     * Space: O(n) for the case of a skewed tree
     */
    if(root == null) return 0;
    return 1 + Math.max(height(root.left), height(root.right));
}

function rightView(root) {
    /**
     * Time: O(n)
     * Space: O(n)
     */
    let qu = new Queue();
    qu.enqueue(root);
    qu.enqueue(null);
    let lastReadNode = root;
    // let result = "";
    while(!qu.isEmpty()) {
        let curr = qu.getFront();
        qu.dequeue();
        if(curr != null) {
            lastReadNode = curr;
            // result += curr.data + " "
            // console.log(curr.data)
            // process.stdout.write(" " + curr.data);
        }
        if(curr == null) {
            if(!qu.isEmpty()) {
                // result += "\n";
                // console.log()
                console.log(lastReadNode.data)
                qu.enqueue(null);
                // console.log(qu.getFront())
            }
            continue;
        }
        if(curr.left) {
            // the node has a left child
            qu.enqueue(curr.left);
        }
        if(curr.right) {
            // the node has a right child
            qu.enqueue(curr.right);
        }
    }
    console.log(lastReadNode.data)
    // console.log(result);
    // console.log(result);
}

let maxLevel = -1;
function rightViewDFS(root, level) {
    if(root == null) return;
    if(maxLevel < level) {
        maxLevel = level;
        console.log(root.data);
    }
    rightViewDFS(root.right, level+1);
    rightViewDFS(root.left, level+1);
}

function leftViewDFS(root, level) {
    if(root == null) return;
    if(maxLevel < level) {
        maxLevel = level;
        console.log(root.data);
    }
    leftViewDFS(root.left, level+1);
    leftViewDFS(root.right, level+1);
}

let root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);
root.right.left = new Node(6);
root.left.left.left = new Node(7);
root.left.left.right = new Node(8);
root.left.right.left = new Node(9);
root.right.left.right = new Node(10);
root.left.left.left.right = new Node(11);

// console.log(root);;
// levelOrderLevelWise(root);
// console.log(height(root));
leftViewDFS(root, 0);