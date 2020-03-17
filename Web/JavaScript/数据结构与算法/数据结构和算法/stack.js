// 基于对象的栈：后入先出 LIFO

class Stack {

    constructor() {
        this.count = 0;
        this.items = {};
    }

    // 向栈中插入元素
    push(element) {
        this.items[this.count] = element;
        this.count++;
    }

    // 取栈的大小
    size() {
        return this.count;
    }

    // 检测栈是否为空
    isEmpty() {
        return this.count === 0;
    }

    // 从栈中弹出元素
    pop() {
        // 如果栈为空则返回 undefined
        if (this.isEmpty()) {
            return undefined
        }
        // 弹出操作
        this.count--;
        const result = this.items[this.count];
        delete this.items[this.count];
        return result;
    }

    // 查看栈顶
    peek() {
        if (this.isEmpty()) {
            return undefined;
        }
        return this.items[this.count - 1];
    }

    // 清空栈
    clear() {
        this.items = {};
        this.count = 0;
    }

    // 到字符串
    toString() {
        if (this.isEmpty()) {
            return '';
        }

        let result = '';
        for (let i = 0; i < this.count; i++) {
            const element = this.items[i];
            result += `${element}`;
        }

        return result;
    }

}
