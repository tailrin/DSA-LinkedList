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
        this.head = element;
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

    remove(node){

    }
}

