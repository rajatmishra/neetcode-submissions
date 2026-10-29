class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        let total = 0;
        let stack = [];
        for (let item of tokens) {
            if (item === "+" || item === "-" || item === "*" || item === "/") {
                let right = stack[stack.length-1];
                let left = stack[stack.length-2];
                if (item === "+") {
                    total = left + right;
                } else if (item === "*") {
                    total = left * right;
                } else if (item === "-") {
                    total = left - right;
                } else if (item === "/") {
                    total = Math.trunc(left / right);
                }
                stack.pop();
                stack.pop();
                stack.push(total)
            } else {
                stack.push(Number(item));
            }
        }
         return stack.pop();;
    }
}
