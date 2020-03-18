const LinkedList = require('./linked-list');

const main = () => {
    SLL = new LinkedList;

    SLL.insertFirst("Apollo");
    SLL.insertFirst("Boomer");
    SLL.insertFirst("Helo");
    SLL.insertFirst("Husker");
    SLL.insertFirst("Starbuck");
    SLL.insertLast("Tauhida");
    SLL.remove("Husker");
    console.log(SLL)
}



main();