class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        let obj = {
            ")":"(",
            "}":"{",
            "]":"[",
        }
        let stack = [];
        for(let item of s)
        {
            if(item === "(" ||item === "{" ||item === "[" )
            {
                stack.push(item);
            }
            else {
                if (stack.length === 0) {
                    return false;
                }

                if (obj[item] !== stack.pop()) {
                    return false;
                }}
        }
        return stack.length ===0;
    }
}
