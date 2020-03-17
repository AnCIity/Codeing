// 基于数组的栈：后入先出 LIFO
class Stack {
    constructor() {
        this.items = [];
    }

    // push(element(s))：添加一个（或几个）新元素到栈顶
    // 向栈添加元素
    push(element) {
        this.items.push(element);
    }

    // pop()：移除栈顶的元素，同时返回被移除的元素
    // 从栈移除元素
    pop() {
        return this.items.pop();
    }

    // peek()：返回栈顶元素，不对栈做任何修改（该方法不会移除站顶的元素，仅仅返回它）
    // 查看栈顶元素
    peel() {
        return this.items[this.items.length - 1];
    }

    // isEmpty()：如果栈里没有任何元素就返回true，否则返回false
    // 检查栈是否为空
    isEmpty() {
        return this.items.length === 0;
    }

    // clear()：移除栈里的所有元素
    // 清空栈元素
    clear() {
        this.items = [];
    }

    // size()：返回栈里的元素个数。该方法和数组的length属性很相似
    // 查询栈大小
    size() {
        return this.items.length;
    }
}

