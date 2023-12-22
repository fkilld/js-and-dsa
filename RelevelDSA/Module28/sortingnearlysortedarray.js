function swap(arr, a, b) {
    // this function will swap the elements in the array present at index a and b
    let temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
}

class MinHeap {
    // implementation of min heap
    constructor() {
        this.arr = [];
    }

    upheapify(idx) {
        /**
         * Time: O(logn)
         * Space: O(1)
         */
        while(idx > 0) { // till the time we dont reach the root
            let pi = Math.floor((idx - 1) / 2);
            if(this.arr[pi] < this.arr[idx]) break;
            swap(this.arr, idx, pi);
            idx = pi;
        }
    }

    insert(x) {
        /**
         * Time: O(logn)
         * Space: O(1)
         */
        this.arr.push(x);
        this.upheapify(this.arr.length - 1);
    }

    downHeapify(idx) {
        /**
         * Time: O(logn)
         * Space: O(1)
         */
        while(idx < this.arr.length) {
            let li = 2 * idx + 1;
            let ri = 2 * idx + 2;
            let smallest = idx;
            if(li < this.arr.length && this.arr[li] < this.arr[smallest]) {
                smallest = li;
            }
            if(ri < this.arr.length && this.arr[ri] < this.arr[smallest]) {
                smallest  = ri;
            }
            if(smallest == idx) {
                break;
            } else {
                swap(this.arr, idx, smallest);
                idx = smallest;
            }
        }
    }

    get() {
        /**
         * Time: O(1)
         * Space: O(1)
         */
        if(this.arr.length == 0) {
            console.log("heap is empty");
            return;
        }
        return this.arr[0];
    }

    remove() {
        swap(this.arr, 0, this.arr.length - 1);
        this.arr.pop();
        this.downHeapify(0);
    }

    isEmpty() {
        return this.arr.length == 0;
    }

    display() {
        console.log(this.arr);
    }
}

function sortNearlySortedArray(arr, k) {
    /**
     * Time: O(k + (n-k)logk)
     * Space: O(k)
     */
    let hp = new MinHeap();
    for(let i = 0; i < k+1; i++) {
        hp.insert(arr[i]);
    }
    let idx = 0;
    for(i = k + 1; i < arr.length; i++) {
        arr[idx++] = hp.get();
        hp.remove();
        hp.insert(arr[i]);
    }
    while(!hp.isEmpty()) {
        arr[idx++] = hp.get();
        hp.remove();
    }
}

arr = [2,6,3,12,56,8];
k = 3;
sortNearlySortedArray(arr, k);
console.log(arr);