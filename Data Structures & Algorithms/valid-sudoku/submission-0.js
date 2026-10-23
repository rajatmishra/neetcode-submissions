class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */

    isValidSudoku(board) {
        let rows = Array.from({ length: 9 }, () => new Set());
        let columns = Array.from({ length: 9 }, () => new Set());
        let boxes = Array.from({ length: 9 }, () => new Set());

        for (let row = 0; row < 9; row++) {
            for (let col = 0; col < 9; col++) {
                let nums = board[row][col];
                let boxIndex = Math.floor(row / 3) * 3 + Math.floor(col / 3);
                if (nums === ".") continue;
                if (rows[row].has(nums) || columns[col].has(nums) || boxes[boxIndex].has(nums)) {
                    return false;
                }
                rows[row].add(nums);
                columns[col].add(nums);
                boxes[boxIndex].add(nums);
            }
        }
        return true;
    }
}
