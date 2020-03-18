class _Node {
    constructor(element) {
        this.value = element;
        this.next = null;
    }
}

class LinkedList{
    constructor(){
        this.head = null;
        this.size = 0;
    }

    insertFirst(element){
        const node = new _Node(element);
        node.next = this.head;
        this.head = node;
        this.size++;
    }

    insertLast(element){
        const node = new _Node(element)
        let current;
        if(this.head === null){
            this.head = node;
        } else {
            current = this.head;

            while(current.next){
                current = current.next;
            }

            current.next = node;
        }

        this.size++;
    }

    remove(item){
        if(!this.head){
            return null;
        }

        if(this.head.value === item){
            this.head = this.head.next;
            return
        }

        let currNode = this.head;
        
        let previousNode = this.head;

        while ((currNode !== null) && (currNode.value !== item)) {
            previousNode = currNode;
            currNode = currNode.next;
        }

        if (currNode === null) {
            console.log('Item not found');
            return;
        }
        previousNode.next = currNode.next;

        this.size --
    }

    find(item) {
        let currNode = this.head;

        if(!this.head) {
            return null;
        }
        while (currNode.value !== item) {
            if (currNode.next === null) {
                return null;
            }
            else {
                currNode = currNode.next;
            }
        }
        return currNode;
    }

    insertBefore(value) {
        let currNode = this.head;
        let previousNode = this.head;
        const newNode = new _Node(value)

        while (value !== currNode.value) {
            if (currNode.next === null) {
                return null;
            }
            else {
                newNode.next = previousNode.next
                previousNode.next === newNode
            }
        }
    }

    insertAfter(value){
        let currNode = this.head;
        const newNode = new _Node(value);

        while (value !== currNode.value) {
            if (currNode.next === null) {
                return null;
            }
            else {
                newNode.next = currNode.next
                currNode.next = newNode;
            }
        }
    }
}

module.exports = LinkedList;

