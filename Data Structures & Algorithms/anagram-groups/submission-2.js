class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let map = new Map();

        for (let str of strs) {
            const count = new Array(26).fill(0);
            for (let item of str) {
                const index = item.charCodeAt(0) - 97;
                count[index]++;
            }
            const key = count.join(",");

            if (!map.has(key)) {
                map.set(key, []);
            }

            map.get(key).push(str);
        }
        return Array.from(map.values());
    }
}
